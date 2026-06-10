import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-3va.jpg";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#porque", label: "Por qué" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto max-w-7xl px-4 md:px-8 transition-all ${scrolled ? "glass rounded-full mx-3 md:mx-6" : ""}`}>
        <nav className="flex items-center justify-between h-14">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 rounded-lg overflow-hidden ring-1 ring-primary/40 group-hover:glow-neon transition-all">
              <img src={logo} alt="3VA Studios logo" className="object-cover w-full h-full" width={36} height={36} />
            </div>
            <span className="font-display font-black text-sm md:text-base tracking-widest">
              3VA <span className="text-gradient">STUDIOS</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contacto" className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary text-primary-foreground hover:glow-neon transition-all">
            Agenda
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-3 glass rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-3">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">{l.label}</a>
                </li>
              ))}
              <li>
                <a href="#contacto" onClick={() => setOpen(false)} className="block text-center mt-2 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wider uppercase">
                  Agenda tu proyecto
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
