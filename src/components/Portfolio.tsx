import { SectionHeading } from "./SectionHeading";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const items = [
  { src: p1, title: "Production Reel", cat: "Audiovisual", span: "md:col-span-2 md:row-span-2" },
  { src: p2, title: "Aerial Cinematography", cat: "Drones" },
  { src: p3, title: "LILRA · Campaña", cat: "Branding · Producto" },
  { src: p5, title: "Editorial Portrait", cat: "Fotografía", span: "md:row-span-2" },
  { src: p4, title: "Web Experience", cat: "Desarrollo" },
  { src: p6, title: "Motion Identity", cat: "Animación" },
];

export function Portfolio() {
  return (
    <section id="portafolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Portafolio"
          title="Trabajo seleccionado."
          subtitle="Una muestra de cómo elevamos marcas a través de la imagen, el movimiento y la estrategia."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px] md:auto-rows-[260px]">
          {items.map((it) => (
            <a
              key={it.title}
              href="#contacto"
              className={`group relative rounded-2xl overflow-hidden glass glass-hover ${it.span ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 group-hover:ring-primary/40 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[10px] font-display font-bold tracking-[0.25em] uppercase text-primary mb-1">{it.cat}</div>
                <div className="font-display font-bold text-lg text-foreground">{it.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
