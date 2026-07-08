"use client";

import { Code2, Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-border bg-background/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 text-primary">
              <Code2 className="w-4 h-4" />
            </span>
            <span className="font-mono text-sm">
              allan<span className="text-primary">.sebastian</span>
            </span>
          </div>

          <p className="text-xs text-muted-foreground text-center sm:text-right flex items-center gap-1.5">
            © {year} Allan Sebastian · Built with
            <Heart className="w-3 h-3 text-primary fill-primary" />
            using Next.js &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
