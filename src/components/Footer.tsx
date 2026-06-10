import logo from "@/assets/logo-3va.jpg";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="3VA" width={40} height={40} className="h-10 w-10 rounded-lg ring-1 ring-primary/40" />
              <span className="font-display font-black tracking-widest">3VA <span className="text-gradient">STUDIOS</span></span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Agencia creativa premium especializada en producción audiovisual, branding y tecnología
              para marcas que aspiran a destacar.
            </p>
          </div>
          <div>
            <div className="font-display font-bold text-xs tracking-[0.25em] uppercase text-foreground mb-4">Estudio</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#portafolio" className="hover:text-primary transition-colors">Portafolio</a></li>
              <li><a href="#precios" className="hover:text-primary transition-colors">Precios</a></li>
              <li><a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a></li>
            </ul>
          </div>
          <div>
            <div className="font-display font-bold text-xs tracking-[0.25em] uppercase text-foreground mb-4">Legal</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Aviso de privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos y condiciones</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} 3VA Studios. Todos los derechos reservados.</div>
          <div className="font-display tracking-widest">MADE IN <span className="text-primary">MÉXICO</span></div>
        </div>
      </div>
    </footer>
  );
}
