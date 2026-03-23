import { CtaBanner } from "@/components/cta-banner";
import { FeatureGrid } from "@/components/feature-grid";
import { PageHero } from "@/components/page-hero";
import { infrastructurePillars } from "@/lib/content";

const detailCards = [
  {
    title: "Autonomous System",
    description:
      "AS201243 is the public network identity behind EdgeAlphix operations.",
  },
  {
    title: "Global routing model",
    description:
      "Traffic is distributed across North America, Europe, and Asia.",
  },
  {
    title: "IPv6-first posture",
    description:
      "IPv6 is a default architectural assumption, not an extra compatibility layer.",
  },
  {
    title: "Peering and transparency",
    description:
      "Routing policy and public registry presence are part of how the network is operated.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="Public internet infrastructure, operated directly."
        description="EdgeAlphix operates a globally distributed infrastructure footprint across routing, cloud, and open systems."
        asideTitle="Operational snapshot"
        asideBody="Public routing identity, IPv6-first architecture, multi-region infrastructure, and transparent operating signals."
        points={[
          "AS201243 network identity",
          "Presence across North America, Europe, and Asia",
          "Open peering posture and published policy",
        ]}
      />

      <FeatureGrid
        eyebrow="Overview"
        title="Infrastructure you can actually verify."
        description="Ownership, routing posture, regional presence, and architecture are visible because the network is real and already operating."
        features={infrastructurePillars}
      />

      <section className="section-padding pt-0">
        <div className="container-width grid gap-4 md:grid-cols-2">
          {detailCards.map((card) => (
            <div key={card.title} className="surface rounded-[1.75rem] p-7">
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                {card.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-width">
          <div className="surface rounded-[2rem] p-8 md:p-10">
            <p className="eyebrow">Peering</p>
            <h2 className="mt-5 font-[var(--font-heading)] text-3xl font-semibold text-slate-950 md:text-4xl">
              Open policy. Clear contacts.
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="border-t border-slate-900/8 pt-4">
                <div className="text-sm text-slate-500">Peering inquiries</div>
                <a href="mailto:peering@edgealphix.com" className="mt-2 block font-semibold text-slate-950">
                  peering@edgealphix.com
                </a>
              </div>
              <div className="border-t border-slate-900/8 pt-4">
                <div className="text-sm text-slate-500">Infrastructure services</div>
                <a href="mailto:contact@edgealphix.com" className="mt-2 block font-semibold text-slate-950">
                  contact@edgealphix.com
                </a>
              </div>
              <div className="border-t border-slate-900/8 pt-4">
                <div className="text-sm text-slate-500">Registry posture</div>
                <div className="mt-2 font-semibold text-slate-950">Published through recognized databases</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
