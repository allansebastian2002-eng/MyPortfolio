import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Inter } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
