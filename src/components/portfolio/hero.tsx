"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Mail } from "lucide-react";

// Expo-out easing — the "studio" curve, not the default ease-in-out
const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  // Gate animations on mount to prevent hydration mismatch.
  // Server and first client render: no initial styles (final state).
  // After mount: play the entrance animation.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setMounted(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  // Before mount OR when reduced motion: render at final state, no animation.
  // After mount (and motion allowed): play staggered entrance.
  const fade = (delay: number) => {
    if (!mounted || reduceMotion) {
      return { initial: false, animate: { opacity: 1, y: 0 } };
    }
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, ease: EASE, delay },
    };
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-28 min-h-screen flex items-center"
    >
      {/* SVG squircle clip-path definition — used by the profile photo */}
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath
            id="squircle-clip"
            clipPathUnits="objectBoundingBox"
          >
            {/* iOS-style squircle (superellipse) path, normalized 0-1 */}
            <path d="M0.5,0 C0.66,0 0.78,0.01 0.86,0.05 C0.94,0.09 0.97,0.15 0.99,0.25 C1,0.35 1,0.65 0.99,0.75 C0.97,0.85 0.94,0.91 0.86,0.95 C0.78,0.99 0.66,1 0.5,1 C0.34,1 0.22,0.99 0.14,0.95 C0.06,0.91 0.03,0.85 0.01,0.75 C0,0.65 0,0.35 0.01,0.25 C0.03,0.15 0.06,0.09 0.14,0.05 C0.22,0.01 0.34,0 0.5,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* LEFT — text column (7/12) */}
          <div className="lg:col-span-7 lg:pt-4">
            <motion.div {...fade(0)}>
              <span className="eyebrow">Portfolio — 2024</span>
            </motion.div>

            {/* Name — Space Grotesk display, huge, two lines, yellow period */}
            <motion.h1
              {...fade(0.08)}
              className="mt-5 sm:mt-6 font-display font-bold text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] sm:leading-[0.92] tracking-[-0.03em]"
            >
              Allan
              <br />
              Sebastian<span className="text-accent">.</span>
            </motion.h1>

            {/* Role + location */}
            <motion.p
              {...fade(0.18)}
              className="mt-6 sm:mt-8 text-base sm:text-xl text-foreground/80 leading-relaxed max-w-xl font-light"
            >
              Blockchain &amp; web developer building decentralised systems,
              smart contracts, and full-stack applications from Kerala, India.
            </motion.p>

            {/* CTAs — primary solid white (inverts to blue on hover), secondary white-outline */}
            <motion.div
              {...fade(0.28)}
              className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3"
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
              className="mt-8 sm:mt-10 flex items-center gap-4 sm:gap-5 text-sm text-foreground/70"
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

          {/* RIGHT — photo column (5/12). Centered on mobile, offset down on desktop. */}
          <motion.div
            {...fade(0.2)}
            className="lg:col-span-5 flex justify-center lg:justify-end lg:mt-20"
          >
            <ProfilePhoto />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Profile photo in a squircle frame with 1px white border.
   Uses object-cover so the portrait photo crops nicely to fill the squircle.
   The blue duotone overlay (multiply blend) ties the warm-toned photo
   into the site's blue palette — without making it look artificially tinted. */
function ProfilePhoto() {
  return (
    <div
      className="relative w-40 h-40 sm:w-64 sm:h-64 lg:w-72 lg:h-72 border border-border overflow-hidden"
      style={{ clipPath: "url(#squircle-clip)" }}
    >
      <img
        src="/allan.jpg"
        alt="Allan Sebastian"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Subtle blue duotone overlay — multiply blend pushes the photo's
          warm tones toward the site palette without desaturating it. */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.36 0.2 264 / 0.25), oklch(0.36 0.2 264 / 0.1))",
        }}
      />
    </div>
  );
}
