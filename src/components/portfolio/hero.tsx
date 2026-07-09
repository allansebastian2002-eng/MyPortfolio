"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowDownRight, Mail } from "lucide-react";

// Register the React hook once
gsap.registerPlugin(useGSAP);

export function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Respect reduced motion — skip all animations
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;

      // Timeline with expo.out — the signature "studio smooth" curve.
      // Slight overlaps create a natural cascade, not a mechanical stagger.
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from("[data-anim='eyebrow']", {
          opacity: 0,
          y: 14,
          duration: 0.7,
        })
        .from(
          "[data-anim='name']",
          { opacity: 0, y: 28, duration: 1.0 },
          "-=0.35"
        )
        .from(
          "[data-anim='role']",
          { opacity: 0, y: 20, duration: 0.8 },
          "-=0.55"
        )
        .from(
          "[data-anim='cta']",
          { opacity: 0, y: 16, duration: 0.7 },
          "-=0.45"
        )
        .from(
          "[data-anim='socials']",
          { opacity: 0, y: 14, duration: 0.6 },
          "-=0.35"
        )
        .from(
          "[data-anim='photo']",
          { opacity: 0, y: 30, duration: 0.9 },
          "-=0.7"
        );
    },
    { scope: container }
  );

  return (
    <section
      id="home"
      ref={container}
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
            <div data-anim="eyebrow">
              <span className="eyebrow">Portfolio — 2024</span>
            </div>

            {/* Name — Space Grotesk display, huge, two lines, yellow period */}
            <h1
              data-anim="name"
              className="mt-5 sm:mt-6 font-display font-bold text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] sm:leading-[0.92] tracking-[-0.03em]"
            >
              Allan
              <br />
              Sebastian<span className="text-accent">.</span>
            </h1>

            {/* Role + location */}
            <p
              data-anim="role"
              className="mt-6 sm:mt-8 text-base sm:text-xl text-foreground/80 leading-relaxed max-w-xl font-light"
            >
              Blockchain &amp; web developer building decentralised systems,
              smart contracts, and full-stack applications from Kerala, India.
            </p>

            {/* CTAs — primary solid white (inverts to blue on hover), secondary white-outline */}
            <div
              data-anim="cta"
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
            </div>

            {/* Socials — restrained, small, with white-line separators */}
            <div
              data-anim="socials"
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
                href="https://www.linkedin.com/in/allan-sebastian"
                target="_blank"
                rel="noreferrer"
                className="nav-link hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT — photo column (5/12). Centered on mobile, offset down on desktop. */}
          <div
            data-anim="photo"
            className="lg:col-span-5 flex justify-center lg:justify-end lg:mt-20"
          >
            <ProfilePhoto />
          </div>
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
