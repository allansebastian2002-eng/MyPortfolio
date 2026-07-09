"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Research } from "@/components/portfolio/research";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { BrightnessSlider } from "@/components/portfolio/brightness-slider";
import { LoadingScreen } from "@/components/portfolio/loading-screen";
import { Toaster as SonnerToaster } from "sonner";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2000); // 1.5s progress + 0.5s fade
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      {/* Loading screen — always rendered, fades out via CSS when loading=false.
          pointer-events-none after fade so it doesn't block interaction. */}
      {loading && <LoadingScreen key="loading" />}

      {/* Toaster at bottom-left so it doesn't overlap the brightness slider */}
      <SonnerToaster
        position="bottom-left"
        theme="dark"
        toastOptions={{
          style: {
            background: "oklch(1 0 0)",
            border: "1px solid oklch(1 0 0)",
            color: "oklch(0.36 0.2 264)",
            borderRadius: "4px",
            fontWeight: 500,
          },
        }}
      />

      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Education />
        <Contact />
      </main>
      <Footer />

      <BrightnessSlider />
    </div>
  );
}
