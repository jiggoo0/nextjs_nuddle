"use client";

import { motion } from "framer-motion";
import { ArrowRight, Utensils } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/constants/site-config";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <Utensils className="w-3.5 h-3.5 text-primary" />
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">
            {hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance leading-[1.08]"
        >
          {hero.headlineLine1} <br className="hidden sm:block" />
          <span className="text-primary">{hero.headlineLine2}</span>
        </motion.h1>

        {/* Noodle Image Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-lg mx-auto mb-10 group"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-125 opacity-50 group-hover:opacity-70 transition-opacity" />
          <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/20 shadow-2xl shadow-primary/20 bg-muted/20">
            <Image
              src="/images/hero-noodle.webp"
              alt="บะหมี่เกี๊ยวปู ช.สหชัย"
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -right-4 glass p-4 rounded-xl shadow-xl border border-primary/20 hidden sm:block">
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Signature Dish</div>
            <div className="text-sm font-semibold text-foreground">บะหมี่เกี๊ยวปูหมูแดง</div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance leading-relaxed"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={hero.ctaPrimary.href}
            className="glow-border inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            {hero.ctaPrimary.label}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="inline-flex items-center justify-center gap-2 glass glass-hover px-8 py-3.5 rounded-lg text-sm font-semibold text-foreground tracking-wide transition-all duration-300"
          >
            {hero.ctaSecondary.label}
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto pb-10"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
