import { Brain, Megaphone, Sparkles, Code2, Aperture, Plane, Film, Share2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Film, title: "Producción Audiovisual", desc: "Cinematografía de alta gama, dirección creativa y postproducción premium." },
  { icon: Megaphone, title: "Marketing Digital", desc: "Estrategias data-driven que convierten alcance en clientes reales." },
  { icon: Sparkles, title: "Branding", desc: "Identidades visuales con personalidad, diseñadas para perdurar." },
  { icon: Code2, title: "Desarrollo Web", desc: "Sitios rápidos, modernos y optimizados para Google." },
  { icon: Aperture, title: "Fotografía Profesional", desc: "Producto, retrato, lifestyle y comercial con sello cinemático." },
  { icon: Plane, title: "Drones Cinematográficos", desc: "Tomas aéreas 4K que cuentan historias desde otra perspectiva." },
  { icon: Brain, title: "Avatar IA Realista", desc: "Avatares hiperrealistas con IA que representan tu marca 24/7 y enganchan a tu audiencia." },
  { icon: Share2, title: "Contenido para Redes", desc: "Reels, shorts y campañas optimizadas para cada plataforma." },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo que tu marca necesita, bajo un mismo estudio."
          subtitle="Combinamos cinematografía, estrategia y tecnología para impulsar marcas que destacan."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="group relative p-6 rounded-2xl glass glass-hover overflow-hidden">
                <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-primary/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-primary/30 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-base md:text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 text-[10px] font-display font-bold tracking-[0.25em] uppercase text-primary/70">
                    0{i + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
