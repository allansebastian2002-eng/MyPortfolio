"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Boxes, Bug, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  tagline: string;
  description: string;
  icon: typeof Boxes;
  stack: string[];
  highlights: string[];
  impact: string;
};

const PROJECTS: Project[] = [
  {
    title: "Decentralized Social Media",
    tagline: "Web3 · Ethereum · Privacy-first",
    icon: Boxes,
    description:
      "A blockchain-based social platform where users can post content and tip each other directly using Ethereum — eliminating the intermediaries that mine and monetise personal data in today's centralised networks.",
    stack: ["ReactJS", "Solidity", "Ethereum", "Smart Contracts"],
    highlights: [
      "Designed and shipped ReactJS frontend with wallet integration",
      "Authored Solidity smart contracts for posts and on-chain tipping",
      "Eliminated central data silos by storing posts on-chain",
    ],
    impact:
      "Became the basis of a peer-reviewed publication on decentralised social systems.",
  },
  {
    title: "Bad Snake — PyPI Malware Scanning",
    tagline: "Security Research · Supply Chain",
    icon: Bug,
    description:
      "A research project investigating the vulnerability of open-source repositories like PyPI to malware injection. The work analyses detection gaps and proposes improvements to package-scanning pipelines to better protect downstream users.",
    stack: ["Python", "Malware Analysis", "PyPI", "Security Research"],
    highlights: [
      "Catalogued common attack vectors against open-source package indexes",
      "Prototyped detection improvements for malicious Python packages",
      "Advocated stronger collaboration between security researchers and maintainers",
    ],
    impact:
      "Highlights concrete weaknesses in the open-source software supply chain.",
  },
  {
    title: "Smart Medical Prescription Service",
    tagline: "Full-stack · Cloud · Healthcare",
    icon: Stethoscope,
    description:
      "A cloud-based prescription management platform that bridges doctors and patients. Each patient record is keyed by a unique code so prescriptions stay organised, retrievable, and accessible from any browser.",
    stack: ["Web Platform", "MySQL", "Cloud", "Database Design"],
    highlights: [
      "Built a web-based portal serving both doctors and patients",
      "Designed a MySQL schema with unique patient codes for record lookup",
      "Deployed as a cloud-based system for anywhere-access",
    ],
    impact:
      "Streamlines prescription workflows between clinicians and patients.",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
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
          <span className="font-mono text-sm text-primary">{"// projects"}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            Things I&apos;ve built
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            A selection of projects spanning decentralised systems, security
            research, and full-stack web applications.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={i === 0 ? "lg:col-span-2" : ""}
            >
              <Card className="glass-card h-full group relative overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <span className="grid place-items-center w-11 h-11 rounded-lg bg-primary/15 border border-primary/25 text-primary shrink-0">
                        <project.icon className="w-5 h-5" />
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-xs font-mono text-primary">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono text-[11px] bg-secondary/60"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      <span className="text-primary font-semibold">
                        Impact —
                      </span>{" "}
                      {project.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
