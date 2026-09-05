"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const orbitItems = ["🎖️", "✈️", "⚓", "🛡️", "🪖", "🚀"];

export default function Hero3D({ stats }: { stats: { exams: number; papers: number; questions: number; notes: number } }) {
  return (
    <section className="relative mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-28 pb-16 lg:grid-cols-2">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-amber-300 uppercase"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
          India&apos;s Defence Exam Command Centre
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl leading-[1.05] font-black tracking-tight md:text-7xl"
        >
          Train like a <span className="text-gradient">Warrior.</span>
          <br />
          Crack every <span className="text-gradient">Defence Exam.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-slate-300"
        >
          Real-pattern mock papers for NDA, CDS, AFCAT, CAPF, Agniveer, Navy SSR, Coast Guard, Territorial Army, MNS &
          SSB — with instant scoring, detailed solutions and exam-wise study notes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href="/exams"
            className="glow-border rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3.5 font-bold text-black shadow-lg shadow-amber-500/30 transition hover:scale-105"
          >
            Start Mock Tests →
          </Link>
          <Link
            href="/notes"
            className="glass rounded-xl px-7 py-3.5 font-bold text-white transition hover:scale-105 hover:border-cyan-400/50"
          >
            Browse Study Notes
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { label: "Exams", value: stats.exams },
            { label: "Mock Papers", value: stats.papers },
            { label: "Questions", value: stats.questions },
            { label: "Study Notes", value: stats.notes },
          ].map((s) => (
            <div key={s.label} data-tilt className="glass rounded-2xl p-4 text-center">
              <div className="text-3xl font-black text-white">{s.value}+</div>
              <div className="text-xs tracking-wider text-slate-400 uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3D scene */}
      <div className="scene relative flex h-[480px] items-center justify-center lg:h-[600px]">
        <div data-scene-rotate className="preserve-3d relative h-[360px] w-[360px] transition-transform duration-200 ease-out">
          {/* rings */}
          <div className="ring animate-[spin_20s_linear_infinite]" style={{ transform: "rotateX(70deg)" }} />
          <div className="ring" style={{ transform: "rotateX(70deg) rotateY(60deg) scale(1.25)", borderColor: "rgba(245,158,11,0.5)" }} />
          <div className="ring" style={{ transform: "rotateX(70deg) rotateY(-60deg) scale(1.5)", borderColor: "rgba(167,139,250,0.45)" }} />

          {/* central cube */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="cube">
              {[
                "translateZ(60px)",
                "rotateY(180deg) translateZ(60px)",
                "rotateY(90deg) translateZ(60px)",
                "rotateY(-90deg) translateZ(60px)",
                "rotateX(90deg) translateZ(60px)",
                "rotateX(-90deg) translateZ(60px)",
              ].map((t, i) => (
                <div key={i} className="cube-face" style={{ transform: t }}>
                  {["🇮🇳", "⭐", "🎯", "🏹", "🦁", "🛰️"][i]}
                </div>
              ))}
            </div>
          </div>

          {/* orbiting badges */}
          {orbitItems.map((icon, i) => (
            <div
              key={icon}
              className="preserve-3d absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                animation: `orbit ${14 + i * 2}s linear infinite`,
                animationDelay: `${-i * (14 / orbitItems.length)}s`,
              }}
            >
              <div className="glass flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-lg shadow-cyan-500/20">
                {icon}
              </div>
            </div>
          ))}

          {/* glow */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="absolute top-1/3 left-1/3 -z-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        {/* floating chips */}
        <div data-parallax="30" className="absolute top-6 left-4 hidden md:block">
          <div className="glass animate-float rounded-xl px-4 py-2 text-sm font-semibold text-amber-300">NDA · 2×/yr</div>
        </div>
        <div data-parallax="-25" className="absolute right-2 bottom-12 hidden md:block">
          <div className="glass animate-float rounded-xl px-4 py-2 text-sm font-semibold text-cyan-300" style={{ animationDelay: "1.5s" }}>
            AFCAT · +3 / −1
          </div>
        </div>
        <div data-parallax="18" className="absolute top-1/2 right-0 hidden md:block">
          <div className="glass animate-float rounded-xl px-4 py-2 text-sm font-semibold text-violet-300" style={{ animationDelay: "3s" }}>
            SSB · 5 Days
          </div>
        </div>
      </div>
    </section>
  );
}
