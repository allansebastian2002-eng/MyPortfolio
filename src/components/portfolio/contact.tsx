"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "allansebastian2002@gmail.com",
    href: "mailto:allansebastian2002@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 86063 19700",
    href: "tel:+918606319700",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kerala, India",
    href: undefined,
  },
];

export function Contact() {
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("allansebastian2002@gmail.com");
      toast.success("Email copied to clipboard", {
        description: "allansebastian2002@gmail.com",
      });
    } catch {
      toast.error("Couldn't copy email");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-mono text-sm text-primary">{"// contact"}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            Let&apos;s build something
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Whether it&apos;s a decentralised product, a security research
            collaboration, or a full-stack web project — I&apos;m always happy
            to talk. Drop me a line and I&apos;ll get back to you.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Contact info cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CONTACTS.map((contact, i) => {
              const Wrapper = contact.href ? "a" : "div";
              return (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Card
                    className={`glass-card h-full ${
                      contact.href
                        ? "group hover:-translate-y-1 transition-transform"
                        : ""
                    }`}
                  >
                    <CardContent className="p-5">
                      <Wrapper
                        {...(contact.href ? { href: contact.href } : {})}
                        {...(contact.href?.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="block"
                      >
                        <contact.icon className="w-5 h-5 text-primary mb-3" />
                        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                          {contact.label}
                        </div>
                        <div className="text-sm font-medium break-words flex items-start justify-between gap-2">
                          <span>{contact.value}</span>
                          {contact.href && (
                            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all shrink-0 mt-0.5" />
                          )}
                        </div>
                      </Wrapper>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="glass-card h-full bg-gradient-to-br from-primary/10 via-card/40 to-card/40 border-primary/20">
              <CardContent className="p-6 sm:p-7 h-full flex flex-col">
                <h3 className="text-lg font-semibold">Reach out directly</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  Prefer email? Copy my address and write to me — I usually
                  respond within a day or two.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button
                    onClick={handleCopyEmail}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Copy email
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                  >
                    <a href="mailto:allansebastian2002@gmail.com">
                      <Send className="w-4 h-4" />
                      Send a message
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
