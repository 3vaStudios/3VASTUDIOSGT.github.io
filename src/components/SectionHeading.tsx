export function SectionHeading({
  eyebrow, title, subtitle, center = true,
}: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`mb-14 ${center ? "text-center mx-auto max-w-3xl" : ""}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-display font-bold tracking-[0.25em] uppercase text-primary mb-5`}>
          <span className="h-1.5 w-1.5 rounded-full bg-primary glow-neon" /> {eyebrow}
        </div>
      )}
      <h2 className="font-display font-black text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}
