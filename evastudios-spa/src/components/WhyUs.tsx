import { Award, Layers, Cpu, Gem, Users, TrendingUp, Clapperboard } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Clapperboard, title: "Calidad cinematográfica", desc: "Cámaras, lentes y postproducción al nivel de la industria." },
  { icon: Layers, title: "Estrategia visual", desc: "Cada toma responde a un objetivo de negocio claro." },
  { icon: Cpu, title: "Tecnología + creatividad", desc: "Drones, IA, motion graphics y herramientas de última generación." },
  { icon: Gem, title: "Diseño premium", desc: "Estética cuidada hasta el último pixel para marcas exigentes." },
  { icon: Users, title: "Atención personalizada", desc: "Acompañamiento directo del equipo creativo en cada etapa." },
  { icon: TrendingUp, title: "Resultados reales", desc: "Crecimiento medible: alcance, engagement y conversión." },
  { icon: Award, title: "Producción profesional", desc: "Equipo, logística y dirección con estándares internacionales." },
];

export function WhyUs() {
  return (
    <section id="porque" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="¿Por qué 3VA?"
          title="No producimos videos. Construimos percepción."
          subtitle="Combinamos visión cinematográfica, estrategia digital y dirección creativa para que tu marca se vea — y se sienta — premium."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="flex gap-4 p-6 rounded-2xl glass glass-hover">
                <div className="shrink-0 h-11 w-11 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 ring-1 ring-primary/30 grid place-items-center">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{it.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
