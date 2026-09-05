import { db } from "@/db";
import { exams, papers, questions, notes } from "@/db/schema";
import { sql } from "drizzle-orm";
import { examSeeds } from "./seed-data/exams";
import { banks, generateMath, generateReasoning, type QSeed } from "./seed-data/questions";
import { noteSeeds } from "./seed-data/notes";

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededShuffle<T>(arr: T[], seed: number) {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Build a question list for a paper from subject banks + generators */
function composePaper(paperKey: string, subjects: string[], count: number): QSeed[] {
  const seed = hash(paperKey);
  const perSubject = Math.ceil(count / subjects.length);
  const out: QSeed[] = [];
  subjects.forEach((subject, idx) => {
    const bank = banks[subject] ?? [];
    const shuffled = seededShuffle(bank, seed + idx * 97);
    let picked = shuffled.slice(0, perSubject);
    if (picked.length < perSubject) {
      const need = perSubject - picked.length;
      if (subject === "Mathematics") picked = picked.concat(generateMath(seed + idx, need));
      else if (subject === "Reasoning") picked = picked.concat(generateReasoning(seed + idx, need));
    }
    out.push(...picked);
  });
  // Add a few generated items for variety in Maths/Reasoning-heavy papers
  if (subjects.includes("Mathematics")) out.push(...generateMath(seed ^ 0xabc, Math.max(4, Math.floor(count * 0.15))));
  if (subjects.includes("Reasoning")) out.push(...generateReasoning(seed ^ 0xdef, Math.max(3, Math.floor(count * 0.1))));
  return seededShuffle(out, seed ^ 0x5555).slice(0, count);
}

let seedPromise: Promise<void> | null = null;

export async function ensureSeeded() {
  if (!seedPromise) {
    seedPromise = (async () => {
      const [{ c }] = await db.select({ c: sql<number>`count(*)::int` }).from(exams);
      if (Number(c) > 0) return;
      await seedAll();
    })().catch((e) => {
      seedPromise = null;
      throw e;
    });
  }
  return seedPromise;
}

export async function seedAll() {
  const examIdBySlug = new Map<string, number>();
  for (const ex of examSeeds) {
    const [row] = await db
      .insert(exams)
      .values({
        slug: ex.slug,
        name: ex.name,
        fullName: ex.fullName,
        conductedBy: ex.conductedBy,
        force: ex.force,
        eligibility: ex.eligibility,
        pattern: ex.pattern,
        description: ex.description,
        icon: ex.icon,
        color: ex.color,
        frequency: ex.frequency,
      })
      .returning({ id: exams.id });
    examIdBySlug.set(ex.slug, row.id);

    for (const p of ex.papers) {
      const [paper] = await db
        .insert(papers)
        .values({
          examId: row.id,
          title: p.title,
          subject: p.subject,
          durationMinutes: p.durationMinutes,
          marksPerQuestion: p.marksPerQuestion,
          negativeMarks: p.negativeMarks,
          difficulty: p.title.includes("2") ? "Hard" : "Moderate",
        })
        .returning({ id: papers.id });
      const qs = composePaper(`${ex.slug}:${p.title}`, p.subjects, p.count);
      if (qs.length) {
        await db.insert(questions).values(
          qs.map((qq) => ({
            paperId: paper.id,
            subject: qq.subject,
            topic: qq.topic,
            question: qq.question,
            options: qq.options,
            correctIndex: qq.correctIndex,
            explanation: qq.explanation,
            difficulty: qq.difficulty ?? "Moderate",
          }))
        );
      }
    }
  }

  await db.insert(notes).values(
    noteSeeds.map((n) => ({
      slug: n.slug,
      examId: n.examSlug ? examIdBySlug.get(n.examSlug) ?? null : null,
      subject: n.subject,
      title: n.title,
      summary: n.summary,
      content: n.content,
      readMinutes: n.readMinutes,
      tags: n.tags,
    }))
  );
}
