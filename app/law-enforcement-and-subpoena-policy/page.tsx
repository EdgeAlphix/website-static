import type { Metadata } from "next";
import PolicyContent from "@/content/legal/law-enforcement-and-subpoena-policy.mdx";

export const metadata: Metadata = {
  title: "Law Enforcement & Subpoena Policy | EdgeAlphix LLC",
  description: "Law Enforcement & Subpoena Policy for EdgeAlphix LLC.",
};

export default function LawEnforcementAndSubpoenaPolicyPage() {
  return (
    <section className="section-padding pt-16 md:pt-24">
      <div className="container-width">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Law Enforcement & Subpoena Policy</p>
          <div className="mt-8 surface rounded-[2rem] p-8 md:p-10">
            <PolicyContent />
          </div>
        </div>
      </div>
    </section>
  );
}
