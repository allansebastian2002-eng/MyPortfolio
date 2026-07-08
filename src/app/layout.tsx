import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Allan Sebastian — Blockchain & Web Developer",
  description:
    "Allan Sebastian is a computer science engineer building decentralised systems, smart contracts, and full-stack applications from Kerala, India.",
  keywords: [
    "Allan Sebastian",
    "Blockchain Developer",
    "Solidity",
    "Ethereum",
    "Web Developer",
    "Computer Science Engineer",
    "Decentralized Social Media",
    "Portfolio",
  ],
  authors: [{ name: "Allan Sebastian" }],
  openGraph: {
    title: "Allan Sebastian — Blockchain & Web Developer",
    description:
      "Computer science engineer building decentralised systems and full-stack applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allan Sebastian — Blockchain & Web Developer",
    description:
      "Computer science engineer building decentralised systems and full-stack applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
