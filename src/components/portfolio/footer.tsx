export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="font-display text-base font-bold tracking-tight">
            Allan<span className="text-accent">.</span>
          </span>
          <p className="text-xs text-foreground/60 font-mono">
            © {year} Allan Sebastian · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
