"use client";

import { useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

/* Interpolate oklch color values between dark (t=0) and light (t=1) endpoints.
   - Background: deep blue → near-white with faint blue tint
   - Foreground: pure white → deep blue
   - Muted-foreground: white@85% → medium blue
   Hue stays at 264 (blue) throughout; only L and C change. */
function applyBrightness(brightness: number) {
  const t = brightness / 100;
  const bgL = 0.36 + 0.59 * t;
  const bgC = 0.2 - 0.185 * t;
  const fgL = 1.0 - 0.7 * t;
  const fgC = 0.22 * t;
  const mL = 0.85 - 0.35 * t;
  const mC = 0.15 * t;

  const r = document.documentElement;
  r.style.setProperty("--background", `oklch(${bgL} ${bgC} 264)`);
  r.style.setProperty("--foreground", `oklch(${fgL} ${fgC} 264)`);
  r.style.setProperty("--card", `oklch(${bgL} ${bgC} 264)`);
  r.style.setProperty("--popover", `oklch(${bgL} ${bgC} 264)`);
  r.style.setProperty("--primary", `oklch(${fgL} ${fgC} 264)`);
  r.style.setProperty("--primary-foreground", `oklch(${bgL} ${bgC} 264)`);
  r.style.setProperty("--secondary", `oklch(${bgL + 0.04} ${bgC} 264)`);
  r.style.setProperty("--muted", `oklch(${bgL + 0.04} ${bgC} 264)`);
  r.style.setProperty("--muted-foreground", `oklch(${mL} ${mC} 264)`);
  r.style.setProperty("--border", `oklch(${fgL} ${fgC} 264 / 0.32)`);
  r.style.setProperty("--input", `oklch(${fgL} ${fgC} 264 / 0.35)`);
  r.style.setProperty("--ring", `oklch(${fgL} ${fgC} 264)`);
}

export function BrightnessSlider() {
  // Lazy init from localStorage — the inline script in layout.tsx already
  // applied the CSS vars before paint, so we just need the slider thumb
  // position to match.
  const [brightness, setBrightness] = useState(() => {
    if (typeof window === "undefined") return 0;
    const stored = localStorage.getItem("brightness");
    return stored !== null ? Number(stored) : 0;
  });

  const handleChange = useCallback((value: number) => {
    setBrightness(value);
    applyBrightness(value);
    localStorage.setItem("brightness", String(value));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-3.5 py-2 surface rounded-full"
      style={{
        background:
          "color-mix(in oklch, var(--background) 88%, transparent)",
      }}
    >
      <Moon
        className={`w-3.5 h-3.5 transition-colors ${
          brightness < 50 ? "text-foreground" : "text-foreground/40"
        }`}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={brightness}
        onChange={(e) => handleChange(Number(e.target.value))}
        className="brightness-range"
        aria-label="Adjust brightness"
      />
      <Sun
        className={`w-4 h-4 transition-colors ${
          brightness >= 50 ? "text-accent" : "text-foreground/40"
        }`}
      />
    </motion.div>
  );
}
