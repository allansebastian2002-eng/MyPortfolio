"use client";

import { ArrowUpRight } from "lucide-react";

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
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between gap-4 sm:gap-6 flex-wrap">
          <div className="max-w-2xl">
            <span className="eyebrow">Projects</span>
            <h2 className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
              Things I&apos;ve built.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-foreground/60 max-w-xs font-light">
            Three projects spanning decentralised systems, security research,
            and full-stack web.
          </p>
        </div>

        {/* FEATURED — full width, larger, inverse-hover */}
        <div
          className="inverse-hover mt-6 sm:mt-10 surface rounded-md p-5 sm:p-9 lg:p-10 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10">
            {/* Left — meta + description */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3 sm:mb-4 flex-wrap">
                <span className="eyebrow invert-accent text-accent">Featured</span>
                <span className="w-8 h-px bg-border invert-accent" />
                <span className="eyebrow invert-accent">{FEATURED.tagline}</span>
              </div>
              <h3 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.02em]">
                {FEATURED.title}
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-lg leading-relaxed text-foreground/80 font-light invert-text">
                {FEATURED.description}
              </p>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                {FEATURED.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded border border-border text-foreground/70 invert-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — highlights + impact */}
            <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-10">
              <p className="eyebrow mb-3 invert-accent">Highlights</p>
              <ul className="space-y-2.5">
                {FEATURED.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-foreground/85 invert-text"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0 invert-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs text-foreground/70 leading-relaxed invert-text">
                  <span className="text-accent font-semibold invert-accent">
                    Impact —
                  </span>{" "}
                  {FEATURED.impact}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECONDARY — two smaller cards side by side */}
        <div className="mt-4 sm:mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {SECONDARY.map((project) => (
            <div
              key={project.title}
              className="inverse-hover surface rounded-md p-5 sm:p-7 group transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-display text-lg sm:text-2xl font-bold tracking-[-0.02em]">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-foreground/60 invert-accent">
                    {project.tagline}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-foreground/60 invert-accent transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <p className="text-sm leading-relaxed text-foreground/75 font-light invert-text">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-foreground/80 invert-text"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground/40 shrink-0 invert-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2 py-0.5 rounded border border-border text-foreground/70 invert-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <p className="text-xs text-foreground/70 leading-relaxed invert-text">
                  <span className="text-accent font-semibold invert-accent">
                    Impact —
                  </span>{" "}
                  {project.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
