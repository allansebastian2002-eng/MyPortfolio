"use client";

import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Research } from "@/components/portfolio/research";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { Toaster as SonnerToaster } from "sonner";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      <SonnerToaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "oklch(0.205 0.006 75)",
            border: "1px solid oklch(1 0 0 / 0.08)",
            color: "oklch(0.92 0.008 75)",
            borderRadius: "6px",
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
    </div>
  );
}
