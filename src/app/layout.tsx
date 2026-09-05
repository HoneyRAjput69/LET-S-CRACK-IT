import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import CursorFX from "@/components/CursorFX";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RakshakPrep – Defence Exam Mock Tests & Notes (NDA, CDS, AFCAT, Agniveer, CAPF)",
  description:
    "Real-pattern mock question papers and study notes for all Indian defence exams: NDA, CDS, AFCAT, CAPF AC, Agniveer Army/Navy/Vayu, Coast Guard, Territorial Army, MNS and SSB.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="bg-scene" />
        <div className="bg-grid" />
        <CursorFX />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
