import type { Metadata } from "next";
import AupContent from "@/content/legal/acceptable-use-policy.mdx";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | EdgeAlphix LLC",
  description: "Acceptable Use Policy for EdgeAlphix LLC.",
};

export default function AcceptableUsePolicyPage() {
  return (
    <section className="section-padding pt-16 md:pt-24">
      <div className="container-width">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Acceptable Use Policy</p>
          <div className="mt-8 surface rounded-[2rem] p-8 md:p-10">
            <AupContent />
          </div>
        </div>
      </div>
    </section>
  );
}
