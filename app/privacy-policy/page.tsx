import type { Metadata } from "next";
import PrivacyPolicyContent from "@/content/legal/privacy-policy.mdx";

export const metadata: Metadata = {
  title: "Privacy Policy | EdgeAlphix LLC",
  description: "Privacy Policy for EdgeAlphix LLC.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding pt-16 md:pt-24">
      <div className="container-width">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Privacy Policy</p>
          <div className="mt-8 surface rounded-[2rem] p-8 md:p-10">
            <PrivacyPolicyContent />
          </div>
        </div>
      </div>
    </section>
  );
}
