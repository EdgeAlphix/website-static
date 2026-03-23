import type { Metadata } from "next";
import TermsContent from "@/content/legal/terms-and-conditions.mdx";

export const metadata: Metadata = {
  title: "Terms & Conditions | EdgeAlphix LLC",
  description: "Terms & Conditions for EdgeAlphix LLC.",
};

export default function TermsAndConditionsPage() {
  return (
    <section className="section-padding pt-16 md:pt-24">
      <div className="container-width">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Terms & Conditions</p>
          <div className="mt-8 surface rounded-[2rem] p-8 md:p-10">
            <TermsContent />
          </div>
        </div>
      </div>
    </section>
  );
}
