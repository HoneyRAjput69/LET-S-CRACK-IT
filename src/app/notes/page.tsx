import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getAllNotes } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function NotesPage({ searchParams }: { searchParams: Promise<{ subject?: string }> }) {
  const { subject } = await searchParams;
  const all = await getAllNotes();
  const subjects = Array.from(new Set(all.map((r) => r.note.subject)));
  const rows = subject ? all.filter((r) => r.note.subject === subject) : all;

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-16">
      <Reveal>
        <div className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Knowledge Armoury</div>
        <h1 className="mt-2 text-5xl font-black md:text-6xl">
          Study <span className="text-gradient">Notes</span>
        </h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          Formula sheets, GK capsules, grammar rules, defence awareness, strategy guides and SSB preparation — organised
          by subject and exam.
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
        <Link href="/notes" className={`rounded-full px-4 py-2 text-sm font-bold transition ${!subject ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black" : "glass text-slate-300 hover:text-white"}`}>
          All ({all.length})
        </Link>
        {subjects.map((s) => (
          <Link key={s} href={`/notes?subject=${encodeURIComponent(s)}`} className={`rounded-full px-4 py-2 text-sm font-bold transition ${subject === s ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black" : "glass text-slate-300 hover:text-white"}`}>
            {s} ({all.filter((r) => r.note.subject === s).length})
          </Link>
        ))}
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rows.map((r, i) => (
          <Reveal key={r.note.id} delay={(i % 6) * 0.06} direction="scale">
            <Link href={`/notes/${r.note.slug}`} className="block h-full">
              <div data-tilt className="glass group relative h-full overflow-hidden rounded-3xl p-6 hover:border-cyan-400/40">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:bg-cyan-500/30" />
                <div className="flex items-center justify-between text-[11px] font-bold tracking-widest uppercase">
                  <span className="text-cyan-300">{r.note.subject}</span>
                  {r.exam && <span className="rounded-full bg-white/5 px-2 py-0.5 text-slate-300">{r.exam.icon} {r.exam.name}</span>}
                </div>
                <h3 className="mt-3 text-lg font-bold text-white">{r.note.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-slate-400">{r.note.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {r.note.tags.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-slate-400">#{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>⏱ {r.note.readMinutes} min read</span>
                  <span className="font-bold text-amber-400 group-hover:translate-x-1">Read →</span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
