"use client";

import { useState } from "react";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const CONTACTS = [
  { label: "Email", value: "allansebastian2002@gmail.com", href: "mailto:allansebastian2002@gmail.com" },
  { label: "Phone", value: "+91 86063 19700", href: "tel:+918606319700" },
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

  return (
    <section
      id="contact"
      className="pt-20 sm:pt-24 pb-24 sm:pb-32 scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT — heading + CTA (7/12) */}
          <div className="lg:col-span-7">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95]">
              Let&apos;s build
              <br />
              something<span className="text-accent">.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-foreground/70 leading-relaxed max-w-md font-light">
              Whether it&apos;s a decentralised product, a security research
              collaboration, or a full-stack web project — I&apos;m always
              happy to talk. Drop me a line and I&apos;ll get back to you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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
          </div>

          {/* RIGHT — contact details as clean list (4/12 offset) */}
          <div className="lg:col-span-4 lg:col-start-9">
            <dl className="divide-y divide-border border-y border-border">
              {CONTACTS.map((contact) => {
                const Wrapper = contact.href ? "a" : "div";
                return (
                  <div key={contact.label} className="py-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
