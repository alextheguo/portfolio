import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy | Alexander Guo",
  description: "Privacy policy for alexguofilm.com.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="border-t border-[#222121]/12 pb-24">
      <Header />

      <div className="px-6 py-8 sm:px-14 sm:py-8">
        <h1 className="font-black leading-[0.85] tracking-[-2px] text-[clamp(40px,9vw,88px)] sm:tracking-[-5px]">
          PRIVACY POLICY
        </h1>
        <p className="mt-4 text-sm font-semibold text-[#222121]/70">
          Last updated September 29, 2026
        </p>
      </div>

      <div className="flex max-w-[720px] flex-col gap-8 px-6 sm:px-14">
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold tracking-[-0.5px]">Overview</h2>
          <p className="text-[15px] leading-[1.75] font-semibold text-[#222121]/75">
            This site (alexguofilm.com) is a personal portfolio for Alexander Guo. It does not
            require an account, does not sell personal data, and does not run a contact form
            that collects information. This policy explains the small amount of data that is
            still involved in visiting the site.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold tracking-[-0.5px]">Embedded video</h2>
          <p className="text-[15px] leading-[1.75] font-semibold text-[#222121]/75">
            Video content on this site is embedded from YouTube. When you play an embedded
            video, YouTube (Google) may set cookies and collect data according to its own
            privacy policy. You can review it at{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b-2 border-[#222121]/35"
            >
              policies.google.com/privacy
            </a>
            .
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold tracking-[-0.5px]">Analytics</h2>
          <p className="text-[15px] leading-[1.75] font-semibold text-[#222121]/75">
            This site may use privacy-focused, aggregate analytics to understand how many
            people visit and which pages they view. This data does not identify you
            personally.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold tracking-[-0.5px]">Cookies</h2>
          <p className="text-[15px] leading-[1.75] font-semibold text-[#222121]/75">
            A small cookie or local storage entry may be set to remember that you have seen the
            cookie notice on this site. Third-party embeds (such as YouTube) may set their own
            cookies as described above.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold tracking-[-0.5px]">Contact</h2>
          <p className="text-[15px] leading-[1.75] font-semibold text-[#222121]/75">
            Questions about this policy can be sent to{" "}
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
