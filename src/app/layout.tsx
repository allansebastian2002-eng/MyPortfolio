import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Allan Sebastian — Blockchain & Web Developer",
  description:
    "Portfolio of Allan Sebastian, a Computer Science engineer specialising in blockchain, web development, and security. Builder of decentralised systems, smart contracts, and full-stack applications.",
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
      "Computer Science engineer building decentralised systems and full-stack applications with React, Solidity, and Python.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allan Sebastian — Blockchain & Web Developer",
    description:
      "Computer Science engineer building decentralised systems and full-stack applications.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
