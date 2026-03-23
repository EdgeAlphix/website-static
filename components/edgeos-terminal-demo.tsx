"use client";

import { useEffect, useMemo, useState } from "react";

const lines = [
  "Welcome to EdgeOS!",
  "",
  "* Documentation:  https://docs.edgeos.edgealphix.com",
  "* Support:        https://community.edgeos.edgealphix.com",
  "",
  "EdgeOS comes with ABSOLUTELY NO WARRANTY, to the extend permitted by applicable law.",
  "",
  "You can modify this message by editing /etc/motd.",
  "",
  "BusyBox v1.38.0.git (2026-02-23 01:40:43 PST) built-in shell (ash)",
  "Enter 'help' for a list of built-in commands.",
  "",
  "# ls",
  "test.py      welcome.txt",
  "# busybox",
  "BusyBox v1.38.0.git (2026-02-23 01:40:43 PST) multi-call binary.",
  "Usage: busybox [function [arguments]...]",
  "   or: busybox --list",
  "",
  "Currently defined functions:",
  "  ...",
  "",
  "# python3 test.py",
  "[*] Loop test...",
  "[+] Loop OK: 1000000",
  "[*] Memory test...",
  "[+] Memory OK",
  "[*] File test...",
  "[+] File lines read: 410",
  "[+] Exception OK",
];

export function EdgeOsTerminalDemo() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVisibleCount((current) => {
        if (current >= lines.length) {
          return current;
        }

        return current + 1;
      });
    }, 220);

    return () => window.clearInterval(timer);
  }, []);

  const visibleLines = useMemo(() => lines.slice(0, visibleCount), [visibleCount]);

  return (
    <div className="surface rounded-[1.75rem] p-5 md:p-6">
      <div className="flex items-center justify-between border-b border-slate-900/8 pb-3">
        <div className="text-sm font-medium text-slate-500">EdgeOS Session</div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2563eb]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>
      </div>

      <div className="mt-4 rounded-[1.25rem] bg-slate-950 px-4 py-4 font-mono text-[13px] leading-6 text-slate-100 md:text-[14px]">
        {visibleLines.map((line, index) => (
          <div key={`${index}-${line || "blank"}`} className="whitespace-pre-wrap break-words">
            {line || "\u00A0"}
          </div>
        ))}
        {visibleCount < lines.length ? (
          <div className="mt-1 h-4 w-2 animate-pulse bg-sky-300" />
        ) : null}
      </div>
    </div>
  );
}
