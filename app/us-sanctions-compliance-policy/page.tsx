import type { Metadata } from "next";
import PolicyContent from "@/content/legal/us-sanctions-compliance-policy.mdx";

export const metadata: Metadata = {
  title: "U.S. Sanctions Compliance Policy | EdgeAlphix LLC",
  description: "U.S. Sanctions Compliance Policy for EdgeAlphix LLC.",
};

export default function UsSanctionsCompliancePolicyPage() {
  return (
    <section className="section-padding pt-16 md:pt-24">
      <div className="container-width">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">U.S. Sanctions Compliance Policy</p>
          <div className="mt-8 surface rounded-[2rem] p-8 md:p-10">
            <PolicyContent />
          </div>
        </div>
      </div>
    </section>
  );
}
