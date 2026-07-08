"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Shield, Boxes } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const STATS = [
  { icon: BookOpen, value: "1", label: "Published research paper" },
  { icon: Boxes, value: "3", label: "Major projects shipped" },
  { icon: Shield, value: "2+", label: "Security research areas" },
  { icon: GraduationCap, value: "2024", label: "BTech CSE graduate" },
];

const COURSEWORK = [
  "Object Oriented Programming",
  "Data Structures & Algorithms",
  "Advanced Data Structures & Algorithms",
  "Databases",
  "Operating Systems",
  "Computer Networks",
  "Machine Learning",
  "Information Retrieval",
  "Image Processing",
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-mono text-sm text-primary">{"// about"}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            Building secure, decentralised software
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            I&apos;m a Computer Science engineer with a deep interest in how
            decentralised systems, applied cryptography, and full-stack web
            development can come together to give people more control over their
            digital lives. My work explores the intersection of{" "}
            <span className="text-foreground">blockchain technology</span> and{" "}
            <span className="text-foreground">practical security</span> — from
            Ethereum-based social platforms to malware detection in open-source
            package repositories.
          </p>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Beyond code, I care about translating complex research into
            shipping products. My paper on decentralised social media was
            published in the International Journal of Innovative Research in
            Computer and Communication Engineering, and I continue to look for
            problems where strong engineering can shift incentives in favour of
            users.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="glass-card h-full">
                <CardContent className="p-4 sm:p-5">
                  <stat.icon className="w-5 h-5 text-primary mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Relevant coursework
          </h3>
          <div className="flex flex-wrap gap-2">
            {COURSEWORK.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 text-sm rounded-md border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
