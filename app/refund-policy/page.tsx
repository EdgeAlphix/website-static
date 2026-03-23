import type { Metadata } from "next";
import RefundPolicyContent from "@/content/legal/refund-policy.mdx";

export const metadata: Metadata = {
  title: "Refund Policy | EdgeAlphix LLC",
  description: "Refund Policy for EdgeAlphix LLC.",
};

export default function RefundPolicyPage() {
  return (
    <section className="section-padding pt-16 md:pt-24">
      <div className="container-width">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Refund Policy</p>
          <div className="mt-8 surface rounded-[2rem] p-8 md:p-10">
            <RefundPolicyContent />
          </div>
        </div>
      </div>
    </section>
  );
}
