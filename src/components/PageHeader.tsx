const PageHeader = ({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) => (
  <div className="container pt-10 sm:pt-16 pb-8 sm:pb-10">
    {eyebrow && (
      <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</p>
    )}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
      <span className="text-gradient">{title}</span>
    </h1>
    {subtitle && <p className="mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>}
  </div>
);

export default PageHeader;
