import { ArrowRight, Code2, Hexagon, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden noise"
    >
      {/* NERV / EVA background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        {/* AT-Field: orange + LCL purple + EVA green */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_25%_35%,rgba(255,90,20,0.45),transparent_60%),radial-gradient(ellipse_55%_50%_at_75%_60%,rgba(140,60,200,0.40),transparent_60%),radial-gradient(ellipse_40%_40%_at_50%_90%,rgba(60,200,120,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/40 to-background" />

        {/* Hexagonal AT-Field grid */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-[0.18] mix-blend-screen"
        >
          <defs>
            <pattern id="hex" width="56" height="48" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
              <path
                d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>

        {/* Scan line */}
        <div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent"
          style={{ animation: "scan-line 8s linear infinite" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8 pt-32 pb-16 w-full">
        <div className="flex flex-col items-center text-center">
          {/* NERV pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-sm bg-black/60 border border-primary/50 mb-7 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(255,90,20,0.9)]" />
            <span className="text-[10px] font-mono font-bold tracking-[0.34em] uppercase text-primary">
              NERV // 3VA · UNIT-01 ONLINE
            </span>
          </div>

          {/* Headline — Páginas Web as principal */}
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight max-w-4xl uppercase">
            Páginas web <span className="text-gradient">cinematográficas</span> para tu negocio.
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Diseñamos y desarrollamos tu sitio web con la precisión de una unidad EVA: rápido, impactante y listo para vender. Branding y producción audiovisual incluidos.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-primary text-primary-foreground font-display font-bold text-sm tracking-[0.18em] uppercase hover:scale-[1.03] transition-transform shadow-[0_0_40px_-6px_rgba(255,90,20,0.8)] border border-primary"
            >
              Cotiza tu web
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portafolio"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-sm border border-foreground/30 bg-black/40 backdrop-blur-sm font-mono font-bold text-xs tracking-[0.22em] uppercase hover:border-primary/70 transition-colors"
            >
              <Code2 size={14} className="text-primary" /> Ver portafolio
            </a>
          </div>

          {/* NERV terminal — Web Build Unit */}
          <div className="relative mt-16 md:mt-20 w-full max-w-3xl">
            <div className="absolute inset-x-0 -top-10 mx-auto h-80 w-80 rounded-full bg-primary/40 blur-[120px]" />
            <div className="absolute inset-x-0 -top-10 mx-auto h-80 w-80 rounded-full bg-accent/30 blur-[140px] translate-x-24" />

            <div className="relative rounded-sm border border-primary/40 bg-black/70 backdrop-blur-md p-6 md:p-8 overflow-hidden shadow-[0_0_60px_-20px_rgba(255,90,20,0.6)]">
              {/* corner ticks */}
              <span className="absolute top-2 left-2 h-3 w-3 border-l-2 border-t-2 border-primary" />
              <span className="absolute top-2 right-2 h-3 w-3 border-r-2 border-t-2 border-accent" />
              <span className="absolute bottom-2 left-2 h-3 w-3 border-l-2 border-b-2 border-accent" />
              <span className="absolute bottom-2 right-2 h-3 w-3 border-r-2 border-b-2 border-primary" />

              {/* Header bar */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-primary/30">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.28em] uppercase text-primary">
                  <Hexagon size={12} className="fill-primary/20" />
                  WEB.BUILD.UNIT · 3VA-01
                </div>
                <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-accent">
                  PATTERN: BLUE
                </div>
              </div>

              {/* Central preview */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 items-stretch">
                {/* Left specs */}
                <div className="hidden md:flex flex-col gap-2.5 text-left">
                  {[
                    { k: "TARGET", v: "Tu negocio" },
                    { k: "SYNC RATE", v: "100%" },
                    { k: "ENTREGA", v: "7–14 días" },
                  ].map((r) => (
                    <div key={r.k} className="px-3 py-2 rounded-sm bg-primary/5 border border-primary/30">
                      <div className="text-[9px] font-mono tracking-[0.3em] text-primary/80">{r.k}</div>
                      <div className="font-display font-bold text-xs text-foreground mt-0.5">{r.v}</div>
                    </div>
                  ))}
                </div>

                {/* Center — featured product: PÁGINA WEB */}
                <div className="col-span-3 md:col-span-1 flex items-center justify-center">
                  <div className="relative w-full">
                    <div className="absolute inset-0 rounded-sm bg-primary/40 blur-3xl" />
                    <div className="relative aspect-square rounded-sm border-2 border-primary/60 bg-gradient-to-br from-primary/20 via-accent/15 to-black/60 p-5 flex flex-col items-center justify-center overflow-hidden">
                      {/* hex bg */}
                      <Hexagon
                        size={120}
                        className="absolute inset-0 m-auto text-primary/15 fill-primary/5"
                      />
                      <Zap size={28} className="text-primary mb-3 relative" />
                      <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-primary/90 relative">
                        Servicio principal
                      </div>
                      <div className="font-display font-black text-xl md:text-2xl text-foreground mt-1 uppercase tracking-tight relative">
                        Página Web
                      </div>
                      <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-accent/90 mt-2 relative">
                        ⟁ A.T. FIELD ACTIVE
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right specs */}
                <div className="hidden md:flex flex-col gap-2.5 text-left">
                  {[
                    { k: "STACK", v: "Web + Brand" },
                    { k: "RESPONSIVE", v: "Mobile-first" },
                    { k: "SEO", v: "Optimizado" },
                  ].map((r) => (
                    <div key={r.k} className="px-3 py-2 rounded-sm bg-accent/5 border border-accent/30">
                      <div className="text-[9px] font-mono tracking-[0.3em] text-accent/80">{r.k}</div>
                      <div className="font-display font-bold text-xs text-foreground mt-0.5">{r.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* status bar */}
              <div className="mt-6 pt-3 border-t border-primary/30 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em]">
                <span className="flex items-center gap-2 text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_6px_rgba(255,90,20,0.9)]" />
                  CODE: 601 · ALL SYSTEMS GO
                </span>
                <span className="text-accent">3VA // MAGI</span>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-3xl">
            {[
              { n: "+500", l: "Marcas creadas" },
              { n: "+1k", l: "Contenidos entregados" },
              { n: "100%", l: "Satisfacción" },
              { n: "MX", l: "Cobertura nacional" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display font-black text-2xl md:text-3xl text-gradient">{s.n}</div>
                <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
}
