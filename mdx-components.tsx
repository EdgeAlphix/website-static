import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="mt-6 font-[var(--font-heading)] text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-6xl"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mt-8 border-t border-slate-900/8 pt-8 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.03em] text-slate-950"
        {...props}
      />
    ),
    p: (props) => <p className="mt-4 text-base leading-8 text-slate-700" {...props} />,
    ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-slate-700" {...props} />,
    li: (props) => <li {...props} />,
    strong: (props) => <strong className="font-semibold text-slate-950" {...props} />,
    ...components,
  };
}
