import type { Metadata } from "next";
import NoticeContent from "@/content/legal/do-not-sell-or-share-my-personal-information.mdx";

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Personal Information | EdgeAlphix LLC",
  description: "Do Not Sell or Share My Personal Information notice for EdgeAlphix LLC.",
};

export default function DoNotSellOrSharePage() {
  return (
    <section className="section-padding pt-16 md:pt-24">
      <div className="container-width">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Privacy Notice</p>
          <div className="mt-8 surface rounded-[2rem] p-8 md:p-10">
            <NoticeContent />
          </div>
        </div>
      </div>
    </section>
  );
}
