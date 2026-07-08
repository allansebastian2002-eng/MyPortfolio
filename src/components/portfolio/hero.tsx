"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Mail } from "lucide-react";

// Expo-out easing — the "studio" curve, not the default ease-in-out
const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

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

            {/* Name — Space Grotesk display, huge, two lines, yellow period */}
            <motion.h1
              {...fade(0.08)}
              className="mt-6 font-display font-bold text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.92] tracking-[-0.03em]"
            >
              Allan
              <br />
              Sebastian<span className="text-accent">.</span>
            </motion.h1>

            {/* Role + location */}
            <motion.p
              {...fade(0.18)}
              className="mt-8 text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-xl font-light"
            >
              Blockchain &amp; web developer building decentralised systems,
              smart contracts, and full-stack applications from Kerala, India.
            </motion.p>

            {/* CTAs — primary solid white (inverts to blue on hover), secondary white-outline */}
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
                className="inverse-hover group inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-semibold rounded-md border border-foreground"
              >
                <span className="invert-text">See the work</span>
                <ArrowDownRight className="w-4 h-4 invert-text transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-semibold rounded-md text-foreground transition-colors duration-200 hover:border-foreground"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </button>
            </motion.div>

            {/* Socials — restrained, small, with white-line separators */}
            <motion.div
              {...fade(0.36)}
              className="mt-10 flex items-center gap-5 text-sm text-foreground/70"
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

/* Square profile photo frame with 1px white border.
   Replace the monogram with a real photo by dropping an image into /public/
   and swapping the JSX below for <img src="/allan.jpg" ... />. */
function ProfilePhoto() {
  return (
    <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 border border-border overflow-hidden">
      {/* Monogram placeholder — replace with <img /> when a real photo is available */}
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-7xl font-bold text-foreground/90 select-none">
          AS
        </span>
      </div>
    </div>
  );
}
