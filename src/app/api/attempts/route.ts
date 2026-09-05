import { NextResponse } from "next/server";
import { db } from "@/db";
import { attempts, papers, questions } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      paperId: number;
      answers: Record<string, number>;
      timeTakenSeconds: number;
      candidateName?: string;
    };
    const paperId = Number(body.paperId);
    if (!paperId) return NextResponse.json({ error: "paperId required" }, { status: 400 });

    const [paper] = await db.select().from(papers).where(eq(papers.id, paperId));
    if (!paper) return NextResponse.json({ error: "Paper not found" }, { status: 404 });
    const qs = await db.select().from(questions).where(eq(questions.paperId, paperId));

    let correct = 0, wrong = 0, skipped = 0;
    for (const q of qs) {
      const a = body.answers?.[String(q.id)];
      if (a === undefined || a === null) skipped++;
      else if (a === q.correctIndex) correct++;
      else wrong++;
    }
    const score = Math.round((correct * paper.marksPerQuestion - wrong * paper.negativeMarks) * 100) / 100;
    const maxScore = qs.length * paper.marksPerQuestion;

    const [row] = await db
      .insert(attempts)
      .values({
        paperId,
        candidateName: (body.candidateName || "Aspirant").slice(0, 60),
        answers: body.answers ?? {},
        score,
        maxScore,
        correct,
        wrong,
        skipped,
        timeTakenSeconds: Math.max(0, Math.floor(body.timeTakenSeconds || 0)),
        completed: true,
      })
      .returning({ id: attempts.id });

    return NextResponse.json({ id: row.id, score, maxScore, correct, wrong, skipped });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
