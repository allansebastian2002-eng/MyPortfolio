"use client";

const SKILL_GROUPS = [
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "ReactJS", "Java", "SQL"],
  },
  {
    title: "Systems & Languages",
    items: ["C", "C++", "Python", "Java", "SQL", "Solidity"],
  },
  {
    title: "Blockchain & Web3",
    items: ["Solidity", "Ethereum", "Smart Contracts", "ReactJS", "Web3"],
  },
  {
    title: "Security & Research",
    items: [
      "Ethical Hacking",
      "Malware Analysis",
      "PyPI Supply Chain",
      "Vulnerability Research",
    ],
  },
  {
    title: "Data & Infrastructure",
    items: ["MySQL", "Cloud Systems", "Database Design"],
  },
  {
    title: "Foundations",
    items: ["DSA", "Operating Systems", "Networks", "ML", "Image Processing"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT — sticky heading (4/12) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">Skills</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
                What I work with.
              </h2>
              <p className="mt-5 text-base text-foreground/70 leading-relaxed max-w-xs font-light">
                From low-level systems programming to smart contracts and
                full-stack frameworks — the tools I reach for when I build.
              </p>
            </div>
          </div>

          {/* RIGHT — editorial definition list (8/12) with white-line dividers */}
          <div className="lg:col-span-8">
            <dl className="divide-y divide-border border-y border-border">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.title}
                  className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 group"
                >
                  <dt className="sm:col-span-4 text-sm font-semibold text-foreground">
                    {group.title}
                  </dt>
                  <dd className="sm:col-span-8 text-sm text-foreground/70 leading-relaxed font-light">
                    {group.items.map((item, i) => (
                      <span key={item}>
                        <span className="transition-colors duration-200 group-hover:text-foreground/90">
                          {item}
                        </span>
                        {i < group.items.length - 1 && (
                          <span className="mx-2 text-border">·</span>
                        )}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
