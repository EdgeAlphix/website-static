"use client";

import { useEffect, useState } from "react";

const commands = [
  {
    label: "List domains",
    lines: [
      "curl https://domain-api.digitalplat.org/api/v1/domains \\",
      '  -H "Authorization: Bearer dp_live_xxxxxxxxxxxxxxxxx"',
    ],
    result: '{ "success": true, "data": { ... }, "meta": { ... } }',
  },
  {
    label: "Register domain",
    lines: [
      "curl https://domain-api.digitalplat.org/api/v1/domains \\",
      "  -X POST \\",
      '  -H "Authorization: Bearer dp_live_xxxxxxxxxxxxxxxxx" \\',
      '  -H "Content-Type: application/json" \\',
      `  -d '{"domain":"example.us.kg","key":"kyc_demo_xxxxxxxxx","nameservers":["ns1.provider.com","ns2.provider.com"]}'`,
    ],
    result: '{ "success": true, "data": { ... }, "meta": { ... } }',
  },
  {
    label: "Update nameservers",
    lines: [
      "curl https://domain-api.digitalplat.org/api/v1/domains/example.dpdns.org/nameservers \\",
      "  -X PATCH \\",
      '  -H "Authorization: Bearer dp_live_xxxxxxxxxxxxxxxxx" \\',
      '  -H "Content-Type: application/json" \\',
      `  -d '{"nameservers":["ns1.provider.com","ns2.provider.com"]}'`,
    ],
    result: '{ "success": true, "data": { ... }, "meta": { ... } }',
  },
  {
    label: "Delete domain",
    lines: [
      "curl https://domain-api.digitalplat.org/api/v1/domains/example.dpdns.org \\",
      "  -X DELETE \\",
      '  -H "Authorization: Bearer dp_live_xxxxxxxxxxxxxxxxx"',
    ],
    result: '{ "success": true, "data": { ... }, "meta": { ... } }',
  },
];

export function DomainApiDemo() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const typingTimer = window.setInterval(() => {
      setVisibleCount((current) => {
        const max = commands[index].lines.length;

        if (current >= max) {
          return current;
        }

        return current + 1;
      });
    }, 240);

    return () => window.clearInterval(typingTimer);
  }, [index]);

  useEffect(() => {
    if (visibleCount < commands[index].lines.length) {
      return;
    }

    const nextTimer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % commands.length);
      setVisibleCount(1);
    }, 1800);

    return () => window.clearTimeout(nextTimer);
  }, [index, visibleCount]);

  const active = commands[index];
  const visibleLines = active.lines.slice(0, visibleCount);

  return (
    <div className="surface rounded-[1.75rem] p-5 md:p-6">
      <div className="flex items-center justify-between border-b border-slate-900/8 pb-3">
        <div className="text-sm font-medium text-slate-500">Domain API Console</div>
        <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
          {active.label}
        </div>
      </div>

      <div className="mt-4 rounded-[1.25rem] bg-slate-950 px-4 py-4 text-sm text-slate-100">
        <div className="space-y-1 font-mono text-[13px] leading-6 md:text-[14px]">
          {visibleLines.map((line, indexLine) => (
            <div key={`${active.label}-${indexLine}`} className="whitespace-pre-wrap break-words">
              {line}
            </div>
          ))}
          {visibleCount < active.lines.length ? (
            <div className="mt-1 h-4 w-2 animate-pulse bg-sky-300" />
          ) : null}
        </div>

        {visibleCount >= active.lines.length ? (
          <div className="mt-4 border-t border-white/8 pt-4 font-mono text-[13px] leading-6 text-emerald-300 md:text-[14px]">
            {active.result}
          </div>
        ) : null}
      </div>

      <div className="mt-4 grid gap-3 text-sm text-slate-600 md:grid-cols-3">
        <div className="rounded-[1rem] border border-slate-900/8 bg-white/70 px-3 py-3">
          Bearer auth with `dp_live_` keys
        </div>
        <div className="rounded-[1rem] border border-slate-900/8 bg-white/70 px-3 py-3">
          Base URL: `/api/v1`
        </div>
        <div className="rounded-[1rem] border border-slate-900/8 bg-white/70 px-3 py-3">
          JSON responses with `success`, `data`, and `meta`
        </div>
      </div>
    </div>
  );
}
