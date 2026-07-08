"use client";

import { GraduationCap, School, BookOpen } from "lucide-react";

type EduItem = {
  institution: string;
  degree: string;
  period: string;
  icon: typeof GraduationCap;
  detail?: string;
};

const EDU: EduItem[] = [
  {
    institution: "Prist College of Engineering",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2020 — 2024",
    icon: GraduationCap,
    detail:
      "Undergraduate degree focused on software systems, algorithms, and emerging tech including blockchain and machine learning.",
  },
  {
    institution: "Board of Higher Secondary Examination, Kerala",
    degree: "Higher Secondary Education",
    period: "2019 — 2020",
    icon: School,
    detail:
      "Completed higher secondary education under the Kerala state board.",
  },
  {
    institution: "Board of Public Examinations, Kerala",
    degree: "SSLC (Secondary School Leaving Certificate)",
    period: "2018",
    icon: BookOpen,
    detail: "Completed secondary schooling under the Kerala state board.",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-24 sm:py-28 scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <span className="eyebrow">Education</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium tracking-tight">
            Academic background.
          </h2>
        </div>

        {/* Timeline — restrained, thin line, no heavy nodes */}
        <div className="mt-12 max-w-3xl">
          <div className="border-l border-border pl-6 sm:pl-8 space-y-10">
            {EDU.map((item) => (
              <div key={item.institution} className="relative">
                {/* Small terracotta dot on the line */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-medium text-foreground">
                    {item.institution}
                  </h3>
                  <span className="font-mono text-xs text-primary">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.degree}
                </p>
                {item.detail && (
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">
                    {item.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
