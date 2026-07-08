"use client";

import { motion } from "framer-motion";
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
    detail: "Completed higher secondary education under the Kerala state board.",
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
      className="relative py-20 sm:py-28 scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-mono text-sm text-primary">{"// education"}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            Academic background
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            A foundation in computer science built across three Kerala-based
            institutions.
          </p>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div
            className="absolute left-5 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent"
            aria-hidden
          />

          <div className="space-y-8">
            {EDU.map((item, i) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14 sm:pl-16"
              >
                {/* Node */}
                <span className="absolute left-0 top-0 grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-card border border-border text-primary shadow-lg">
                  <item.icon className="w-5 h-5" />
                </span>

                <div className="rounded-xl border border-border bg-card/40 backdrop-blur p-5 sm:p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {item.institution}
                    </h3>
                    <span className="font-mono text-xs text-primary">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {item.degree}
                  </p>
                  {item.detail && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {item.detail}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
