import { CtaBanner } from "@/components/cta-banner";
import { FeatureGrid } from "@/components/feature-grid";
import { ProjectCards } from "@/components/project-cards";
import { StatsSection } from "@/components/stats-section";
import { homeFeatures, infrastructurePillars, projects, stats } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="section-padding pb-8 pt-16 md:pt-24">
        <div className="container-width hero-grid">
          <div className="max-w-4xl">
            <p className="eyebrow">EdgeAlphix LLC</p>
            <h1 className="mt-6 font-[var(--font-heading)] text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">
              Infrastructure,
              <br />
              Done Right.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              EdgeAlphix builds and operates internet infrastructure across network, cloud, and open systems. Real systems. Real traffic. Real operational responsibility.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="rounded-full border border-slate-900/8 bg-white/70 px-3 py-1.5">
                Global routing
              </span>
              <span className="rounded-full border border-slate-900/8 bg-white/70 px-3 py-1.5">
                Infrastructure software
              </span>
              <span className="rounded-full border border-slate-900/8 bg-white/70 px-3 py-1.5">
                Open systems
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:contact@edgealphix.com" className="button-primary">
                Contact Us
              </a>
              <a href="/infrastructure" className="button-secondary">
                View Infrastructure
              </a>
            </div>
          </div>

          <div className="surface rounded-[2rem] p-7">
            <div className="grid gap-5">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Category</div>
                <div className="mt-2 text-2xl font-semibold text-slate-950">Modern infrastructure</div>
              </div>
              <div className="rule pt-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Network identity</div>
                <div className="mt-2 text-2xl font-semibold text-slate-950">AS201243</div>
              </div>
              <div className="rule pt-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Architecture</div>
                <div className="mt-2 text-2xl font-semibold text-slate-950">IPv6-first</div>
              </div>
              <div className="rule pt-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Global reach</div>
                <div className="mt-2 text-2xl font-semibold text-slate-950">3 regions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-width">
          <div className="startup-grid text-sm text-slate-500">
            <div className="surface rounded-[1.5rem] px-5 py-4">
              Founder-led infrastructure company
            </div>
            <div className="surface rounded-[1.5rem] px-5 py-4">
              Public network operations with visible proof
            </div>
            <div className="surface rounded-[1.5rem] px-5 py-4">
              Open-source reach at global scale
            </div>
          </div>
        </div>
      </section>

      <StatsSection stats={stats} />

      <FeatureGrid
        eyebrow="What We Do"
        title="Internet infrastructure with engineering depth."
        description="We combine product thinking, systems depth, and real operational responsibility in one company."
        features={homeFeatures}
      />

      <FeatureGrid
        eyebrow="Infrastructure"
        title="Public infrastructure with room to grow."
        description="A public network, a credible platform layer, and software that can grow into multiple infrastructure products."
        features={infrastructurePillars}
      />

      <ProjectCards projects={projects} />

      <section className="section-padding pt-0">
        <div className="container-width">
          <div className="surface rounded-[2rem] p-8 md:p-10">
            <p className="eyebrow">Working Together</p>
            <h2 className="mt-5 max-w-3xl font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-5xl">
              We work directly with teams operating real infrastructure.
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-slate-700">
              <p>
                Not every problem fits a product. Some require work at the network,
                platform, or systems layer.
              </p>
              <p>
                Routing, cloud environments, DNS infrastructure, and systems work
                — where details matter, and systems have to hold under production
                conditions.
              </p>
              <p>
                If you&apos;re already there, we&apos;re open to a conversation.
              </p>
            </div>
            <a
              href="https://support.edgealphix.com/?recipient=EDGEALPHIX_CONTACT"
              target="_blank"
              rel="noreferrer"
              className="button-secondary mt-8"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
