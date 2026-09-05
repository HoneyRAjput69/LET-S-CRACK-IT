import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getExamBySlug } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function ExamDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getExamBySlug(slug);
  if (!data) notFound();
  const { exam, papers, notes } = data;

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-16">
      <Reveal>
        <Link href="/exams" className="text-sm text-slate-400 hover:text-amber-400">← All exams</Link>
        <div className="mt-4 flex flex-wrap items-center gap-5">
          <div className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${exam.color} text-5xl shadow-2xl`}>
            {exam.icon}
          </div>
          <div>
            <h1 className="text-4xl font-black md:text-6xl">{exam.name}</h1>
            <p className="mt-1 text-slate-400">{exam.fullName}</p>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2" direction="left">
          <div data-tilt className="glass h-full rounded-3xl p-7">
            <h2 className="text-lg font-bold text-amber-300">About the Exam</h2>
            <p className="mt-2 text-slate-300">{exam.description}</p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-4">
                <dt className="text-xs tracking-widest text-slate-400 uppercase">Conducted by</dt>
                <dd className="mt-1 font-semibold text-white">{exam.conductedBy}</dd>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <dt className="text-xs tracking-widest text-slate-400 uppercase">Frequency</dt>
                <dd className="mt-1 font-semibold text-white">{exam.frequency}</dd>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 sm:col-span-2">
                <dt className="text-xs tracking-widest text-slate-400 uppercase">Eligibility</dt>
                <dd className="mt-1 text-slate-200">{exam.eligibility}</dd>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 sm:col-span-2">
                <dt className="text-xs tracking-widest text-slate-400 uppercase">Exam Pattern</dt>
                <dd className="mt-1 text-slate-200">{exam.pattern}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
        <Reveal direction="right">
          <div className="glass glow-border h-full rounded-3xl p-7">
            <h2 className="text-lg font-bold text-cyan-300">Quick Stats</h2>
            <div className="mt-4 space-y-3">
              <div className="flex justify-between rounded-xl bg-white/5 p-3"><span className="text-slate-400">Mock papers</span><b>{papers.length}</b></div>
              <div className="flex justify-between rounded-xl bg-white/5 p-3"><span className="text-slate-400">Total questions</span><b>{papers.reduce((s, p) => s + p.questionCount, 0)}</b></div>
              <div className="flex justify-between rounded-xl bg-white/5 p-3"><span className="text-slate-400">Notes</span><b>{notes.length}</b></div>
            </div>
            <Link href="/notes" className="mt-5 block rounded-xl border border-cyan-400/40 bg-cyan-400/10 py-3 text-center font-bold text-cyan-300 hover:bg-cyan-400/20">
              Open Notes Library
            </Link>
          </div>
        </Reveal>
      </div>

      <section className="mt-16">
        <Reveal>
          <h2 className="text-3xl font-black">
            Mock <span className="text-gradient">Question Papers</span>
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {papers.map((p, i) => (
            <Reveal key={p.paper.id} delay={i * 0.06}>
              <div data-tilt className="glass group flex h-full flex-col justify-between rounded-3xl p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">{p.paper.subject}</span>
                    <span className={`text-xs font-semibold ${p.paper.difficulty === "Hard" ? "text-rose-400" : "text-emerald-400"}`}>
                      ● {p.paper.difficulty}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">{p.paper.title}</h3>
                  <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs">
                    <div className="rounded-xl bg-white/5 p-2"><div className="font-black text-white">{p.questionCount}</div><div className="text-slate-500">Qs</div></div>
                    <div className="rounded-xl bg-white/5 p-2"><div className="font-black text-white">{p.paper.durationMinutes}</div><div className="text-slate-500">min</div></div>
                    <div className="rounded-xl bg-white/5 p-2"><div className="font-black text-emerald-400">+{p.paper.marksPerQuestion}</div><div className="text-slate-500">correct</div></div>
                    <div className="rounded-xl bg-white/5 p-2"><div className="font-black text-rose-400">−{p.paper.negativeMarks}</div><div className="text-slate-500">wrong</div></div>
                  </div>
                </div>
                <Link
                  href={`/mock/${p.paper.id}`}
                  className="mt-6 block rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 py-3 text-center font-black text-black transition group-hover:scale-[1.02]"
                >
                  Start Test →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {notes.length > 0 && (
        <section className="mt-16">
          <Reveal>
            <h2 className="text-3xl font-black">
              {exam.name} <span className="text-gradient">Notes</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((n, i) => (
              <Reveal key={n.id} delay={i * 0.06}>
                <Link href={`/notes/${n.slug}`}>
                  <div data-tilt className="glass h-full rounded-2xl p-5 hover:border-cyan-400/40">
                    <div className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase">{n.subject}</div>
                    <h3 className="mt-2 font-bold text-white">{n.title}</h3>
                    <p className="mt-2 line-clamp-2 text-xs text-slate-400">{n.summary}</p>
                    <div className="mt-3 text-xs text-slate-500">⏱ {n.readMinutes} min read</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
