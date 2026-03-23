import type { Metadata } from "next";
import CookiePolicyContent from "@/content/legal/cookie-policy.mdx";

export const metadata: Metadata = {
  title: "Cookie Policy | EdgeAlphix LLC",
  description: "Cookie Policy for EdgeAlphix LLC.",
};

export default function CookiePolicyPage() {
  return (
    <section className="section-padding pt-16 md:pt-24">
      <div className="container-width">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Cookie Policy</p>
          <div className="mt-8 surface rounded-[2rem] p-8 md:p-10">
            <CookiePolicyContent />
          </div>
        </div>
      </div>
    </section>
  );
}
