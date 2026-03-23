import type { Feature } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

type FeatureGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  features: Feature[];
};

export function FeatureGrid({
  eyebrow,
  title,
  description,
  features,
}: FeatureGridProps) {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="surface rounded-[1.75rem] p-7">
              <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
