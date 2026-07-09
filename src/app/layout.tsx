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

/* Inline script — runs before paint to apply saved brightness from localStorage.
   This prevents a flash of the default dark theme when the user previously
   chose a lighter setting. Interpolates oklch values between dark (t=0)
   and light (t=1) endpoints. */
const noFlashScript = `(function(){try{var b=localStorage.getItem('brightness');if(b===null)b='0';var t=Number(b)/100;var bgL=0.36+0.59*t;var bgC=0.20-0.185*t;var fgL=1.0-0.70*t;var fgC=0.22*t;var mL=0.85-0.35*t;var mC=0.15*t;var r=document.documentElement;r.style.setProperty('--background','oklch('+bgL+' '+bgC+' 264)');r.style.setProperty('--foreground','oklch('+fgL+' '+fgC+' 264)');r.style.setProperty('--card','oklch('+bgL+' '+bgC+' 264)');r.style.setProperty('--popover','oklch('+bgL+' '+bgC+' 264)');r.style.setProperty('--primary','oklch('+fgL+' '+fgC+' 264)');r.style.setProperty('--primary-foreground','oklch('+bgL+' '+bgC+' 264)');r.style.setProperty('--secondary','oklch('+(bgL+0.04)+' '+bgC+' 264)');r.style.setProperty('--muted','oklch('+(bgL+0.04)+' '+bgC+' 264)');r.style.setProperty('--muted-foreground','oklch('+mL+' '+mC+' 264)');r.style.setProperty('--border','oklch('+fgL+' '+fgC+' 264 / 0.32)');r.style.setProperty('--input','oklch('+fgL+' '+fgC+' 264 / 0.35)');r.style.setProperty('--ring','oklch('+fgL+' '+fgC+' 264)');}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
