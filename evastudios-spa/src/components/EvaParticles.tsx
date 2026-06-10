import { useEffect, useRef } from "react";

/**
 * NERV / Evangelion ambient particle field.
 * Subtle hex/triangle particles drift across the screen and react to the mouse
 * (AT-Field style ripple). Fixed, behind all content, pointer-events: none.
 */
export function EvaParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const mouse = { x: -9999, y: -9999, active: false };

    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;        // base alpha
      hue: number;      // 0 = orange/red primary, 1 = purple accent, 2 = eva green
      rot: number;
      vr: number;
    };

    let particles: P[] = [];

    const COLORS = [
      "255, 90, 40",     // NERV orange/red
      "160, 80, 230",    // LCL purple
      "80, 220, 140",    // EVA green
      "255, 215, 0",     // golden yellow
      "0, 220, 255",     // cyan
      "255, 50, 180",    // magenta
    ];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      const density = Math.min(200, Math.floor((width * height) / 9000));
      particles = Array.from({ length: density }, () => spawn());
    }

    function spawn(): P {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 1.2 + Math.random() * 2.4,
        a: 0.18 + Math.random() * 0.35,
        hue: Math.floor(Math.random() * COLORS.length),
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.01,
      };
    }

    function drawHex(x: number, y: number, r: number, rot: number) {
      ctx!.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = rot + (i * Math.PI) / 3;
        const px = x + Math.cos(a) * r;
        const py = y + Math.sin(a) * r;
        if (i === 0) ctx!.moveTo(px, py);
        else ctx!.lineTo(px, py);
      }
      ctx!.closePath();
    }

    let raf = 0;
    function tick() {
      ctx!.clearRect(0, 0, width, height);

      // AT-Field aura around mouse
      if (mouse.active) {
        const grad = ctx!.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
        grad.addColorStop(0, "rgba(255,90,40,0.10)");
        grad.addColorStop(0.5, "rgba(160,80,230,0.05)");
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx!.fillStyle = grad;
        ctx!.fillRect(mouse.x - 220, mouse.y - 220, 440, 440);
      }

      for (const p of particles) {
        // mouse repulsion (AT-Field push)
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          const R = 160;
          if (d2 < R * R && d2 > 0.5) {
            const d = Math.sqrt(d2);
            const f = (1 - d / R) * 0.9;
            p.vx += (dx / d) * f * 0.35;
            p.vy += (dy / d) * f * 0.35;
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;

        // damping
        p.vx *= 0.985;
        p.vy *= 0.985;
        // slow drift baseline
        p.vx += (Math.random() - 0.5) * 0.004;
        p.vy += (Math.random() - 0.5) * 0.004;

        // wrap
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        const color = COLORS[p.hue];

        // glow
        ctx!.shadowBlur = 8;
        ctx!.shadowColor = `rgba(${color}, 0.6)`;

        // hex outline
        ctx!.strokeStyle = `rgba(${color}, ${p.a})`;
        ctx!.lineWidth = 1;
        drawHex(p.x, p.y, p.r * 1.6, p.rot);
        ctx!.stroke();

        // core dot
        ctx!.fillStyle = `rgba(${color}, ${p.a + 0.2})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r * 0.5, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.shadowBlur = 0;

      // connecting lines near mouse
      if (mouse.active) {
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 140 * 140) {
            const a = 1 - Math.sqrt(d2) / 140;
            ctx!.strokeStyle = `rgba(255, 90, 40, ${a * 0.35})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(mouse.x, mouse.y);
            ctx!.lineTo(p.x, p.y);
            ctx!.stroke();
          }
        }
      }

      raf = requestAnimationFrame(tick);
    }

    function onMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }
    function onLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }
    function onTouch(e: TouchEvent) {
      if (e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.active = true;
      }
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onLeave);

    if (!reduceMotion) {
      raf = requestAnimationFrame(tick);
    } else {
      // single static frame
      tick();
      cancelAnimationFrame(raf);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-70 mix-blend-screen"
    />
  );
}
