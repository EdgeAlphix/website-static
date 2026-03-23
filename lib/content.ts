export type Stat = {
  statement: string;
  support: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type Project = {
  name: string;
  category: string;
  summary: string;
  points: string[];
  href: string;
};

export const siteNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

export const stats: Stat[] = [
  {
    statement: "150k+ GitHub stars across founder-led open-source work.",
    support: "The kind of developer reach most infrastructure companies would love to have.",
  },
  {
    statement: "A real network edge.",
    support: "AS201243 gives the company a real public footprint on the internet.",
  },
  {
    statement: "Multi-region from the start.",
    support: "North America, Europe, and Asia are already part of the operating map.",
  },
  {
    statement: "IPv6-first and standards-based.",
    support: "Built around the internet stack modern platforms actually run on.",
  },
];

export const homeFeatures: Feature[] = [
  {
    title: "Network operations",
    description:
      "We run global routing, peering, and traffic infrastructure with real operational discipline.",
  },
  {
    title: "Cloud infrastructure",
    description:
      "We build cloud infrastructure for teams that need scale, reliability, and a clear operating model.",
  },
  {
    title: "Systems engineering",
    description:
      "We build systems software around runtime control, portability, and long-term maintainability.",
  },
  {
    title: "Open-source integration",
    description:
      "We turn open-source building blocks into durable production systems.",
  },
  {
    title: "Developer platforms",
    description:
      "We build developer-first infrastructure products that turn operational complexity into clean APIs and fast interfaces.",
  },
];

export const infrastructurePillars: Feature[] = [
  {
    title: "AS201243",
    description:
      "A public autonomous system with verifiable routing data, registry presence, and a clear operating identity.",
  },
  {
    title: "Global routing",
    description:
      "A multi-region routing layer across North America, Europe, and Asia.",
  },
  {
    title: "IPv6-first design",
    description:
      "An IPv6-first architecture built as part of the default stack, not added later.",
  },
  {
    title: "Transparent policy",
    description:
      "Published routing policy and peering posture through standard industry channels.",
  },
];

export const serviceGroups = [
  {
    title: "Cloud & Infrastructure",
    body: "We design and run cloud and edge infrastructure for teams operating across regions and environments.",
    bullets: [
      "Regional deployment architecture",
      "Virtual hosting and compute platforms",
      "Traffic distribution and edge delivery",
      "Operational tooling and runbook design",
    ],
  },
  {
    title: "Security & Reliability",
    body: "We build security and reliability into the architecture from day one.",
    bullets: [
      "Secure-by-default service design",
      "Failure planning and recovery paths",
      "Traffic policy and exposure reduction",
      "Operational hardening for long-lived systems",
    ],
  },
  {
    title: "Software Engineering",
    body: "We build production software for infrastructure teams that need clarity, control, and long-term durability.",
    bullets: [
      "Architecture and implementation",
      "Backend services and platform tooling",
      "Deployment and production readiness",
      "Performance-oriented systems work",
    ],
  },
  {
    title: "Open Source Integration",
    body: "We help teams turn open source into a platform advantage, not just a licensing decision.",
    bullets: [
      "Commercial support around open stacks",
      "Integration and compatibility work",
      "Compliance-aware deployment guidance",
      "Long-term maintainability strategy",
    ],
  },
  {
    title: "Advisory",
    body: "We work with founders and operators making infrastructure decisions that will shape their stack for years.",
    bullets: [
      "Architecture reviews",
      "Platform direction and tradeoff analysis",
      "Network and systems strategy",
      "Execution guidance for critical projects",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Domain API",
    category: "Developer Platform",
    summary:
      "A developer-first domain platform, built with the DigitalPlat Foundation, for domain creation, deletion, and DNS configuration.",
    points: [
      "Programmatic domain lifecycle management through a clean API surface",
      "Built for modern developer workflows instead of registrar-era control panels",
      "A product direction focused on faster operator workflows and clean control surfaces",
    ],
    href: "#",
  },
  {
    name: "EdgeOS",
    category: "Systems Engineering",
    summary:
      "An operating system kernel initiative building a Linux-compatible execution environment for serious systems work and long-term infrastructure use.",
    points: [
      "Ring3 user-space isolation, multi-user architecture, and Unix-compatible permissions",
      "Custom ELF loading, high syscall-level Linux compatibility, and musl-based application support",
      "ext4, networking, BusyBox, SSH, TLS, and reproducible root filesystem tooling in one cohesive stack",
    ],
    href: "#",
  },
  {
    name: "initd",
    category: "Infrastructure Runtime",
    summary:
      "A lightweight, systemd-compatible init system and service manager built for containers, embedded Linux, minimal systems, and edge environments.",
    points: [
      "Runs unmodified systemd service files without requiring systemd itself",
      "Works as either a full PID 1 init system or a standalone service manager",
      "Keeps the familiar systemctl workflow while dropping heavy runtime assumptions like D-Bus and journald",
    ],
    href: "#",
  },
];

export const footerLinks = {
  company: siteNav,
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms and Conditions" },
    { href: "/sales-terms-and-conditions", label: "Sales Terms and Conditions" },
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/do-not-sell-or-share-my-personal-information", label: "Do Not Sell or Share My Personal Information" },
    { href: "/acceptable-use-policy", label: "Acceptable Use Policy" },
    { href: "/law-enforcement-and-subpoena-policy", label: "Law Enforcement & Subpoena Policy" },
    { href: "/us-sanctions-compliance-policy", label: "U.S. Sanctions Compliance Policy" },
    { href: "/cookie-policy", label: "Cookie Policy" },
    { href: "/peering-policy", label: "Peering Policy" },
  ],
};
