"use client";

import { ExternalLink } from "lucide-react";

export function Research() {
  return (
    <section
      id="research"
      className="py-20 sm:py-24 scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <span className="eyebrow">Research</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium tracking-tight">
            Published work.
          </h2>
        </div>

        {/* Single featured publication — solid surface, no glass */}
        <article className="mt-10 surface rounded-lg p-7 sm:p-9 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Left — citation meta */}
            <div className="lg:col-span-3">
              <p className="eyebrow text-primary mb-3">Published</p>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                IJIRCCE
                <br />
                Vol. 12, Issue 5
                <br />
                May 2024
              </p>
            </div>

            {/* Right — title + abstract */}
            <div className="lg:col-span-9 lg:border-l lg:border-border lg:pl-10">
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-tight">
                Decentralized Social Media Using Ethereum Blockchain and
                Solidity Smart Contract
              </h3>

              <p className="mt-5 text-base leading-relaxed text-foreground/85">
                The paper investigates how current centralised social media
                companies harvest personal data and sell it for profit, and
                proposes a decentralised alternative built on the Ethereum
                blockchain. The proposed system uses Solidity smart contracts
                to handle content ownership and tipping without relying on a
                central authority — giving users verifiable control over their
                data and interactions.
              </p>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Published in the{" "}
                <span className="text-foreground">
                  International Journal of Innovative Research in Computer and
                  Communication Engineering (IJIRCCE)
                </span>
                , Volume 12, Issue 5, May 2024.
              </p>

              <a
                href="https://www.ijircce.com/"
                target="_blank"
                rel="noreferrer"
                className="nav-link mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary"
              >
                View journal
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
