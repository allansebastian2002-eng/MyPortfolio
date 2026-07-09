"use client";

import { useState, useEffect, useCallback } from "react";
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
  // Always initialize to 0 (matches server render) to avoid hydration mismatch.
  // The inline script in layout.tsx already applied the saved brightness to
  // CSS vars before paint, so the page looks correct immediately. We just
  // need to sync the slider thumb position after mount.
  const [brightness, setBrightness] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Read saved brightness after mount — this is the documented React pattern
  // for localStorage. The eslint rule is overly strict here.
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    const stored = localStorage.getItem("brightness");
    const initial = stored !== null ? Number(stored) : 0;
    if (initial !== 0) {
      setBrightness(initial);
    }
    setMounted(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const handleChange = useCallback((value: number) => {
    setBrightness(value);
    applyBrightness(value);
    localStorage.setItem("brightness", String(value));
  }, []);

  // Don't render the slider until mounted — prevents any hydration mismatch
  // on the input's value attribute.
  if (!mounted) {
    return (
      <div className="fixed bottom-5 right-5 z-50 h-9 w-[150px]" aria-hidden />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-2 surface rounded-full"
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
        suppressHydrationWarning
      />
      <Sun
        className={`w-4 h-4 transition-colors ${
          brightness >= 50 ? "text-accent" : "text-foreground/40"
        }`}
      />
    </motion.div>
  );
}
