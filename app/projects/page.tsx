import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { ProjectCards } from "@/components/project-cards";
import { projects } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects built from real systems work."
        description="EdgeAlphix turns deep systems work into software that can support real infrastructure use cases."
        asideTitle="Product philosophy"
        asideBody="Start with a real technical problem. Build the control layer. Keep the product useful."
        points={[
          "Systems software, not demo ware",
          "Designed for operators and platform engineers",
          "Built with public infrastructure and developer workflows in mind",
        ]}
      />

      <ProjectCards projects={projects} />

      <section className="section-padding pt-0">
        <div className="container-width grid gap-4 md:grid-cols-2">
          <div className="surface rounded-[1.75rem] p-8 md:col-span-2">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.03em] text-slate-950">
              Building infrastructure products in public.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              With the DigitalPlat Foundation, EdgeAlphix is building a developer-first Domain API for creating, deleting, and configuring domain name resolution through a clean programmable layer.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              The interaction layer matters too. We are designing fast operator workflows around search, command input, and direct infrastructure control.
            </p>
          </div>
          <div className="surface rounded-[1.75rem] p-8">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.03em] text-slate-950">
              EdgeOS
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              EdgeOS is an independently developed operating system kernel and userland infrastructure project from EdgeAlphix Engineering. It is designed as a standards-aligned, Linux-compatible execution environment with ring3 isolation, multi-user architecture, modern filesystem support, reproducible rootfs tooling, and enough syscall and ABI compatibility to run real software without turning into a research toy.
            </p>
          </div>
          <div className="surface rounded-[1.75rem] p-8">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.03em] text-slate-950">
              initd
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              initd is a lightweight, systemd-compatible init system and service manager for Linux environments where full systemd is too heavy, too restrictive, or simply not available. It can run as PID 1 or as a standalone supervisor, supports unmodified systemd service files, preserves the familiar systemctl workflow, and gives operators a much cleaner model for containers, embedded Linux, chroot environments, lightweight VMs, and custom distributions.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
