import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

const principles = [
  {
    title: "Founder-led",
    description:
      "EdgeAlphix is led by Edward Hsing, an infrastructure engineer working across internet systems, open source, and global operations.",
  },
  {
    title: "Ecosystem-native",
    description:
      "The company sits inside a broader builder ecosystem that includes the DigitalPlat Foundation, OpenSource.ngo, and widely used open-source work.",
  },
  {
    title: "Long-term thinking",
    description:
      "The goal is not just to run systems well, but to build technology that stays useful over time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built by people who operate real systems."
        description="EdgeAlphix is the company Edward Hsing is building around network infrastructure, open systems, and long-term technical work."
        asideTitle="Why EdgeAlphix exists"
        asideBody="To build infrastructure that is reliable, understandable, and strong enough to hold up in production."
        points={[
          "Founded by Edward Hsing",
          "Founder of the DigitalPlat Foundation and OpenSource.ngo",
          "Creator of the DigitalPlat FreeDomain project with 150,000+ GitHub stars globally",
        ]}
      />

      <section className="section-padding pt-0">
        <div className="container-width grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Story"
            title="From open-source reach to infrastructure execution."
            description="EdgeAlphix builds on years of open-source distribution, community building, and systems work."
          />

          <div className="surface rounded-[2rem] p-8">
            <p className="text-lg leading-8 text-slate-700">
              Before EdgeAlphix, Edward built infrastructure and institutions around open access to the internet. At 15, he founded the DigitalPlat Foundation (501(c)(3)) and created DigitalPlat FreeDomain — a domain infrastructure project that has reached over 150,000 GitHub stars globally. He later founded OpenSource.ngo, extending this work into a broader open-source initiative.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              EdgeAlphix turns that experience into an infrastructure company focused on a real network edge, solid software, and a stack that stays open, legible, and useful.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-width grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="surface rounded-[1.75rem] p-7">
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                {principle.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
