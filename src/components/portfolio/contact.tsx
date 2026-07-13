"use client";

import { useState } from "react";
import { Copy, Check, ArrowUpRight, FileText, FileImage, Download } from "lucide-react";
import { toast } from "sonner";
import { ScrollReveal } from "./scroll-reveal";

const CONTACTS = [
  { label: "Email", value: "allansebastian2002@gmail.com", href: "mailto:allansebastian2002@gmail.com" },
  { label: "Phone", value: "+91 86063 19700", href: "tel:+918606319700" },
  { label: "LinkedIn", value: "in/allan-sebastian-827765296", href: "https://www.linkedin.com/in/allan-sebastian-827765296" },
  { label: "GitHub", value: "allansebastian2002-eng", href: "https://github.com/allansebastian2002-eng" },
  { label: "Location", value: "Kerala, India", href: undefined },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("allansebastian2002@gmail.com");
      setCopied(true);
      toast.success("Email copied", {
        description: "allansebastian2002@gmail.com",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy email");
    }
  };

  const handleDownload = (type: "ats" | "infographic") => {
    const path =
      type === "ats"
        ? "/resumes/allan-sebastian-ats-resume.pdf"
        : "/resumes/allan-sebastian-infographic-resume.pdf";
    const label = type === "ats" ? "ATS resume" : "Infographic resume";
    toast.success(`${label} downloading`, {
      description: type === "ats" ? "ATS-friendly · 2 pages · PDF" : "Visual design · 1 page · PDF",
    });
    // Trigger download via anchor click
    const a = document.createElement("a");
    a.href = path;
    a.download = path.split("/").pop() || "";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section
      id="contact"
      className="pt-16 sm:pt-24 pb-20 sm:pb-32 scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16">
          {/* LEFT — heading + CTA (7/12) */}
          <ScrollReveal as="div" y={28} duration={0.8} className="lg:col-span-7">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95]">
              Let&apos;s build
              <br />
              something<span className="text-accent">.</span>
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-lg text-foreground/70 leading-relaxed max-w-md font-light">
              Whether it&apos;s a decentralised product, a security research
              collaboration, or a full-stack web project — I&apos;m always
              happy to talk. Drop me a line and I&apos;ll get back to you.
            </p>

            {/* Primary CTAs — email + copy */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:allansebastian2002@gmail.com"
                className="inverse-hover group inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-semibold rounded-md border border-foreground"
              >
                <span className="invert-text">Send a message</span>
                <ArrowUpRight className="w-4 h-4 invert-text transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-semibold rounded-md text-foreground transition-colors duration-200 hover:border-foreground"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-accent" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>

            {/* Resume downloads — separate group with its own label */}
            <div className="mt-8 sm:mt-10">
              <p className="eyebrow mb-3">Download resume</p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleDownload("ats")}
                  className="inverse-hover group inline-flex items-center gap-2.5 px-4 py-2.5 bg-foreground text-background text-sm font-semibold rounded-md border border-foreground"
                >
                  <FileText className="w-4 h-4 invert-text" />
                  <span className="invert-text">ATS Resume</span>
                  <Download className="w-3.5 h-3.5 invert-text opacity-60 transition-opacity group-hover:opacity-100" />
                </button>
                <button
                  onClick={() => handleDownload("infographic")}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-border text-sm font-semibold rounded-md text-foreground transition-colors duration-200 hover:border-foreground"
                >
                  <FileImage className="w-4 h-4" />
                  <span>Infographic Resume</span>
                  <Download className="w-3.5 h-3.5 opacity-60 transition-opacity group-hover:opacity-100" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — contact details as clean list (4/12 offset) */}
          <ScrollReveal as="div" y={24} duration={0.7} delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <dl className="divide-y divide-border border-y border-border">
              {CONTACTS.map((contact) => {
                const Wrapper = contact.href ? "a" : "div";
                return (
                  <div key={contact.label} className="py-3 sm:py-4">
                    <dt className="eyebrow mb-1">{contact.label}</dt>
                    <dd className="text-sm text-foreground break-words">
                      <Wrapper
                        {...(contact.href ? { href: contact.href } : {})}
                        {...(contact.href?.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className={
                          contact.href
                            ? "nav-link hover:text-accent transition-colors"
                            : ""
                        }
                      >
                        {contact.value}
                      </Wrapper>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
