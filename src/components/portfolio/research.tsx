"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink, BookMarked } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Research() {
  return (
    <section
      id="research"
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
          <span className="font-mono text-sm text-primary">{"// research"}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            Published research
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Turning hands-on engineering into peer-reviewed contributions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon column */}
                <div className="shrink-0">
                  <span className="grid place-items-center w-14 h-14 rounded-xl bg-primary/15 border border-primary/25 text-primary">
                    <FileText className="w-6 h-6" />
                  </span>
                </div>

                {/* Content column */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge
                      variant="outline"
                      className="border-primary/30 bg-primary/5 text-primary gap-1"
                    >
                      <BookMarked className="w-3 h-3" />
                      Published
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground">
                      IJIRCCE · Vol. 12, Issue 5 · May 2024
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight">
                    Decentralized Social Media Using Ethereum Blockchain and
                    Solidity Smart Contract
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    The paper investigates how current centralised social media
                    companies harvest personal data and sell it for profit, and
                    proposes a decentralised alternative built on the Ethereum
                    blockchain. The proposed system uses Solidity smart
                    contracts to handle content ownership and tipping without
                    relying on a central authority — giving users verifiable
                    control over their data and interactions.
                  </p>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    Published in the{" "}
                    <span className="text-foreground">
                      International Journal of Innovative Research in Computer
                      and Communication Engineering (IJIRCCE)
                    </span>
                    , Volume 12, Issue 5, May 2024.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://www.ijircce.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      View journal
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
