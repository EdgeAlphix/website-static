import type { Metadata } from "next";
import SalesTermsContent from "@/content/legal/sales-terms-and-conditions.mdx";

export const metadata: Metadata = {
  title: "Sales Terms and Conditions | EdgeAlphix LLC",
  description: "Sales Terms and Conditions for EdgeAlphix LLC.",
};

export default function SalesTermsAndConditionsPage() {
  return (
    <section className="section-padding pt-16 md:pt-24">
      <div className="container-width">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Sales Terms and Conditions</p>
          <div className="mt-8 surface rounded-[2rem] p-8 md:p-10">
            <SalesTermsContent />
          </div>
        </div>
      </div>
    </section>
  );
}
