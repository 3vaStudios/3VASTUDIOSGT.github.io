import logoAsset from "@/assets/logo-3va-hd.png.asset.json";

export function About() {
  return (
    <section id="nosotros" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-accent/25 blur-3xl rounded-full" />
          <div className="relative w-full max-w-md aspect-square rounded-3xl ring-1 ring-primary/30 glow-mix bg-black overflow-hidden flex items-center justify-center">
            <img
              src={logoAsset.url}
              alt="3VA Studios"
              width={1248}
              height={1248}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-display font-bold tracking-[0.25em] uppercase text-primary mb-5">
            Sobre nosotros
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl leading-[1.05]">
            Tecnología, cine y creatividad — <span className="text-gradient">en un solo estudio.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            3VA Studios nace en México para combinar lo mejor de tres mundos: la narrativa cinematográfica,
            la potencia de la tecnología y la sensibilidad del diseño creativo.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Trabajamos con empresas, marcas personales, startups y artistas que entienden que la imagen
            no es un gasto — es la inversión más rentable en la era digital.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: "2024", l: "Fundado" },
              { n: "MX", l: "Origen" },
              { n: "100%", l: "Premium" },
            ].map((s) => (
              <div key={s.l} className="p-4 rounded-xl glass text-center">
                <div className="font-display font-black text-xl text-gradient">{s.n}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
