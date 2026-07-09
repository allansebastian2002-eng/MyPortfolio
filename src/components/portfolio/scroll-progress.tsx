"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* Thin progress bar at the very top of the viewport.
   Fills with the accent (yellow) color as the user scrolls down.
   Fixed position, 2px tall, sits above the navbar. */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;

      gsap.to(bar.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: "max",
          scrub: 0.3,
        },
      });
    },
    { scope: bar }
  );

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 pointer-events-none"
      aria-hidden
    >
      <div
        ref={bar}
        className="h-full bg-accent origin-left"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
