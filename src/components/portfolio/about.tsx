"use client";

import { ScrollReveal } from "./scroll-reveal";

const STATS = [
  { value: "1", label: "Published paper" },
  { value: "3", label: "Projects shipped" },
  { value: "2024", label: "BTech CSE, graduated" },
  { value: "Fresher", label: "Open to opportunities" },
];

const COURSEWORK = [
  "Object Oriented Programming",
  "Data Structures & Algorithms",
  "Advanced DSA",
  "Databases",
  "Operating Systems",
  "Computer Networks",
  "Machine Learning",
  "Information Retrieval",
  "Image Processing",
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header — reveals as a unit */}
        <ScrollReveal as="div" y={20} duration={0.7} className="max-w-2xl">
          <span className="eyebrow">About</span>
          <h2 className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
            Aspiring developer, curious builder.
          </h2>
        </ScrollReveal>

        {/* Asymmetric two-column — bio left, stats right */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16">
          {/* LEFT — bio (7/12) — reveals as a unit, no body-text animation */}
          <ScrollReveal
            as="div"
            y={28}
            duration={0.8}
            delay={0.1}
            className="lg:col-span-7 space-y-4 sm:space-y-5"
          >
            <p className="text-sm sm:text-lg leading-relaxed text-foreground/90 font-light">
              I&apos;m a recent Computer Science graduate from Kerala, India,
              just starting out as a developer. During my engineering I built
              a few projects across web development and security research,
              and co-authored a published paper on decentralised social media
              — an area I find genuinely interesting even though I&apos;m
              still learning the deeper details.
            </p>
            <p className="text-sm sm:text-lg leading-relaxed text-foreground/70 font-light">
              I&apos;m comfortable with the fundamentals — C, C++, Python,
              Java, JavaScript, and SQL — and I&apos;ve shipped work in React
              and Solidity. I&apos;m looking for my first role where I can
              learn from a team, write production code, and grow into a
              well-rounded engineer.
            </p>

            {/* Coursework — inline tags with white-line separators */}
            <div className="pt-2 sm:pt-4">
              <p className="eyebrow mb-3">Relevant coursework</p>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs sm:text-sm text-foreground/70 font-light">
                {COURSEWORK.map((c, i) => (
                  <span key={c} className="flex items-center gap-3">
                    {c}
                    {i < COURSEWORK.length - 1 && (
                      <span className="text-border">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — stats (4/12 offset). Stat cards stagger in. */}
          <ScrollReveal
            as="div"
            y={32}
            duration={0.7}
            delay={0.2}
            stagger={0.12}
            className="lg:col-span-4 lg:col-start-9 lg:mt-2"
          >
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-px bg-border border border-border">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-background p-4 sm:p-6">
                  <div className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-foreground/60 font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
