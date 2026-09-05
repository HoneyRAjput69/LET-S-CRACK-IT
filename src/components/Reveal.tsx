"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
}) {
  const initial =
    direction === "up"
      ? { opacity: 0, y: 40 }
      : direction === "left"
        ? { opacity: 0, x: -40 }
        : direction === "right"
          ? { opacity: 0, x: 40 }
          : { opacity: 0, scale: 0.9 };
  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
