type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  asideTitle: string;
  asideBody: string;
  points?: string[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  asideTitle,
  asideBody,
  points,
}: PageHeroProps) {
  return (
    <section className="section-padding">
      <div className="container-width hero-grid">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-[var(--font-heading)] text-5xl font-semibold tracking-[-0.05em] text-slate-950 md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            {description}
          </p>
        </div>

        <div className="surface rounded-[2rem] p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            {asideTitle}
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">{asideBody}</p>
          {points ? (
            <div className="mt-8 space-y-4">
              {points.map((point) => (
                <div key={point} className="border-t border-slate-900/8 pt-4 text-sm text-slate-700">
                  {point}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
