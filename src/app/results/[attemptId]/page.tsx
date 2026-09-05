import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ScoreRing from "@/components/ScoreRing";
import { getAttempt } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function ResultPage({ params }: { params: Promise<{ attemptId: string }> }) {
  const { attemptId } = await params;
  const data = await getAttempt(Number(attemptId));
  if (!data) notFound();
  const { attempt, paper, exam, questions } = data;
  const pct = attempt.maxScore ? Math.max(0, (attempt.score / attempt.maxScore) * 100) : 0;
  const attempted = attempt.correct + attempt.wrong;
  const accuracy = attempted ? (attempt.correct / attempted) * 100 : 0;
  const mins = Math.floor(attempt.timeTakenSeconds / 60);
  const secs = attempt.timeTakenSeconds % 60;

  const subjectStats = new Map<string, { total: number; correct: number; wrong: number }>();
  for (const q of questions) {
    const s = subjectStats.get(q.subject) ?? { total: 0, correct: 0, wrong: 0 };
    s.total++;
    const a = attempt.answers[String(q.id)];
    if (a !== undefined) {
      if (a === q.correctIndex) s.correct++;
      else s.wrong++;
    }
    subjectStats.set(q.subject, s);
  }

  const verdict = pct >= 70 ? "Outstanding — Officer material!" : pct >= 50 ? "Good — you're on track." : pct >= 30 ? "Keep training, cadet." : "Regroup and revise the notes.";

  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-16">
      <Reveal>
        <div className="text-xs font-bold tracking-widest text-amber-400 uppercase">{exam.name} · Result</div>
        <h1 className="mt-2 text-4xl font-black md:text-5xl">{paper.title}</h1>
        <p className="mt-2 text-slate-400">
          Candidate: <b className="text-white">{attempt.candidateName}</b> · {new Date(attempt.createdAt).toLocaleString("en-IN")}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Reveal direction="scale">
          <div className="glass glow-border flex h-full flex-col items-center justify-center rounded-3xl p-8">
            <ScoreRing pct={pct} label="Score" />
            <div className="mt-4 text-3xl font-black">
              {attempt.score} <span className="text-lg text-slate-400">/ {attempt.maxScore}</span>
            </div>
            <div className="mt-2 text-center text-sm font-semibold text-amber-300">{verdict}</div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="glass h-full rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-2xl bg-emerald-500/10 p-4 text-center"><div className="text-3xl font-black text-emerald-400">{attempt.correct}</div><div className="text-xs text-slate-400">Correct</div></div>
              <div className="rounded-2xl bg-rose-500/10 p-4 text-center"><div className="text-3xl font-black text-rose-400">{attempt.wrong}</div><div className="text-xs text-slate-400">Wrong</div></div>
              <div className="rounded-2xl bg-white/5 p-4 text-center"><div className="text-3xl font-black text-slate-300">{attempt.skipped}</div><div className="text-xs text-slate-400">Skipped</div></div>
              <div className="rounded-2xl bg-cyan-500/10 p-4 text-center"><div className="text-3xl font-black text-cyan-300">{accuracy.toFixed(0)}%</div><div className="text-xs text-slate-400">Accuracy</div></div>
            </div>
            <div className="mt-4 text-sm text-slate-400">
              ⏱ Time taken: <b className="text-white">{mins}m {secs}s</b> of {paper.durationMinutes} min · Negative marking −{paper.negativeMarks}/wrong
            </div>
            <div className="mt-6">
              <div className="mb-3 text-xs font-bold tracking-widest text-slate-400 uppercase">Subject-wise Performance</div>
              <div className="space-y-3">
                {Array.from(subjectStats.entries()).map(([s, v]) => {
                  const p = v.total ? (v.correct / v.total) * 100 : 0;
                  return (
                    <div key={s}>
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold">{s}</span>
                        <span className="text-slate-400">{v.correct}/{v.total} correct · {v.wrong} wrong</span>
                      </div>
                      <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-emerald-400" style={{ width: `${p}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`/mock/${paper.id}`} className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2.5 font-bold text-black">Retake Test</Link>
              <Link href={`/exams/${exam.slug}`} className="rounded-xl border border-white/10 px-5 py-2.5 font-bold hover:bg-white/5">More {exam.name} papers</Link>
              <Link href="/dashboard" className="rounded-xl border border-cyan-400/40 px-5 py-2.5 font-bold text-cyan-300 hover:bg-cyan-400/10">Leaderboard</Link>
            </div>
          </div>
        </Reveal>
      </div>

      <section className="mt-14">
        <Reveal>
          <h2 className="text-3xl font-black">
            Detailed <span className="text-gradient">Solutions</span>
          </h2>
        </Reveal>
        <div className="mt-6 space-y-4">
          {questions.map((q, i) => {
            const a = attempt.answers[String(q.id)];
            const isCorrect = a === q.correctIndex;
            const status = a === undefined ? "skipped" : isCorrect ? "correct" : "wrong";
            return (
              <Reveal key={q.id} delay={Math.min(i, 8) * 0.03}>
                <div className={`glass rounded-2xl border-l-4 p-5 ${status === "correct" ? "border-l-emerald-400" : status === "wrong" ? "border-l-rose-400" : "border-l-slate-500"}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex gap-2">
                      <span className="rounded-full bg-white/5 px-2.5 py-1 text-slate-300">Q{i + 1}</span>
                      <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-cyan-300">{q.subject} · {q.topic}</span>
                    </div>
                    <span className={`font-bold uppercase ${status === "correct" ? "text-emerald-400" : status === "wrong" ? "text-rose-400" : "text-slate-400"}`}>{status}</span>
                  </div>
                  <p className="mt-3 font-semibold text-white">{q.question}</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {q.options.map((o, oi) => {
                      const cls =
                        oi === q.correctIndex
                          ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-200"
                          : oi === a
                            ? "border-rose-400/60 bg-rose-400/10 text-rose-200"
                            : "border-white/5 bg-white/[0.02] text-slate-400";
                      return (
                        <div key={oi} className={`rounded-xl border px-3 py-2 text-sm ${cls}`}>
                          <b>{String.fromCharCode(65 + oi)}.</b> {o}
                          {oi === q.correctIndex && " ✓"}
                          {oi === a && oi !== q.correctIndex && " ✗"}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 rounded-xl bg-amber-400/5 p-3 text-sm text-slate-300">
                    <b className="text-amber-300">Explanation:</b> {q.explanation}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
