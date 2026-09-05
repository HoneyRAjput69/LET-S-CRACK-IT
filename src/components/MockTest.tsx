"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type Q = { id: number; subject: string; topic: string; question: string; options: string[]; difficulty: string };
type PaperInfo = {
  id: number;
  title: string;
  subject: string;
  durationMinutes: number;
  marksPerQuestion: number;
  negativeMarks: number;
};

export default function MockTest({ paper, examName, questions }: { paper: PaperInfo; examName: string; questions: Q[] }) {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [name, setName] = useState("");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [review, setReview] = useState<Set<number>>(new Set());
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));
  const [secondsLeft, setSecondsLeft] = useState(paper.durationMinutes * 60);
  const [submitting, setSubmitting] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const startTs = useRef<number>(0);

  const q = questions[idx];
  const answered = Object.keys(answers).length;

  const submit = useCallback(async () => {
    if (submitting) return;
    setSubmitting(true);
    const timeTaken = Math.floor((Date.now() - startTs.current) / 1000);
    try {
      const res = await fetch("/api/attempts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paperId: paper.id, answers, timeTakenSeconds: timeTaken, candidateName: name || "Aspirant" }),
      });
      const data = await res.json();
      if (data.id) router.push(`/results/${data.id}`);
      else setSubmitting(false);
    } catch {
      setSubmitting(false);
    }
  }, [answers, name, paper.id, router, submitting]);

  useEffect(() => {
    if (!started) return;
    const t = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          submit();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [started, submit]);

  useEffect(() => {
    if (!started) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(idx + 1);
      if (e.key === "ArrowLeft") go(idx - 1);
      if (["1", "2", "3", "4"].includes(e.key)) choose(Number(e.key) - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, idx, q]);

  const go = (i: number) => {
    if (i < 0 || i >= questions.length) return;
    setIdx(i);
    setVisited((v) => new Set(v).add(i));
  };
  const choose = (o: number) => {
    if (!q || o >= q.options.length) return;
    setAnswers((a) => ({ ...a, [q.id]: o }));
  };
  const clear = () => {
    setAnswers((a) => {
      const c = { ...a };
      delete c[q.id];
      return c;
    });
  };
  const toggleReview = () => {
    setReview((r) => {
      const n = new Set(r);
      if (n.has(idx)) n.delete(idx);
      else n.add(idx);
      return n;
    });
  };

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");
  const pct = (secondsLeft / (paper.durationMinutes * 60)) * 100;

  const subjects = useMemo(() => Array.from(new Set(questions.map((x) => x.subject))), [questions]);

  if (!started) {
    return (
      <div className="mx-auto flex min-h-screen max-w-3xl items-center px-6 pt-28 pb-16">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass glow-border w-full rounded-3xl p-8 md:p-12">
          <div className="text-xs font-bold tracking-widest text-amber-400 uppercase">{examName}</div>
          <h1 className="mt-2 text-3xl font-black md:text-4xl">{paper.title}</h1>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-2xl bg-white/5 p-4 text-center"><div className="text-2xl font-black">{questions.length}</div><div className="text-xs text-slate-400">Questions</div></div>
            <div className="rounded-2xl bg-white/5 p-4 text-center"><div className="text-2xl font-black">{paper.durationMinutes}</div><div className="text-xs text-slate-400">Minutes</div></div>
            <div className="rounded-2xl bg-white/5 p-4 text-center"><div className="text-2xl font-black text-emerald-400">+{paper.marksPerQuestion}</div><div className="text-xs text-slate-400">Correct</div></div>
            <div className="rounded-2xl bg-white/5 p-4 text-center"><div className="text-2xl font-black text-rose-400">−{paper.negativeMarks}</div><div className="text-xs text-slate-400">Wrong</div></div>
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-slate-300">
            <div className="mb-2 font-bold text-white">Instructions</div>
            <ul className="list-disc space-y-1 pl-5">
              <li>Sections: {subjects.join(", ")}</li>
              <li>Timer starts when you click Begin. The test auto-submits when time is over.</li>
              <li>Use keyboard: ← → to navigate, 1–4 to select options.</li>
              <li>Mark questions for review; unanswered questions carry no penalty.</li>
            </ul>
          </div>
          <div className="mt-6">
            <label className="text-xs font-bold tracking-widest text-slate-400 uppercase">Your name (for leaderboard)</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Cadet Arjun"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-amber-400"
            />
          </div>
          <button
            onClick={() => {
              startTs.current = Date.now();
              setStarted(true);
            }}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 py-4 text-lg font-black text-black shadow-xl shadow-amber-500/30 transition hover:scale-[1.02]"
          >
            Begin Test →
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pt-24 pb-10">
      {/* Top bar */}
      <div className="glass-strong sticky top-20 z-30 mb-5 rounded-2xl p-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">{examName}</div>
            <div className="font-bold">{paper.title}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-400">
              <b className="text-white">{answered}</b>/{questions.length} answered
            </div>
            <div className={`rounded-xl px-4 py-2 font-mono text-xl font-black ${secondsLeft < 300 ? "animate-pulse bg-rose-500/20 text-rose-300" : "bg-white/5 text-cyan-300"}`}>
              ⏱ {mm}:{ss}
            </div>
            <button onClick={() => setConfirm(true)} className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 font-bold text-black">
              Submit
            </button>
          </div>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full bg-gradient-to-r from-amber-400 to-cyan-400 transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
        {/* Question */}
        <div className="scene">
          <AnimatePresence mode="wait">
            <motion.div
              key={q.id}
              initial={{ opacity: 0, rotateY: -15, x: 40 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              exit={{ opacity: 0, rotateY: 15, x: -40 }}
              transition={{ duration: 0.3 }}
              className="glass preserve-3d rounded-3xl p-6 md:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex gap-2">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 font-bold text-cyan-300">{q.subject}</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-slate-300">{q.topic}</span>
                </div>
                <span className="text-slate-500">
                  Q {idx + 1} / {questions.length} · {q.difficulty}
                </span>
              </div>
              <h2 className="mt-5 text-lg leading-relaxed font-semibold text-white md:text-xl">{q.question}</h2>
              <div className="mt-6 grid gap-3">
                {q.options.map((opt, i) => {
                  const sel = answers[q.id] === i;
                  return (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.01, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => choose(i)}
                      className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
                        sel
                          ? "border-amber-400 bg-amber-400/15 shadow-lg shadow-amber-500/20"
                          : "border-white/10 bg-white/5 hover:border-white/30"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-black ${
                          sel ? "bg-amber-400 text-black" : "bg-white/10 text-slate-300"
                        }`}
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-slate-100">{opt}</span>
                    </motion.button>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex gap-2">
                  <button onClick={clear} className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 hover:bg-white/5">
                    Clear
                  </button>
                  <button
                    onClick={toggleReview}
                    className={`rounded-xl border px-4 py-2 text-sm ${review.has(idx) ? "border-violet-400 bg-violet-400/20 text-violet-200" : "border-white/10 text-slate-300 hover:bg-white/5"}`}
                  >
                    {review.has(idx) ? "★ Marked" : "☆ Mark for review"}
                  </button>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => go(idx - 1)} disabled={idx === 0} className="rounded-xl bg-white/10 px-5 py-2 font-bold disabled:opacity-30">
                    ← Prev
                  </button>
                  {idx < questions.length - 1 ? (
                    <button onClick={() => go(idx + 1)} className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2 font-bold text-black">
                      Save & Next →
                    </button>
                  ) : (
                    <button onClick={() => setConfirm(true)} className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2 font-bold text-black">
                      Finish ✓
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Palette */}
        <aside className="glass h-fit rounded-3xl p-5 lg:sticky lg:top-44">
          <div className="mb-3 text-xs font-bold tracking-widest text-slate-400 uppercase">Question Palette</div>
          <div className="grid grid-cols-6 gap-2 lg:grid-cols-5">
            {questions.map((qq, i) => {
              const isAns = answers[qq.id] !== undefined;
              const isRev = review.has(i);
              const isVis = visited.has(i);
              const cls = isRev
                ? "bg-violet-500 text-white"
                : isAns
                  ? "bg-emerald-500 text-black"
                  : isVis
                    ? "bg-rose-500/70 text-white"
                    : "bg-white/10 text-slate-300";
              return (
                <button
                  key={qq.id}
                  onClick={() => go(i)}
                  className={`h-9 rounded-lg text-xs font-bold transition hover:scale-110 ${cls} ${i === idx ? "ring-2 ring-amber-400" : ""}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <div className="mt-4 space-y-1.5 text-xs text-slate-400">
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-emerald-500" /> Answered ({answered})</div>
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-rose-500/70" /> Not answered</div>
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-violet-500" /> Marked for review ({review.size})</div>
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-white/10" /> Not visited</div>
          </div>
        </aside>
      </div>

      {/* Confirm modal */}
      <AnimatePresence>
        {confirm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur">
            <motion.div initial={{ scale: 0.8, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 30 }} className="glass-strong w-full max-w-md rounded-3xl p-8">
              <h3 className="text-2xl font-black">Submit test?</h3>
              <p className="mt-2 text-slate-300">
                Answered <b className="text-emerald-400">{answered}</b>, unanswered <b className="text-rose-400">{questions.length - answered}</b>, marked{" "}
                <b className="text-violet-300">{review.size}</b>.
              </p>
              <div className="mt-6 flex gap-3">
                <button onClick={() => setConfirm(false)} className="flex-1 rounded-xl border border-white/10 py-3 font-bold">
                  Continue
                </button>
                <button onClick={submit} disabled={submitting} className="flex-1 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-3 font-black text-black disabled:opacity-50">
                  {submitting ? "Submitting…" : "Yes, Submit"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
