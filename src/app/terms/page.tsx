import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Terms & Conditions | Alexander Guo",
  description: "Terms and conditions for alexguofilm.com.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="border-t border-[#222121]/12 pb-24">
      <Header />

      <div className="px-6 py-8 sm:px-14 sm:py-8">
        <h1 className="font-black leading-[0.85] tracking-[-2px] text-[clamp(40px,9vw,88px)] sm:tracking-[-5px]">
          TERMS &amp; CONDITIONS
        </h1>
        <p className="mt-4 text-sm font-semibold text-[#222121]/70">
          Last updated September 29, 2026
        </p>
      </div>

      <div className="flex max-w-[720px] flex-col gap-8 px-6 sm:px-14">
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold tracking-[-0.5px]">Acceptance</h2>
          <p className="text-[15px] leading-[1.75] font-semibold text-[#222121]/75">
            By visiting alexguofilm.com, you agree to these terms. If you do not agree, please
            do not use the site.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold tracking-[-0.5px]">Ownership</h2>
          <p className="text-[15px] leading-[1.75] font-semibold text-[#222121]/75">
            All video, images, writing, and design on this site belong to Alexander Guo unless
            noted otherwise, and may not be copied, reposted, or reused without permission.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold tracking-[-0.5px]">Third party links</h2>
          <p className="text-[15px] leading-[1.75] font-semibold text-[#222121]/75">
            This site links to and embeds content from third party services, including YouTube
            and Instagram. Those services have their own terms and privacy policies, which this
            site does not control.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold tracking-[-0.5px]">No warranty</h2>
          <p className="text-[15px] leading-[1.75] font-semibold text-[#222121]/75">
            This site is provided as is, without warranty of any kind. Alexander Guo is not
            liable for any damages arising from your use of the site.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold tracking-[-0.5px]">Changes</h2>
          <p className="text-[15px] leading-[1.75] font-semibold text-[#222121]/75">
            These terms may be updated from time to time. Continued use of the site after a
            change means you accept the updated terms.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold tracking-[-0.5px]">Contact</h2>
          <p className="text-[15px] leading-[1.75] font-semibold text-[#222121]/75">
            Questions about these terms can be sent to{" "}
            <a
              href="mailto:alextheguo@gmail.com"
              className="border-b-2 border-[#222121]/35"
            >
              alextheguo@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
