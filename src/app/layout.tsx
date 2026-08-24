import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteBackground from "@/components/SiteBackground";
import { profile } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.summary,
  keywords: [
    "portfolio",
    "computer science",
    "software engineer",
    "fresh graduate",
    profile.name,
  ],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="relative font-sans">
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
