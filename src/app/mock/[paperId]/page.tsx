import { notFound } from "next/navigation";
import MockTest from "@/components/MockTest";
import { getPaperWithQuestions } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function MockPage({ params }: { params: Promise<{ paperId: string }> }) {
  const { paperId } = await params;
  const data = await getPaperWithQuestions(Number(paperId));
  if (!data || data.questions.length === 0) notFound();

  const questions = data.questions.map((q) => ({
    id: q.id,
    subject: q.subject,
    topic: q.topic,
    question: q.question,
    options: q.options,
    difficulty: q.difficulty,
  }));

  return (
    <MockTest
      paper={{
        id: data.paper.id,
        title: data.paper.title,
        subject: data.paper.subject,
        durationMinutes: data.paper.durationMinutes,
        marksPerQuestion: data.paper.marksPerQuestion,
        negativeMarks: data.paper.negativeMarks,
      }}
      examName={data.exam.name}
      questions={questions}
    />
  );
}
