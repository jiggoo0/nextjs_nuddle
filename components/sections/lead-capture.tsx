"use client";

import type React from "react";
import { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "@/constants/site-config";

export function LeadCaptureSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { leadCapture } = siteConfig;

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const company = form.get("company") as string;

    if (!name || name.trim().length < 2) errs.name = "Name is required.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Valid email is required.";
    if (!company || company.trim().length < 2)
      errs.company = "Company is required.";

    return errs;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("success");
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase">
              {leadCapture.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4 tracking-tight">
              {leadCapture.title}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {leadCapture.description}
            </p>
          </div>

          {status === "success" ? (
            <div className="glass rounded-xl p-10 text-center">
              <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                {leadCapture.successTitle}
              </h3>
              <p className="text-muted-foreground text-sm">
                {leadCapture.successDescription}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass rounded-xl p-8 flex flex-col gap-5"
              noValidate
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground tracking-wide"
                >
                  {leadCapture.fields.name.label}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={leadCapture.fields.name.placeholder}
                  className="bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
                {errors.name && (
                  <p className="text-xs text-destructive flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground tracking-wide"
                >
                  {leadCapture.fields.email.label}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={leadCapture.fields.email.placeholder}
                  className="bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
                {errors.email && (
                  <p className="text-xs text-destructive flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-foreground tracking-wide"
                >
                  {leadCapture.fields.company.label}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder={leadCapture.fields.company.placeholder}
                  className="bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
                {errors.company && (
                  <p className="text-xs text-destructive flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3 h-3" /> {errors.company}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="glow-border mt-2 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <Send className="w-4 h-4" />
                {leadCapture.buttonText}
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
