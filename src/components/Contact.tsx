import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Instagram, Music2, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [form, setForm] = useState({ nombre: "", empresa: "", telefono: "", email: "", mensaje: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) return toast.error("Completa los campos requeridos");
    toast.success("Mensaje enviado. Te contactamos en menos de 24h.");
    setForm({ nombre: "", empresa: "", telefono: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos del próximo proyecto que cambiará tu marca."
          subtitle="Cuéntanos tu idea. Te respondemos en menos de 24 horas."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nombre *" value={form.nombre} onChange={(v) => setForm({ ...form, nombre: v })} />
              <Field label="Empresa" value={form.empresa} onChange={(v) => setForm({ ...form, empresa: v })} />
              <Field label="Teléfono" value={form.telefono} onChange={(v) => setForm({ ...form, telefono: v })} />
              <Field label="Correo *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            </div>
            <div>
              <label className="block text-[10px] font-display font-bold tracking-widest uppercase text-muted-foreground mb-2">
                Mensaje *
              </label>
              <textarea
                rows={5}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-input/60 border border-border focus:border-primary outline-none text-sm resize-none transition-colors"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm glow-neon hover:scale-[1.02] transition-transform">
              <Send size={16} /> Enviar mensaje
            </button>
          </form>

          {/* Sidebar */}
          <aside className="lg:col-span-2 space-y-3">
            <ContactItem icon={MessageCircle} label="WhatsApp" value="+52 55 4908 9924" href="https://wa.me/525549089924" />
            <ContactItem icon={Mail} label="Correo" value="3vastudios@elevateeva.com" href="mailto:3vastudios@elevateeva.com" />
            <ContactItem icon={Phone} label="Teléfono" value="+52 55 4908 9924" href="tel:+525549089924" />
            <ContactItem icon={MapPin} label="Ubicación" value="México · Cobertura nacional" />
            <div className="glass rounded-2xl p-5">
              <div className="text-[10px] font-display font-bold tracking-widest uppercase text-muted-foreground mb-3">Síguenos</div>
              <div className="flex gap-3">
                <Social icon={Instagram} href="https://instagram.com" />
                <Social icon={Music2} href="https://tiktok.com" />
                <Social icon={MessageCircle} href="https://wa.me/525549089924" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="block text-[10px] font-display font-bold tracking-widest uppercase text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-input/60 border border-border focus:border-primary outline-none text-sm transition-colors"
      />
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const Wrapper: any = href ? "a" : "div";
  return (
    <Wrapper href={href} target={href?.startsWith("http") ? "_blank" : undefined} className="block glass glass-hover rounded-2xl p-5 group">
      <div className="flex items-center gap-4">
        <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-primary/30 grid place-items-center">
          <Icon size={18} className="text-primary" />
        </div>
        <div>
          <div className="text-[10px] font-display font-bold tracking-widest uppercase text-muted-foreground">{label}</div>
          <div className="text-sm font-medium mt-0.5">{value}</div>
        </div>
      </div>
    </Wrapper>
  );
}

function Social({ icon: Icon, href }: { icon: any; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full glass glass-hover grid place-items-center">
      <Icon size={16} />
    </a>
  );
}
