"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, Mail, ArrowDown } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* Split text into individual letter spans. Each is inline-block so GSAP
   can transform it independently without breaking the text flow. */
function splitToLetters(text: string, keyPrefix: string) {
  return text.split("").map((char, i) => (
    <span
      key={`${keyPrefix}-${i}`}
      className="hero-letter inline-block"
      style={{ willChange: "transform, opacity" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

export function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const letters =
        gsap.utils.toArray<HTMLElement>(".hero-letter");

      if (reduce) {
        // Show everything normally — no scatter, no pin
        gsap.set(letters, { opacity: 1 });
        gsap.set(
          ".hero-eyebrow, .hero-role, .hero-cta, .hero-socials, .hero-photo",
          { opacity: 1, y: 0 }
        );
        return;
      }

      // ── Phase 1: Scatter letters to random positions ──
      // Runs before paint (useGSAP = layout effect), so no flash.
      // The loading screen covers this period anyway (2s).
      // Letters are VISIBLE (opacity 0.9) so the user can see them scattered.
      // Scatter is clamped per-letter so none go off-screen.
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const margin = 60; // px margin from viewport edges

      letters.forEach((letter) => {
        // Get the letter's home position (where it sits in normal flow)
        const homeRect = letter.getBoundingClientRect();
        const homeX = homeRect.left;
        const homeY = homeRect.top;

        // Calculate max scatter that keeps the letter on screen
        const maxLeft = homeX - margin; // how far left we can go
        const maxRight = vw - homeX - homeRect.width - margin; // how far right
        const maxUp = homeY - margin; // how far up
        const maxDown = vh - homeY - homeRect.height - margin; // how far down

        // Random scatter within the safe range (at least ±50px so it moves)
        const scatterX = gsap.utils.random(
          -Math.max(50, maxLeft),
          Math.max(50, maxRight)
        );
        const scatterY = gsap.utils.random(
          -Math.max(50, maxUp),
          Math.max(50, maxDown)
        );
        const scatterRot = (Math.random() - 0.5) * 45;

        gsap.set(letter, {
          x: scatterX,
          y: scatterY,
          rotation: scatterRot,
          opacity: 0.9,
        });
      });

      // Hide other hero elements until letters assemble
      const others = gsap.utils.toArray<HTMLElement>(
        ".hero-eyebrow, .hero-role, .hero-cta, .hero-socials, .hero-photo"
      );
      gsap.set(others, { opacity: 0, y: 20 });

      // ── Phase 2: Scroll-triggered assembly ──
      // Pin the hero so it stays fixed while letters fly into place.
      // Timeline is scrubbed to scroll position — user controls the speed.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=500",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });

      // Letters fly to home position (x:0, y:0, rotation:0) with a
      // slight stagger so they arrive in a wave, not all at once.
      tl.to(letters, {
        x: 0,
        y: 0,
        rotation: 0,
        stagger: 0.012,
        ease: "expo.out",
        duration: 0.55,
      });

      // Other elements fade in after letters are mostly assembled
      tl.to(
        others,
        {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          ease: "expo.out",
          duration: 0.35,
        },
        "-=0.15"
      );

      // Scroll hint fades out as user scrolls
      gsap.to(".hero-scroll-hint", {
        opacity: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=150",
          scrub: true,
        },
      });
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
            <path d="M0.5,0 C0.66,0 0.78,0.01 0.86,0.05 C0.94,0.09 0.97,0.15 0.99,0.25 C1,0.35 1,0.65 0.99,0.75 C0.97,0.85 0.94,0.91 0.86,0.95 C0.78,0.99 0.66,1 0.5,1 C0.34,1 0.22,0.99 0.14,0.95 C0.06,0.91 0.03,0.85 0.01,0.75 C0,0.65 0,0.35 0.01,0.25 C0.03,0.15 0.06,0.09 0.14,0.05 C0.22,0.01 0.34,0 0.5,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* LEFT — text column (7/12) */}
          <div className="lg:col-span-7 lg:pt-4">
            <div className="hero-eyebrow">
              <span className="eyebrow">Portfolio — 2024</span>
            </div>

            {/* Name — each letter is a span that GSAP scatters & assembles */}
            <h1 className="mt-5 sm:mt-6 font-display font-bold text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] sm:leading-[0.92] tracking-[-0.03em]">
              {splitToLetters("Allan", "line1")}
              <br />
              {splitToLetters("Sebastian", "line2")}
              <span className="text-accent hero-letter inline-block">.</span>
            </h1>

            {/* Role + location */}
            <p className="hero-role mt-6 sm:mt-8 text-base sm:text-xl text-foreground/80 leading-relaxed max-w-xl font-light">
              Blockchain &amp; web developer building decentralised systems,
              smart contracts, and full-stack applications from Kerala, India.
            </p>

            {/* CTAs */}
            <div className="hero-cta mt-7 sm:mt-9 flex flex-wrap items-center gap-3">
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

            {/* Socials */}
            <div className="hero-socials mt-8 sm:mt-10 flex items-center gap-4 sm:gap-5 text-sm text-foreground/70">
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
          <div className="hero-photo lg:col-span-5 flex justify-center lg:justify-end lg:mt-20">
            <ProfilePhoto />
          </div>
        </div>
      </div>

      {/* Scroll hint — visible with scattered letters, fades on scroll */}
      <div className="hero-scroll-hint absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 pointer-events-none">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ArrowDown className="w-3 h-3 animate-bounce" />
      </div>
    </section>
  );
}

/* Profile photo in a squircle frame with 1px white border. */
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
