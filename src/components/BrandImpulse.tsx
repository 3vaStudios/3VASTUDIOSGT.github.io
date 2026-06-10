import { ArrowUpRight } from "lucide-react";

export function BrandImpulse() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>
      <div className="relative mx-auto max-w-5xl px-5 md:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-display font-bold tracking-[0.25em] uppercase text-primary mb-6">
          Impulsamos tu marca
        </div>
        <h2 className="font-display font-black text-3xl md:text-6xl leading-[1.05]">
          Mientras tu competencia <span className="text-muted-foreground/60">improvisa</span>,
          <br /> tu marca <span className="text-gradient">cuenta historias</span>.
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Crecimiento visual, autoridad digital y posicionamiento que te diferencia.
          Diseñamos cada activo para que tu marca no se vea como una más — sino como la referencia.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Crecimiento visual", "Autoridad", "Posicionamiento", "Diferenciación"].map((t) => (
            <div key={t} className="px-4 py-3 rounded-full glass text-xs md:text-sm font-medium">
              {t}
            </div>
          ))}
        </div>

        <a href="#contacto" className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm glow-mix hover:scale-[1.03] transition-transform">
          Impulsa tu marca ahora <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
