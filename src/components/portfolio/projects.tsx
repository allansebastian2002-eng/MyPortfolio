"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  impact: string;
};

const FEATURED: Project = {
  title: "Decentralized Social Media",
  tagline: "Web3 · Ethereum · Privacy-first",
  description:
    "A blockchain-based social platform where users can post content and tip each other directly using Ethereum — eliminating the intermediaries that mine and monetise personal data in today's centralised networks. Posts live on-chain, content ownership is verifiable, and tipping is handled entirely by smart contracts.",
  stack: ["ReactJS", "Solidity", "Ethereum", "Smart Contracts"],
  highlights: [
    "Designed and shipped the ReactJS frontend with wallet integration",
    "Authored Solidity smart contracts for posts and on-chain tipping",
    "Eliminated central data silos by storing posts on-chain",
  ],
  impact:
    "Became the basis of a peer-reviewed publication on decentralised social systems.",
};

const SECONDARY: Project[] = [
  {
    title: "Bad Snake",
    tagline: "Security Research · Supply Chain",
    description:
      "Research into the vulnerability of open-source repositories like PyPI to malware injection. Analyses detection gaps and proposes improvements to package-scanning pipelines.",
    stack: ["Python", "Malware Analysis", "PyPI"],
    highlights: [
      "Catalogued attack vectors against open-source package indexes",
      "Prototyped detection improvements for malicious Python packages",
    ],
    impact:
      "Highlights concrete weaknesses in the open-source supply chain.",
  },
  {
    title: "Smart Medical Prescription",
    tagline: "Full-stack · Cloud · Healthcare",
    description:
      "A cloud-based prescription management platform bridging doctors and patients. Each patient record is keyed by a unique code so prescriptions stay organised and retrievable from any browser.",
    stack: ["Web", "MySQL", "Cloud"],
    highlights: [
      "Built a web portal serving both doctors and patients",
      "Designed a MySQL schema with unique patient codes for lookup",
    ],
    impact:
      "Streamlines prescription workflows between clinicians and patients.",
  },
];

export function Projects() {
  const reduceMotion = useReducedMotion();

  const cardHover = reduceMotion
    ? {}
    : {
        whileHover: { y: -3, scale: 1.005 },
        transition: { duration: 0.18, ease: EASE },
      };

  const featuredHover = reduceMotion
    ? {}
    : {
        whileHover: { y: -3 },
        transition: { duration: 0.18, ease: EASE },
      };

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <span className="eyebrow">Projects</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium tracking-tight">
              Things I&apos;ve built.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Three projects spanning decentralised systems, security research,
            and full-stack web.
          </p>
        </div>

        {/* FEATURED — full width, larger, more detail */}
        <motion.div
          {...featuredHover}
          className="mt-10 surface rounded-lg p-7 sm:p-9 lg:p-10 transition-colors duration-200 hover:border-primary/30"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Left — meta + description */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="eyebrow text-primary">Featured</span>
                <span className="w-8 h-px bg-border" />
                <span className="eyebrow">{FEATURED.tagline}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                {FEATURED.title}
              </h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                {FEATURED.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {FEATURED.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — highlights + impact */}
            <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-10">
              <p className="eyebrow mb-3">Highlights</p>
              <ul className="space-y-2.5">
                {FEATURED.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-foreground/85"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="text-primary font-medium">Impact —</span>{" "}
                  {FEATURED.impact}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECONDARY — two smaller cards side by side */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          {SECONDARY.map((project) => (
            <motion.div
              key={project.title}
              {...cardHover}
              className="surface rounded-lg p-6 sm:p-7 transition-colors duration-200 hover:border-primary/30 group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-serif text-xl font-medium tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {project.tagline}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/60 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2 py-0.5 rounded border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="text-primary font-medium">Impact —</span>{" "}
                  {project.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
