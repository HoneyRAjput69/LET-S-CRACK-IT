import Reveal from "@/components/Reveal";
import ExamCard from "@/components/ExamCard";
import { getExamsWithCounts } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function ExamsPage() {
  const rows = await getExamsWithCounts();
  const forces = Array.from(new Set(rows.map((r) => r.exam.force)));

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-16">
      <Reveal>
        <div className="text-xs font-bold tracking-widest text-amber-400 uppercase">Mission Select</div>
        <h1 className="mt-2 text-5xl font-black md:text-6xl">
          All Indian <span className="text-gradient">Defence Exams</span>
        </h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          Officer and soldier entries across Army, Navy, Air Force, Coast Guard and Central Armed Police Forces. Each exam
          includes multiple full-length mock papers and dedicated notes.
        </p>
      </Reveal>

      {forces.map((force) => (
        <section key={force} className="mt-14">
          <Reveal>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-black">
              <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-amber-400 to-cyan-400" />
              {force}
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rows
              .filter((r) => r.exam.force === force)
              .map((r, i) => (
                <Reveal key={r.exam.id} delay={i * 0.07} direction="scale">
                  <ExamCard exam={r.exam} paperCount={r.paperCount} questionCount={r.questionCount} />
                </Reveal>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
