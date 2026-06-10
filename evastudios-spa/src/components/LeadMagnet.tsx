import { useState } from "react";
import { Download, Sparkles } from "lucide-react";
import { toast } from "sonner";

export function LeadMagnet() {
  const [form, setForm] = useState({ nombre: "", email: "", whatsapp: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.nombre) return toast.error("Completa tus datos");
    toast.success("¡Listo! Te enviaremos la guía en breve.");
    setForm({ nombre: "", email: "", whatsapp: "" });
  };

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="relative rounded-3xl overflow-hidden glass p-8 md:p-14">
          <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary text-[10px] font-display font-bold tracking-[0.25em] uppercase mb-5">
                <Sparkles size={11} /> Guía gratuita
              </div>
              <h2 className="font-display font-black text-3xl md:text-4xl leading-[1.05]">
                Haz crecer tu marca <span className="text-gradient">visualmente</span>.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Descarga gratis nuestra guía con los 10 principios que usan las marcas más reconocidas para destacar en redes.
              </p>
            </div>
            <form onSubmit={onSubmit} className="space-y-3">
              <input
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-xl bg-input/60 border border-border focus:border-primary outline-none text-sm transition-colors"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-input/60 border border-border focus:border-primary outline-none text-sm transition-colors"
              />
              <input
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                placeholder="WhatsApp (opcional)"
                className="w-full px-4 py-3 rounded-xl bg-input/60 border border-border focus:border-primary outline-none text-sm transition-colors"
              />
              <button className="w-full inline-flex justify-center items-center gap-2 px-5 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm glow-neon hover:scale-[1.01] transition-transform">
                <Download size={16} /> Descargar guía
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
