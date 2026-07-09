"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * ScrollReveal — wraps children and fades/slides them into view once
 * when they enter the viewport. Uses GSAP ScrollTrigger with expo.out.
 *
 * Props:
 * - as: element type (default "div")
 * - y: vertical offset in px (default 24)
 * - duration: seconds (default 0.7)
 * - delay: seconds (default 0)
 * - stagger: if >0, staggers direct children (default 0)
 * - once: only animate the first time (default true)
 */
type ScrollRevealProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export function ScrollReveal({
  children,
  as: Tag = "div",
  y = 24,
  duration = 0.7,
  delay = 0,
  stagger = 0,
  once = true,
  className,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;

      const target = stagger > 0
        ? (ref.current?.children as HTMLCollection)
        : ref.current;

      if (!target) return;

      gsap.from(target, {
        opacity: 0,
        y,
        duration,
        delay,
        stagger,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
        },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
