import { NextResponse } from "next/server";
import { getPaperWithQuestions } from "@/lib/queries";

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const data = await getPaperWithQuestions(Number(id));
  if (!data) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({
    paper: data.paper,
    exam: data.exam,
    questions: data.questions.map(({ correctIndex: _c, explanation: _e, ...rest }) => rest),
  });
}
