import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <div className="text-7xl">🛰️</div>
      <h1 className="mt-6 text-5xl font-black">Target not found</h1>
      <p className="mt-3 text-slate-400">The page you are looking for has gone off the radar.</p>
      <Link href="/" className="mt-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3 font-black text-black">Return to base</Link>
    </div>
  );
}
