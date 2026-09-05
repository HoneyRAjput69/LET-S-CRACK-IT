import Link from "next/link";
import type { Exam } from "@/db/schema";

export default function ExamCard({
  exam,
  paperCount,
  questionCount,
}: {
  exam: Exam;
  paperCount: number;
  questionCount: number;
}) {
  return (
    <Link href={`/exams/${exam.slug}`} className="block h-full">
      <div data-tilt className="glass group relative h-full overflow-hidden rounded-3xl p-6 transition-shadow hover:shadow-2xl hover:shadow-amber-500/10">
        <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${exam.color} opacity-30 blur-3xl transition group-hover:opacity-60`} />
        <div className="flex items-start justify-between">
          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${exam.color} text-3xl shadow-lg`}>
            {exam.icon}
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-wider text-slate-300 uppercase">
            {exam.force}
          </span>
        </div>
        <h3 className="mt-5 text-2xl font-black text-white">{exam.name}</h3>
        <p className="mt-1 text-sm text-slate-400">{exam.fullName}</p>
        <p className="mt-3 line-clamp-2 text-sm text-slate-300">{exam.description}</p>
        <div className="mt-5 flex items-center gap-4 text-xs text-slate-400">
          <span>📝 {paperCount} papers</span>
          <span>❓ {questionCount} questions</span>
        </div>
        <div className="mt-5 flex items-center justify-between text-sm">
          <span className="text-slate-500">{exam.conductedBy}</span>
          <span className="font-bold text-amber-400 transition group-hover:translate-x-1">Enter →</span>
        </div>
      </div>
    </Link>
  );
}
