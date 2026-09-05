"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/exams", label: "Exams & Mocks" },
  { href: "/notes", label: "Study Notes" },
  { href: "/dashboard", label: "Leaderboard" },
];

export default function Navbar() {
  const path = usePathname();
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav className="glass-strong mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-xl shadow-lg shadow-amber-500/40">
            🎖️
            <span className="absolute inset-0 animate-ping rounded-xl bg-amber-400/30" />
          </span>
          <span className="text-lg font-black tracking-tight">
            Rakshak<span className="text-gradient">Prep</span>
          </span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = l.href === "/" ? path === "/" : path.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    active ? "text-black" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="/exams"
          className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400/20"
        >
          Take a Test
        </Link>
      </nav>
    </motion.header>
  );
}
