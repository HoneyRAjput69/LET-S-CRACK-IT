import Link from "next/link";
import Hero3D from "@/components/Hero3D";
import Reveal from "@/components/Reveal";
import ExamCard from "@/components/ExamCard";
import { getExamsWithCounts, getStats, getAllNotes } from "@/lib/queries";

export const dynamic = "force-dynamic";

const features = [
  { icon: "🎯", title: "Real Exam Pattern", desc: "Marks, negative marking and timing exactly as UPSC, IAF, Navy & Army conduct them." },
  { icon: "⏱️", title: "Timed Test Engine", desc: "Auto-submit timer, question palette, mark-for-review and keyboard navigation." },
  { icon: "📊", title: "Instant Analysis", desc: "Score, accuracy, subject-wise breakdown and step-by-step explanations." },
  { icon: "📚", title: "Exam-wise Notes", desc: "Formula sheets, GK capsules, grammar rules, defence awareness and SSB guides." },
  { icon: "🧠", title: "SSB & OIR Practice", desc: "Officer Intelligence Rating sets plus the full 5-day SSB procedure decoded." },
  { icon: "🗄️", title: "Progress Saved", desc: "Every attempt is stored in the database — track your journey on the leaderboard." },
];

export default async function HomePage() {
  const [stats, examRows, noteRows] = await Promise.all([getStats(), getExamsWithCounts(), getAllNotes()]);

  return (
    <>
      <Hero3D stats={stats} />

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <h2 className="text-center text-4xl font-black md:text-5xl">
            Everything you need to <span className="text-gradient">get selected</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Modular, database-driven and built for serious aspirants — from soldier entries to officer academies.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div data-tilt className="glass h-full rounded-3xl p-6">
                <div className="text-4xl">{f.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Exams */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-black md:text-5xl">
              All <span className="text-gradient">Defence Exams</span> of India
            </h2>
            <p className="mt-3 text-slate-400">Choose your battlefield.</p>
          </div>
          <Link href="/exams" className="font-bold text-amber-400 hover:underline">
            View all →
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {examRows.slice(0, 6).map((r, i) => (
            <Reveal key={r.exam.id} delay={i * 0.07} direction="scale">
              <ExamCard exam={r.exam} paperCount={r.paperCount} questionCount={r.questionCount} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Notes preview */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-black md:text-5xl">
              Latest <span className="text-gradient">Study Notes</span>
            </h2>
            <p className="mt-3 text-slate-400">Crisp, exam-ready revision material.</p>
          </div>
          <Link href="/notes" className="font-bold text-cyan-400 hover:underline">
            Browse library →
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {noteRows.slice(0, 8).map((r, i) => (
            <Reveal key={r.note.id} delay={i * 0.05}>
              <Link href={`/notes/${r.note.slug}`}>
                <div data-tilt className="glass h-full rounded-2xl p-5 transition hover:border-cyan-400/40">
                  <div className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase">{r.note.subject}</div>
                  <h3 className="mt-2 line-clamp-2 font-bold text-white">{r.note.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs text-slate-400">{r.note.summary}</p>
                  <div className="mt-3 text-xs text-slate-500">⏱ {r.note.readMinutes} min read</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal direction="scale">
          <div className="glow-border glass relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
            <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-amber-500/20 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-cyan-500/20 blur-3xl" />
            <h2 className="relative text-4xl font-black md:text-5xl">
              Your uniform is waiting. <span className="text-gradient">Earn it.</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-slate-300">
              Start with a full-length mock today. Every attempt is scored, saved and analysed.
            </p>
            <Link
              href="/exams"
              className="relative mt-8 inline-block rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-lg font-black text-black shadow-xl shadow-amber-500/30 transition hover:scale-105"
            >
              Begin Training →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
