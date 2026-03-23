export function CtaBanner() {
  return (
    <section className="section-padding pt-0">
      <div className="container-width">
        <div className="rule grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-5 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-5xl">
              Start with the infrastructure problem you actually need to solve.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Product, network, and platform discussions go directly to the team operating the stack.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a href="mailto:contact@edgealphix.com" className="button-primary">
              contact@edgealphix.com
            </a>
            <a href="mailto:peering@edgealphix.com" className="button-secondary">
              peering@edgealphix.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
