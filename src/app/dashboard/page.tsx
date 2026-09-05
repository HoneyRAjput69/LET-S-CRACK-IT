import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getRecentAttempts, getStats } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [rows, stats] = await Promise.all([getRecentAttempts(50), getStats()]);
  const ranked = [...rows].sort((a, b) => b.attempt.score / b.attempt.maxScore - a.attempt.score / a.attempt.maxScore);
  const avg = rows.length ? rows.reduce((s, r) => s + (r.attempt.score / r.attempt.maxScore) * 100, 0) / rows.length : 0;

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-16">
      <Reveal>
        <div className="text-xs font-bold tracking-widest text-amber-400 uppercase">War Room</div>
        <h1 className="mt-2 text-5xl font-black md:text-6xl">
          Leaderboard & <span className="text-gradient">Attempts</span>
        </h1>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { l: "Total attempts", v: stats.attempts },
          { l: "Average score", v: `${avg.toFixed(1)}%` },
          { l: "Question bank", v: stats.questions },
          { l: "Papers available", v: stats.papers },
        ].map((s, i) => (
          <Reveal key={s.l} delay={i * 0.07} direction="scale">
            <div data-tilt className="glass rounded-3xl p-6 text-center">
              <div className="text-3xl font-black">{s.v}</div>
              <div className="text-xs tracking-widest text-slate-400 uppercase">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-black">🏆 Top Scores</h2>
            {ranked.length === 0 && <p className="mt-4 text-slate-400">No attempts yet. <Link href="/exams" className="text-amber-400">Take the first test →</Link></p>}
            <ol className="mt-4 space-y-2">
              {ranked.slice(0, 10).map((r, i) => (
                <li key={r.attempt.id}>
                  <Link href={`/results/${r.attempt.id}`} className="flex items-center gap-4 rounded-2xl bg-white/5 p-3 hover:bg-white/10">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-xl font-black ${i === 0 ? "bg-amber-400 text-black" : i === 1 ? "bg-slate-300 text-black" : i === 2 ? "bg-orange-700 text-white" : "bg-white/10"}`}>{i + 1}</span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-bold">{r.attempt.candidateName}</div>
                      <div className="truncate text-xs text-slate-400">{r.exam.icon} {r.paper.title}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-emerald-400">{((r.attempt.score / r.attempt.maxScore) * 100).toFixed(1)}%</div>
                      <div className="text-xs text-slate-500">{r.attempt.score}/{r.attempt.maxScore}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
        <Reveal direction="right">
          <div className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-black">🕒 Recent Attempts</h2>
            {rows.length === 0 && <p className="mt-4 text-slate-400">Nothing here yet.</p>}
            <ul className="mt-4 space-y-2">
              {rows.slice(0, 12).map((r) => (
                <li key={r.attempt.id}>
                  <Link href={`/results/${r.attempt.id}`} className="flex items-center justify-between gap-3 rounded-2xl bg-white/5 p-3 hover:bg-white/10">
                    <div className="min-w-0">
                      <div className="truncate font-semibold">{r.paper.title}</div>
                      <div className="text-xs text-slate-400">{r.attempt.candidateName} · {new Date(r.attempt.createdAt).toLocaleString("en-IN")}</div>
                    </div>
                    <div className="shrink-0 text-right text-sm">
                      <span className="text-emerald-400">{r.attempt.correct}✓</span> <span className="text-rose-400">{r.attempt.wrong}✗</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
