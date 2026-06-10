import { Check, Sparkles, ArrowRight, Zap, Crown, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const tiers = [
  {
    name: "Inicial",
    price: "8,900",
    desc: "Para marcas que comienzan a profesionalizar su presencia visual.",
    icon: Rocket,
    features: [
      "Sesión de fotografía (1 día)",
      "1 video corto para redes (≤60s)",
      "Edición profesional",
      "3 entregas / revisiones",
      "Asesoría estratégica",
    ],
    cta: "Empezar",
  },
  {
    name: "Business",
    price: "24,900",
    desc: "Para negocios y marcas en crecimiento que quieren destacar.",
    icon: Zap,
    features: [
      "Producción audiovisual (2 días)",
      "Pack de 4 reels + 1 video principal",
      "Sesión fotográfica completa",
      "Branding o landing page",
      "Toma con drone incluida",
      "Estrategia + calendario de contenido",
    ],
    featured: true,
    cta: "Cotizar Business",
  },
  {
    name: "Elite Cinematic",
    price: "59,900",
    desc: "Producción cinematográfica completa para marcas premium.",
    icon: Crown,
    features: [
      "Dirección creativa dedicada",
      "Producción multi-locación",
      "Cinematografía + drone 4K",
      "Sitio web premium incluido",
      "Campaña 360° + motion graphics",
      "Estrategia digital trimestral",
      "Soporte prioritario",
    ],
    cta: "Hablar con dirección",
  },
];

export function Pricing() {
  return (
    <section id="precios" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-accent/8 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Paquetes"
          title="Inversión que se ve, se siente y se traduce en resultados."
          subtitle="Planes diseñados para distintas etapas — todos con la calidad y atención que define a 3VA."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start">
          {tiers.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={t.name}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ${
                  t.featured
                    ? "md:-mt-4 md:mb-4 ring-1 ring-primary/40"
                    : "ring-1 ring-border/40"
                }`}
                style={{
                  animationDelay: `${i * 150}ms`,
                }}
              >
                {/* Featured top accent bar */}
                {t.featured && (
                  <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary animate-shimmer" />
                )}

                <div className={`relative p-7 ${t.featured ? "bg-gradient-to-b from-card/90 to-background/90 backdrop-blur-xl" : "glass glass-hover"}`}>
                  {/* Background glow for featured */}
                  {t.featured && (
                    <>
                      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
                      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
                    </>
                  )}

                  {/* Popular badge */}
                  {t.featured && (
                    <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-[10px] font-display font-bold tracking-widest uppercase">
                      <Sparkles size={11} /> Recomendado
                    </div>
                  )}

                  <div className="relative">
                    {/* Icon + Name */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${t.featured ? "bg-primary/20 ring-1 ring-primary/30" : "bg-muted"}`}>
                        <Icon size={18} className={t.featured ? "text-primary" : "text-muted-foreground"} />
                      </div>
                      <div>
                        <h3 className="font-display font-black text-lg">{t.name}</h3>
                        {t.featured && (
                          <span className="text-[10px] font-display font-bold tracking-widest uppercase text-primary">
                            Más solicitado
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed min-h-[40px]">{t.desc}</p>

                    {/* Price */}
                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="text-xs text-muted-foreground">desde</span>
                      <span className="font-display font-black text-5xl md:text-6xl text-gradient leading-none">${t.price}</span>
                      <span className="text-xs text-muted-foreground self-end mb-2">MXN</span>
                    </div>

                    {/* Divider */}
                    <div className={`mt-6 mb-6 h-px ${t.featured ? "bg-gradient-to-r from-primary/40 via-accent/30 to-transparent" : "bg-border/40"}`} />

                    {/* Features */}
                    <ul className="space-y-3.5">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <div className={`mt-0.5 h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${t.featured ? "bg-primary/15" : "bg-muted"}`}>
                            <Check size={12} className={t.featured ? "text-primary" : "text-muted-foreground"} />
                          </div>
                          <span className="text-foreground/90 leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="#contacto"
                      className={`mt-8 inline-flex w-full justify-center items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all group/btn ${
                        t.featured
                          ? "bg-primary text-primary-foreground glow-neon hover:scale-[1.02] hover:shadow-[0_0_50px_-10px_var(--neon)]"
                          : "glass glass-hover border border-border/60 hover:border-primary/40"
                      }`}
                    >
                      {t.cta}
                      <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 px-6 py-3 rounded-full glass">
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <Check size={14} className="text-primary" /> Cotización sin compromiso
            </span>
            <span className="hidden sm:block h-3 w-px bg-border/40" />
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <Check size={14} className="text-primary" /> Pago a meses sin intereses
            </span>
            <span className="hidden sm:block h-3 w-px bg-border/40" />
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <Check size={14} className="text-primary" /> Entrega garantizada
            </span>
          </div>
          <p className="mt-5 text-xs text-muted-foreground/70 max-w-lg mx-auto">
            * Los precios son referenciales. Cada proyecto se cotiza a medida según alcance y locación.
          </p>
        </div>
      </div>
    </section>
  );
}
