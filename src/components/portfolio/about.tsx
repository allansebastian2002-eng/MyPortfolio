"use client";

const STATS = [
  { value: "1", label: "Published paper" },
  { value: "3", label: "Major projects shipped" },
  { value: "2+", label: "Security research areas" },
  { value: "2024", label: "BTech CSE, graduated" },
];

const COURSEWORK = [
  "Object Oriented Programming",
  "Data Structures & Algorithms",
  "Advanced DSA",
  "Databases",
  "Operating Systems",
  "Computer Networks",
  "Machine Learning",
  "Information Retrieval",
  "Image Processing",
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <span className="eyebrow">About</span>
          <h2 className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
            Building secure, decentralised software.
          </h2>
        </div>

        {/* Asymmetric two-column — bio left, stats right */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16">
          {/* LEFT — bio (7/12) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <p className="text-sm sm:text-lg leading-relaxed text-foreground/90 font-light">
              I&apos;m a computer science engineer with a deep interest in how
              decentralised systems, applied cryptography, and full-stack web
              development can come together to give people more control over
              their digital lives. My work explores the intersection of{" "}
              <span className="text-foreground font-medium">blockchain</span>{" "}
              and{" "}
              <span className="text-foreground font-medium">
                practical security
              </span>{" "}
              — from Ethereum-based social platforms to malware detection in
              open-source package repositories.
            </p>
            <p className="text-sm sm:text-lg leading-relaxed text-foreground/70 font-light">
              Beyond code, I care about translating research into shipping
              products. My paper on decentralised social media was published in
              IJIRCCE, and I continue to look for problems where strong
              engineering can shift incentives in favour of users.
            </p>

            {/* Coursework — inline tags with white-line separators */}
            <div className="pt-2 sm:pt-4">
              <p className="eyebrow mb-3">Relevant coursework</p>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs sm:text-sm text-foreground/70 font-light">
                {COURSEWORK.map((c, i) => (
                  <span key={c} className="flex items-center gap-3">
                    {c}
                    {i < COURSEWORK.length - 1 && (
                      <span className="text-border">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — stats (4/12 offset), grid with white-line dividers */}
          <div className="lg:col-span-4 lg:col-start-9 lg:mt-2">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-px bg-border border border-border">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-background p-4 sm:p-6">
                  <div className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-foreground/60 font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
