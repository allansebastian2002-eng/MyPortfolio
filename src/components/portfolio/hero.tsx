"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Mail } from "lucide-react";

// Expo-out easing — the "studio" curve, not the default ease-in-out
const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  // When reduced motion is preferred, render everything visible with no transform
  const fade = (delay: number) =>
    reduceMotion
      ? { initial: false, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: EASE, delay },
        };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT — text column (7/12) */}
          <div className="lg:col-span-7 lg:pt-4">
            <motion.div {...fade(0)}>
              <span className="eyebrow">Portfolio — 2024</span>
            </motion.div>

            {/* Name — Fraunces serif, two lines, terracotta period as the single accent mark */}
            <motion.h1
              {...fade(0.08)}
              className="mt-6 font-serif font-medium text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
            >
              Allan
              <br />
              Sebastian<span className="text-primary">.</span>
            </motion.h1>

            {/* Role + location */}
            <motion.p
              {...fade(0.18)}
              className="mt-7 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Blockchain &amp; web developer building decentralised systems,
              smart contracts, and full-stack applications from Kerala, India.
            </motion.p>

            {/* CTAs — primary solid terracotta, secondary ghost outline */}
            <motion.div
              {...fade(0.28)}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_rgba(184,132,90,0.5)]"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                See the work
                <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium rounded-md text-foreground transition-colors duration-200 hover:border-foreground/40 hover:bg-foreground/[0.03]"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </button>
            </motion.div>

            {/* Socials — restrained, small, neutral */}
            <motion.div
              {...fade(0.36)}
              className="mt-10 flex items-center gap-5 text-sm text-muted-foreground"
            >
              <a
                href="mailto:allansebastian2002@gmail.com"
                className="nav-link hover:text-foreground transition-colors"
              >
                Email
              </a>
              <span className="w-px h-3 bg-border" />
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="nav-link hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <span className="w-px h-3 bg-border" />
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="nav-link hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* RIGHT — photo column (5/12), offset down to break symmetry */}
          <motion.div
            {...fade(0.2)}
            className="lg:col-span-5 lg:mt-20 flex justify-center lg:justify-end"
          >
            <ProfilePhoto />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Soft-rounded-square profile photo with thin neutral border + soft flat shadow.
   No glow ring, no blur. Replace the monogram with a real photo by dropping an
   image into /public/ and swapping the JSX below for <img src="/allan.jpg" ... />. */
function ProfilePhoto() {
  return (
    <div
      className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-xl bg-card border border-border overflow-hidden shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)]"
      style={{ borderRadius: "14px" }}
    >
      {/* Monogram placeholder — replace with <img /> when a real photo is available */}
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-serif text-7xl text-primary/80 select-none">
          AS
        </span>
      </div>
      {/* Subtle warm tint to make the placeholder feel intentional */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 80% at 30% 20%, oklch(0.62 0.09 55 / 0.08), transparent 60%)",
        }}
      />
    </div>
  );
}
