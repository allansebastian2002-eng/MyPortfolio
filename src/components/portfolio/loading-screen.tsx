"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

const EASE = "expo.out";

export function LoadingScreen() {
  const container = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Animate the progress bar with GSAP — smoother than setInterval + state
  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduce) {
        gsap.set(progressRef.current, { width: "100%" });
        return;
      }

      // Ease-out fill — fast at start, decelerates near the end
      gsap.fromTo(
        progressRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: 1.4,
          ease: EASE,
        }
      );

      // Subtle scale-in for the monogram frame
      gsap.from(container.current?.querySelector(".ls-monogram") || null, {
        scale: 0.92,
        opacity: 0,
        duration: 0.6,
        ease: EASE,
      });

      // Fade-in for the name label
      gsap.from(container.current?.querySelector(".ls-name") || null, {
        opacity: 0,
        y: 8,
        duration: 0.5,
        ease: EASE,
        delay: 0.2,
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[100] grid place-items-center bg-background"
      style={{
        animation: "ls-fade-out 0.5s cubic-bezier(0.16,1,0.3,1) 1.5s forwards",
      }}
    >
      <style>{`
        @keyframes ls-fade-out {
          to { opacity: 0; pointer-events: none; }
        }
      `}</style>
      <div className="flex flex-col items-center gap-7">
        {/* Monogram in square frame */}
        <div className="ls-monogram w-20 h-20 border border-border grid place-items-center">
          <span className="font-display text-3xl font-bold text-foreground">
            AS
          </span>
        </div>

        {/* Name in mono — small, tracked */}
        <p className="ls-name font-mono text-[11px] text-foreground/60 tracking-[0.22em] uppercase">
          Allan Sebastian
        </p>

        {/* Progress bar — GSAP animates the width */}
        <div className="w-44 h-px bg-border overflow-hidden">
          <div ref={progressRef} className="h-full bg-foreground" style={{ width: "0%" }} />
        </div>

        {/* Percentage counter — follows the GSAP progress */}
        <PercentageCounter />
      </div>
    </div>
  );
}

/* Small counter that follows the progress bar timing.
   Uses CSS animation synced to the GSAP duration. */
function PercentageCounter() {
  return (
    <span
      className="font-mono text-[10px] text-foreground/40 tracking-wider"
      style={{
        animation: "ls-count 1.4s cubic-bezier(0.16,1,0.3,1) forwards",
      }}
    >
      <style>{`
        @keyframes ls-count {
          0% { content: "000"; }
          100% { content: "100"; }
        }
      `}</style>
      100
    </span>
  );
}
