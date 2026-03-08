"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Defaulting to true is safer for SSR hydration and accessibility
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  // 1. Handle Motion Preferences safely
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // FIX: Defer the initial state update to avoid the synchronous setState warning
    const timeoutId = setTimeout(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPrefersReducedMotion(mediaQuery.matches);
    }, 0);

    const listener = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
      clearTimeout(timeoutId); // Clean up the timeout
    };
  }, []);

  // 2. Canvas Drawing Logic
  useEffect(() => {
    if (prefersReducedMotion || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Cap particle count on mobile
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 70;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & Draw Particles
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.fill();

        // Draw connections
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance / 1200})`;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {!prefersReducedMotion && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen"
        />
      )}
    </div>
  );
}
