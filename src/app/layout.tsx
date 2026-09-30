import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import VideoLightboxProvider from "@/components/VideoLightboxProvider";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexguofilm.com"),
  title: {
    default: "Alexander Guo | Director & Actor",
    template: "%s",
  },
  description:
    "Alexander Guo is a director and actor based in Los Angeles working across narrative film, national commercials, and VFX.",
  openGraph: {
    title: "Alexander Guo | Director & Actor",
    description:
      "Alexander Guo is a director and actor based in Los Angeles working across narrative film, national commercials, and VFX.",
    url: "https://alexguofilm.com",
    siteName: "Alexander Guo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander Guo | Director & Actor",
    description:
      "Alexander Guo is a director and actor based in Los Angeles working across narrative film, national commercials, and VFX.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <VideoLightboxProvider>
          {children}
          <Footer />
        </VideoLightboxProvider>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
