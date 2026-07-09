"use client";

import { ScrollReveal } from "./scroll-reveal";

const EDU = [
  {
    institution: "Prist College of Engineering",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2020 — 2024",
    detail:
      "Undergraduate degree focused on software systems, algorithms, and emerging tech including blockchain and machine learning.",
  },
  {
    institution: "Board of Higher Secondary Examination, Kerala",
    degree: "Higher Secondary Education",
    period: "2019 — 2020",
    detail:
      "Completed higher secondary education under the Kerala state board.",
  },
  {
    institution: "Board of Public Examinations, Kerala",
    degree: "SSLC (Secondary School Leaving Certificate)",
    period: "2018",
    detail: "Completed secondary schooling under the Kerala state board.",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-16 sm:py-28 scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <ScrollReveal as="div" y={20} duration={0.7} className="max-w-2xl">
          <span className="eyebrow">Education</span>
          <h2 className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
            Academic background.
          </h2>
        </ScrollReveal>

        {/* Timeline — thin white line, yellow dots. Items stagger in. */}
        <ScrollReveal as="div" y={24} duration={0.6} delay={0.1} stagger={0.15} className="mt-8 sm:mt-12 max-w-3xl">
          <div className="border-l border-border pl-5 sm:pl-8 space-y-7 sm:space-y-10">
            {EDU.map((item) => (
              <div key={item.institution} className="relative">
                {/* Yellow dot on the line */}
                <span className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-2 h-2 rounded-full bg-accent ring-4 ring-background" />

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm sm:text-lg font-semibold text-foreground">
                    {item.institution}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-foreground/70 font-light">
                  {item.degree}
                </p>
                {item.detail && (
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-foreground/70 leading-relaxed max-w-xl font-light">
                    {item.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
