"use client";

import { ExternalLink } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

export function Research() {
  return (
    <section
      id="research"
      className="py-16 sm:py-24 scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <ScrollReveal as="div" y={20} duration={0.7} className="max-w-2xl">
          <span className="eyebrow">Research</span>
          <h2 className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
            Published work.
          </h2>
        </ScrollReveal>

        {/* Single featured publication — white-bordered surface */}
        <ScrollReveal as="article" y={32} duration={0.8} delay={0.1} className="mt-6 sm:mt-10 surface rounded-md p-5 sm:p-9 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10">
            {/* Left — citation meta */}
            <div className="lg:col-span-3">
              <p className="eyebrow text-accent mb-3">Published</p>
              <p className="font-mono text-xs text-foreground/70 leading-relaxed">
                IJIRCCE
                <br />
                Vol. 12, Issue 5
                <br />
                May 2024
              </p>
            </div>

            {/* Right — title + abstract */}
            <div className="lg:col-span-9 lg:border-l lg:border-border lg:pl-10">
              <h3 className="font-display text-lg sm:text-2xl lg:text-3xl font-bold tracking-[-0.02em] leading-tight">
                Decentralized Social Media Using Ethereum Blockchain and
                Solidity Smart Contract
              </h3>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-foreground/85 font-light">
                The paper investigates how current centralised social media
                companies harvest personal data and sell it for profit, and
                proposes a decentralised alternative built on the Ethereum
                blockchain. The proposed system uses Solidity smart contracts
                to handle content ownership and tipping without relying on a
                central authority — giving users verifiable control over their
                data and interactions.
              </p>

              <p className="mt-4 text-xs sm:text-sm text-foreground/70 leading-relaxed font-light">
                Published in the{" "}
                <span className="text-foreground font-medium">
                  International Journal of Innovative Research in Computer and
                  Communication Engineering (IJIRCCE)
                </span>
                , Volume 12, Issue 5, May 2024.
              </p>

              <a
                href="https://ijircce.com/admin/main/storage/app/pdf/alLCJQcqcK0Awv80xPlZjPpKXkp5vSTcgGFujqoy.pdf"
                target="_blank"
                rel="noreferrer"
                className="nav-link mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent"
              >
                Read the paper
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
