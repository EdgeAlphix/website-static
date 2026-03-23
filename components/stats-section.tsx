import type { Stat } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function StatsSection({ stats }: { stats: Stat[] }) {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="Proof"
          title="Proof that the infrastructure is real."
          description="The company already operates the systems it is talking about. That matters."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.statement} className="surface rounded-[1.5rem] p-6">
              <div className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                {stat.statement}
              </div>
              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">{stat.support}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
