"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Ease-out fill — fast at start, slows near the end
        const remaining = 100 - p;
        return Math.min(100, p + Math.max(1, remaining * 0.08));
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="fixed inset-0 z-[100] grid place-items-center bg-background"
    >
      <div className="flex flex-col items-center gap-7">
        {/* Monogram in square frame — matches the hero photo frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="w-20 h-20 border border-border grid place-items-center"
        >
          <span className="font-display text-3xl font-bold text-foreground">
            AS
          </span>
        </motion.div>

        {/* Name in mono — small, tracked */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4, ease: EASE }}
          className="font-mono text-[11px] text-foreground/60 tracking-[0.22em] uppercase"
        >
          Allan Sebastian
        </motion.p>

        {/* Progress bar — thin, fills with ease-out */}
        <div className="w-44 h-px bg-border overflow-hidden">
          <motion.div
            className="h-full bg-foreground"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage counter */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="font-mono text-[10px] text-foreground/40 tracking-wider"
        >
          {String(Math.round(progress)).padStart(3, "0")}
        </motion.span>
      </div>
    </motion.div>
  );
}
