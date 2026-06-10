import { Quote, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    name: "Ana Martínez",
    role: "Fundadora · Casa Lumen",
    text: "3VA elevó completamente nuestra marca. El nivel de producción es lo que esperaba de una agencia internacional, pero con la cercanía de un equipo mexicano.",
  },
  {
    name: "Carlos Rivera",
    role: "CEO · Verde Capital",
    text: "Profesionales de verdad. La campaña audiovisual que crearon nos posicionó como la opción premium en nuestro sector. Resultados claros.",
  },
  {
    name: "Sofía González",
    role: "Artista visual",
    text: "Entendieron mi visión desde la primera reunión. Cada toma, cada edit, cada detalle se siente cuidado y cinematográfico. Volveré a trabajar con ellos.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Testimonios"
          title="Marcas que ya viven la diferencia."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="relative p-7 rounded-2xl glass glass-hover">
              <Quote className="absolute top-5 right-5 text-primary/30" size={32} />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 pt-5 border-t border-border/60">
                <div className="font-display font-bold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
