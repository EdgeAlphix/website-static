"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNav } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/8 bg-[#fbfaf7]/82 backdrop-blur-md">
      <div className="container-width py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div>
              <div className="font-[var(--font-heading)] text-sm font-bold tracking-[0.18em] text-slate-950 uppercase">
                EdgeAlphix
              </div>
              <div className="text-xs text-slate-500">Infrastructure, in production.</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {siteNav.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition ${
                    active
                      ? "text-slate-950"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <a href="mailto:contact@edgealphix.com" className="button-secondary">
              Contact
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/8 bg-white/80 md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-4 bg-slate-900 transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-4 bg-slate-900 transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-4 bg-slate-900 transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>

        {open ? (
          <div className="surface mt-4 rounded-[1.5rem] p-3 md:hidden">
            <nav className="flex flex-col">
              {siteNav.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-[1rem] px-4 py-3 text-sm transition ${
                      active
                        ? "bg-slate-900 !text-white"
                        : "text-slate-600 hover:bg-white hover:text-slate-950"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="rule mt-3 pt-3">
              <a
                href="mailto:contact@edgealphix.com"
                className="flex rounded-[1rem] px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-950"
              >
                Contact
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
