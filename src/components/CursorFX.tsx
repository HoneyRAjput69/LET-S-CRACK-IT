"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor (dot + ring) plus an interactive particle field that
 * reacts to mouse movement in every direction, and a 3D parallax
 * tilt applied to elements with [data-tilt].
 */
export default function CursorFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const mouse = { x: w / 2, y: h / 2, vx: 0, vy: 0, px: w / 2, py: h / 2 };
    const ringPos = { x: w / 2, y: h / 2 };

    type P = { x: number; y: number; vx: number; vy: number; r: number; hue: number; life: number };
    const particles: P[] = [];
    const stars: { x: number; y: number; z: number; s: number }[] = [];
    for (let i = 0; i < 160; i++) stars.push({ x: Math.random() * w, y: Math.random() * h, z: Math.random() * 0.8 + 0.2, s: Math.random() * 1.6 + 0.4 });

    const onMove = (e: MouseEvent) => {
      mouse.px = mouse.x; mouse.py = mouse.y;
      mouse.x = e.clientX; mouse.y = e.clientY;
      mouse.vx = mouse.x - mouse.px; mouse.vy = mouse.y - mouse.py;
      dot.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%,-50%)`;
      const speed = Math.min(20, Math.hypot(mouse.vx, mouse.vy));
      const count = Math.ceil(speed / 3);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: mouse.x, y: mouse.y,
          vx: -mouse.vx * 0.15 + (Math.random() - 0.5) * 2,
          vy: -mouse.vy * 0.15 + (Math.random() - 0.5) * 2,
          r: Math.random() * 3 + 1,
          hue: 30 + Math.random() * 180,
          life: 1,
        });
      }
      if (particles.length > 400) particles.splice(0, particles.length - 400);

      // 3D tilt for hover targets
      const target = (e.target as HTMLElement | null)?.closest?.("[data-tilt]") as HTMLElement | null;
      document.querySelectorAll<HTMLElement>("[data-tilt].tilting").forEach((el) => {
        if (el !== target) { el.classList.remove("tilting"); el.style.transform = ""; }
      });
      if (target) {
        const rect = target.getBoundingClientRect();
        const cx = (e.clientX - rect.left) / rect.width - 0.5;
        const cy = (e.clientY - rect.top) / rect.height - 0.5;
        target.classList.add("tilting");
        target.style.transform = `perspective(900px) rotateX(${-cy * 14}deg) rotateY(${cx * 14}deg) translateZ(12px) scale(1.02)`;
        target.style.transition = "transform 0.08s ease-out";
      }
      const hover = (e.target as HTMLElement | null)?.closest?.("a,button,[data-hover]");
      ring.classList.toggle("hovering", !!hover);

      // parallax layers
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const depth = parseFloat(el.dataset.parallax || "10");
        const dx = (mouse.x / w - 0.5) * depth;
        const dy = (mouse.y / h - 0.5) * depth;
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      });
      document.querySelectorAll<HTMLElement>("[data-scene-rotate]").forEach((el) => {
        const dx = (mouse.x / w - 0.5) * 40;
        const dy = (mouse.y / h - 0.5) * 40;
        el.style.transform = `rotateY(${dx}deg) rotateX(${-dy}deg)`;
      });
    };
    const onLeaveTilt = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t?.matches?.("[data-tilt]")) { t.style.transform = ""; t.classList.remove("tilting"); }
    };
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    const onDown = () => { dot.style.width = "18px"; dot.style.height = "18px"; };
    const onUp = () => { dot.style.width = "10px"; dot.style.height = "10px"; };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseout", onLeaveTilt, true);
    window.addEventListener("resize", onResize);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // stars with parallax drift opposite to mouse
      const ox = (mouse.x / w - 0.5), oy = (mouse.y / h - 0.5);
      for (const s of stars) {
        s.x += 0.05 * s.z; if (s.x > w) s.x = 0;
        const px = s.x - ox * 40 * s.z, py = s.y - oy * 40 * s.z;
        ctx.beginPath();
        ctx.arc(px, py, s.s * s.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.25 + s.z * 0.5})`;
        ctx.fill();
      }
      // connecting lines near mouse
      for (const s of stars) {
        const d = Math.hypot(s.x - mouse.x, s.y - mouse.y);
        if (d < 140) {
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(s.x, s.y);
          ctx.strokeStyle = `rgba(34,211,238,${(1 - d / 140) * 0.45})`;
          ctx.lineWidth = 1; ctx.stroke();
        }
      }
      // trail particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.vx *= 0.96; p.vy *= 0.96; p.life -= 0.02;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 95%, 65%, ${p.life})`;
        ctx.shadowColor = `hsla(${p.hue}, 95%, 65%, 1)`;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      // smooth ring follow
      ringPos.x += (mouse.x - ringPos.x) * 0.18;
      ringPos.y += (mouse.y - ringPos.y) * 0.18;
      ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onLeaveTilt, true);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
