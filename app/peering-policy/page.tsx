import type { Metadata } from "next";
import PeeringPolicyContent from "@/content/legal/peering-policy.mdx";

export const metadata: Metadata = {
  title: "Peering Policy | EdgeAlphix LLC",
  description: "Peering Policy for EdgeAlphix Network (AS201243).",
};

export default function PeeringPolicyPage() {
  return (
    <section className="section-padding pt-16 md:pt-24">
      <div className="container-width">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Peering Policy</p>
          <div className="mt-8 surface rounded-[2rem] p-8 md:p-10">
            <PeeringPolicyContent />
          </div>
        </div>
      </div>
    </section>
  );
}
