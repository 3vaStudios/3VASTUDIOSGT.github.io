import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  { q: "¿Cuál es el tiempo de entrega promedio?", a: "Dependiendo del proyecto, entre 7 y 21 días hábiles. Para proyectos urgentes ofrecemos modalidad express con sobrecosto." },
  { q: "¿Tienen cobertura fuera de su ciudad?", a: "Sí. Cubrimos toda la República Mexicana y trabajamos con clientes en Latinoamérica y Estados Unidos." },
  { q: "¿Cómo manejan los costos?", a: "Cada proyecto se cotiza a medida según alcance, locaciones, equipo y duración. Te enviamos una propuesta clara y transparente." },
  { q: "¿Usan drones con licencia?", a: "Sí, contamos con pilotos certificados y los permisos correspondientes para volar en zonas autorizadas." },
  { q: "¿Hacen desarrollo web a medida?", a: "Sí, desarrollamos landings, sitios institucionales y e-commerce con tecnología moderna (React, Next.js) optimizados para SEO." },
  { q: "¿Manejan campañas de marketing digital?", a: "Sí. Estrategia, creatividad, pauta en Meta/Google/TikTok y analítica. Trabajamos en retainer mensual o por campaña." },
  { q: "¿Qué métodos de pago aceptan?", a: "Transferencia, depósito, tarjeta de crédito/débito y facturación CFDI. Generalmente 50% para iniciar y 50% al entregar." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas." />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display font-bold text-sm md:text-base">{f.q}</span>
                  <Plus size={20} className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
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
