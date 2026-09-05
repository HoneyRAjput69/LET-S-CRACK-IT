import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-2xl font-black">
            Rakshak<span className="text-gradient">Prep</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-slate-400">
            A complete preparation platform for every defence examination held in India — mock papers with real
            exam patterns, negative-marking aware scoring, detailed solutions and curated notes.
          </p>
        </div>
        <div>
          <div className="mb-3 text-xs font-bold tracking-widest text-slate-400 uppercase">Explore</div>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/exams" className="hover:text-amber-400">All Exams</Link></li>
            <li><Link href="/notes" className="hover:text-amber-400">Study Notes</Link></li>
            <li><Link href="/dashboard" className="hover:text-amber-400">Leaderboard</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs font-bold tracking-widest text-slate-400 uppercase">Popular</div>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/exams/nda" className="hover:text-amber-400">NDA</Link></li>
            <li><Link href="/exams/cds" className="hover:text-amber-400">CDS</Link></li>
            <li><Link href="/exams/afcat" className="hover:text-amber-400">AFCAT</Link></li>
            <li><Link href="/exams/agniveer-army" className="hover:text-amber-400">Agniveer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-slate-500">
        Jai Hind 🇮🇳 · Built for the aspirants of the Indian Armed Forces
      </div>
    </footer>
  );
}
