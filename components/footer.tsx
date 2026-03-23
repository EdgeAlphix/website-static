import Link from "next/link";
import { footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-900/8 bg-white/40">
      <div className="container-width grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-md">
          <p className="eyebrow">EdgeAlphix LLC</p>
          <h2 className="mt-5 font-[var(--font-heading)] text-2xl font-semibold text-slate-950">
            Building the future of internet infrastructure.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
            EdgeAlphix is a US infrastructure company operating across cloud, network, and open systems.
          </p>
          <a
            href="mailto:contact@edgealphix.com"
            className="mt-6 inline-flex text-sm font-semibold text-slate-700 transition hover:text-slate-950"
          >
            contact@edgealphix.com
          </a>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            EdgeAlphix LLC
            <br />
            Anaheim, CA 92802
            <br />
            United States
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Company
          </h3>
          <div className="mt-5 space-y-3">
            {footerLinks.company.map((link) => (
              <Link key={link.href} href={link.href} className="block text-sm text-slate-600 hover:text-slate-950">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Legal
          </h3>
          <div className="mt-5 space-y-3">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} href={link.href} className="block text-sm text-slate-600 hover:text-slate-950">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container-width border-t border-slate-900/8 py-6 text-sm text-slate-500">
        © 2025 EdgeAlphix LLC. All rights reserved.
      </div>
    </footer>
  );
}
