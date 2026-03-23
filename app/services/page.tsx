import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { serviceGroups } from "@/lib/content";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services for teams building serious infrastructure."
        description="We work with companies that need to move faster on network, cloud, and platform architecture without lowering the technical bar."
        asideTitle="How we work"
        asideBody="Hands-on technical work, direct operator access, and decisions shaped for long-term use."
        points={[
          "Product-grade cloud and network systems",
          "Reliability and security built in from the start",
          "Direct founder-operator level guidance",
        ]}
      />

      <section className="section-padding pt-0">
        <div className="container-width divide-y divide-slate-900/8">
          {serviceGroups.map((group) => (
            <article key={group.title} className="grid gap-6 py-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Service Area
                </p>
                <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                  {group.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                  {group.body}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {group.bullets.map((bullet) => (
                  <div key={bullet} className="border-t border-slate-900/8 pt-4 text-sm text-slate-700">
                    {bullet}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
