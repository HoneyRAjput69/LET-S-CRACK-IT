import { db } from "@/db";
import { exams, papers, questions, notes, attempts } from "@/db/schema";
import { eq, sql, desc, and } from "drizzle-orm";
import { ensureSeeded } from "@/db/seed";

export async function getExamsWithCounts() {
  await ensureSeeded();
  const rows = await db
    .select({
      exam: exams,
      paperCount: sql<number>`count(distinct ${papers.id})::int`,
      questionCount: sql<number>`count(${questions.id})::int`,
    })
    .from(exams)
    .leftJoin(papers, eq(papers.examId, exams.id))
    .leftJoin(questions, eq(questions.paperId, papers.id))
    .groupBy(exams.id)
    .orderBy(exams.id);
  return rows;
}

export async function getStats() {
  await ensureSeeded();
  const [e] = await db.select({ c: sql<number>`count(*)::int` }).from(exams);
  const [p] = await db.select({ c: sql<number>`count(*)::int` }).from(papers);
  const [q] = await db.select({ c: sql<number>`count(*)::int` }).from(questions);
  const [n] = await db.select({ c: sql<number>`count(*)::int` }).from(notes);
  const [a] = await db.select({ c: sql<number>`count(*)::int` }).from(attempts);
  return { exams: e.c, papers: p.c, questions: q.c, notes: n.c, attempts: a.c };
}

export async function getExamBySlug(slug: string) {
  await ensureSeeded();
  const [exam] = await db.select().from(exams).where(eq(exams.slug, slug));
  if (!exam) return null;
  const paperRows = await db
    .select({
      paper: papers,
      questionCount: sql<number>`count(${questions.id})::int`,
    })
    .from(papers)
    .leftJoin(questions, eq(questions.paperId, papers.id))
    .where(eq(papers.examId, exam.id))
    .groupBy(papers.id)
    .orderBy(papers.id);
  const noteRows = await db.select().from(notes).where(eq(notes.examId, exam.id));
  return { exam, papers: paperRows, notes: noteRows };
}

export async function getPaperWithQuestions(paperId: number) {
  await ensureSeeded();
  const [row] = await db
    .select({ paper: papers, exam: exams })
    .from(papers)
    .innerJoin(exams, eq(exams.id, papers.examId))
    .where(eq(papers.id, paperId));
  if (!row) return null;
  const qs = await db.select().from(questions).where(eq(questions.paperId, paperId)).orderBy(questions.id);
  return { ...row, questions: qs };
}

export async function getAllNotes(subject?: string) {
  await ensureSeeded();
  const rows = await db
    .select({ note: notes, exam: exams })
    .from(notes)
    .leftJoin(exams, eq(exams.id, notes.examId))
    .where(subject ? eq(notes.subject, subject) : undefined)
    .orderBy(notes.id);
  return rows;
}

export async function getNoteBySlug(slug: string) {
  await ensureSeeded();
  const [row] = await db
    .select({ note: notes, exam: exams })
    .from(notes)
    .leftJoin(exams, eq(exams.id, notes.examId))
    .where(eq(notes.slug, slug));
  return row ?? null;
}

export async function getAttempt(id: number) {
  const [row] = await db
    .select({ attempt: attempts, paper: papers, exam: exams })
    .from(attempts)
    .innerJoin(papers, eq(papers.id, attempts.paperId))
    .innerJoin(exams, eq(exams.id, papers.examId))
    .where(eq(attempts.id, id));
  if (!row) return null;
  const qs = await db.select().from(questions).where(eq(questions.paperId, row.paper.id)).orderBy(questions.id);
  return { ...row, questions: qs };
}

export async function getRecentAttempts(limit = 30) {
  await ensureSeeded();
  return db
    .select({ attempt: attempts, paper: papers, exam: exams })
    .from(attempts)
    .innerJoin(papers, eq(papers.id, attempts.paperId))
    .innerJoin(exams, eq(exams.id, papers.examId))
    .where(and(eq(attempts.completed, true)))
    .orderBy(desc(attempts.createdAt))
    .limit(limit);
}
