import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VideoLightboxProvider from "@/components/VideoLightboxProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexander Guo | Director",
  description: "Alexander Guo — Director, filmmaker, and actor based in Los Angeles.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <VideoLightboxProvider>{children}</VideoLightboxProvider>
      </body>
    </html>
  );
}
