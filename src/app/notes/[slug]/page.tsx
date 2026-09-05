import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getNoteBySlug, getAllNotes } from "@/lib/queries";
import { renderMarkdown } from "@/lib/markdown";

export const dynamic = "force-dynamic";

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const row = await getNoteBySlug(slug);
  if (!row) notFound();
  const related = (await getAllNotes(row.note.subject)).filter((r) => r.note.id !== row.note.id).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <Reveal>
            <Link href="/notes" className="text-sm text-slate-400 hover:text-cyan-400">← Notes library</Link>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-widest uppercase">
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-300">{row.note.subject}</span>
              {row.exam && (
                <Link href={`/exams/${row.exam.slug}`} className="rounded-full bg-amber-400/10 px-3 py-1 text-amber-300">
                  {row.exam.icon} {row.exam.name}
                </Link>
              )}
              <span className="text-slate-500">⏱ {row.note.readMinutes} min read</span>
            </div>
            <h1 className="mt-4 text-4xl font-black md:text-5xl">{row.note.title}</h1>
            <p className="mt-3 text-lg text-slate-400">{row.note.summary}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <article className="note-prose glass mt-8 rounded-3xl p-6 md:p-10">{renderMarkdown(row.note.content)}</article>
          </Reveal>
        </div>
        <aside className="space-y-5 lg:sticky lg:top-28 lg:h-fit">
          <Reveal direction="right">
            <div className="glass glow-border rounded-3xl p-6">
              <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Tags</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {row.note.tags.map((t) => (
                  <span key={t} className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">#{t}</span>
                ))}
              </div>
              {row.exam && (
                <Link href={`/exams/${row.exam.slug}`} className="mt-5 block rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 py-3 text-center font-black text-black">
                  Practice {row.exam.name} Mocks →
                </Link>
              )}
            </div>
          </Reveal>
          {related.length > 0 && (
            <Reveal direction="right" delay={0.1}>
              <div className="glass rounded-3xl p-6">
                <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Related notes</div>
                <ul className="mt-3 space-y-3">
                  {related.map((r) => (
                    <li key={r.note.id}>
                      <Link href={`/notes/${r.note.slug}`} className="block rounded-xl bg-white/5 p-3 text-sm font-semibold text-slate-200 hover:bg-white/10">
                        {r.note.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </aside>
      </div>
    </div>
  );
}
