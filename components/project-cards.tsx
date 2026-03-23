import type { Project } from "@/lib/content";
import { DomainApiDemo } from "@/components/domain-api-demo";
import { EdgeOsTerminalDemo } from "@/components/edgeos-terminal-demo";
import { SectionHeading } from "@/components/section-heading";

export function ProjectCards({ projects }: { projects: Project[] }) {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="Projects"
          title="Systems projects, built in public."
          description="From AS201243 to Domain API, EdgeAlphix turns internal systems work into products with clear technical value."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="rounded-full border border-slate-900/8 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700">
            Public network identity: AS201243
          </div>
          <div className="rounded-full border border-slate-900/8 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700">
            DNS infrastructure for 500,000+ domains
          </div>
          <div className="rounded-full border border-slate-900/8 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700">
            Developer platform: Domain API
          </div>
        </div>

        <div className="mt-12 divide-y divide-slate-900/8">
          {projects.map((project) => (
            <article key={project.name} className="grid gap-6 py-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {project.category}
                </p>
                <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                  {project.name}
                </h3>
              </div>
              <div>
                <p className="text-base leading-7 text-slate-700">{project.summary}</p>
                <div className="mt-6 space-y-4">
                  {project.points.map((point) => (
                    <div key={point} className="border-t border-slate-900/8 pt-4 text-sm text-slate-600">
                      {point}
                    </div>
                  ))}
                </div>
                {project.name === "Domain API" ? (
                  <div className="mt-8">
                    <DomainApiDemo />
                    <a
                      href="https://dash.domain.digitalplat.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950"
                    >
                      Try it now
                    </a>
                  </div>
                ) : null}
                {project.name === "EdgeOS" ? (
                  <div className="mt-8">
                    <EdgeOsTerminalDemo />
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
