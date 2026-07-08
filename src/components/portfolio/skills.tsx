"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Boxes,
  Shield,
  Cpu,
  Database,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
  accent: string;
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Web Development",
    icon: Globe,
    description: "Frontend, backend, and the languages in between.",
    accent: "text-primary",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Java", "SQL"],
  },
  {
    title: "Systems & Languages",
    icon: Code2,
    description: "Core programming languages I work in daily.",
    accent: "text-primary",
    skills: ["C", "C++", "Python", "Java", "SQL", "Solidity"],
  },
  {
    title: "Blockchain & Web3",
    icon: Boxes,
    description: "Smart contracts and decentralised applications.",
    accent: "text-primary",
    skills: ["Solidity", "Ethereum", "Smart Contracts", "ReactJS", "Web3"],
  },
  {
    title: "Security & Research",
    icon: Shield,
    description: "Defensive security, malware analysis, and open-source supply chain.",
    accent: "text-primary",
    skills: ["Ethical Hacking", "Malware Scanning", "PyPI Research", "Vulnerability Analysis"],
  },
  {
    title: "Data & Infrastructure",
    icon: Database,
    description: "Databases, cloud platforms, and storage systems.",
    accent: "text-primary",
    skills: ["MySQL", "Cloud Systems", "Database Design", "SQL"],
  },
  {
    title: "Foundations",
    icon: Cpu,
    description: "Theory and engineering fundamentals.",
    accent: "text-primary",
    skills: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning",
      "Image Processing",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
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
          <span className="font-mono text-sm text-primary">{"// skills"}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            A toolkit for shipping secure software
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            From low-level systems programming to high-level web frameworks and
            smart contracts — here&apos;s what I reach for when I build.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Card className="glass-card h-full group hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="grid place-items-center w-10 h-10 rounded-lg bg-primary/15 border border-primary/25 text-primary">
                      <group.icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-base font-semibold">{group.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {group.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-mono rounded border border-border bg-background/40 text-muted-foreground group-hover:text-foreground group-hover:border-primary/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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
