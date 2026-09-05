"use client";

import { motion } from "framer-motion";

export default function ScoreRing({ pct, label }: { pct: number; label: string }) {
  const r = 70;
  const c = 2 * Math.PI * r;
  const color = pct >= 70 ? "#34d399" : pct >= 40 ? "#fbbf24" : "#fb7185";
  return (
    <div className="relative flex h-44 w-44 items-center justify-center">
      <svg width="176" height="176" className="-rotate-90">
        <circle cx="88" cy="88" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="12" fill="none" />
        <motion.circle
          cx="88" cy="88" r={r} stroke={color} strokeWidth="12" fill="none" strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c - (c * Math.max(0, Math.min(100, pct))) / 100 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{ filter: `drop-shadow(0 0 10px ${color})` }}
        />
      </svg>
      <div className="absolute text-center">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="text-3xl font-black" style={{ color }}>
          {pct.toFixed(1)}%
        </motion.div>
        <div className="text-xs text-slate-400">{label}</div>
      </div>
    </div>
  );
}
