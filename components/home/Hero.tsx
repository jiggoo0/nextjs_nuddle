"use client";

import { motion } from "framer-motion";
import { Utensils, Heart, ChevronDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/constants/site-config";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Background Story Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/founders-warmth.webp"
          alt="เบื้องหลังความอร่อย ช.สหชัย"
          fill
          className="object-cover opacity-20 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-primary/5 rounded-full px-6 py-2 mb-8 border border-primary/10"
        >
          <Heart className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
            {hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.95]"
        >
          {hero.headlineLine1} <br />
          <span className="text-primary italic font-serif">
            {hero.headlineLine2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#menu"
            className="group relative inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-[2rem] text-lg font-bold shadow-2xl shadow-primary/30 hover:bg-primary/90 transition-all hover:-translate-y-1 active:scale-95"
          >
            <Utensils className="w-5 h-5 transition-transform group-hover:rotate-12" />
            ลิ้มลองความอร่อย
          </a>
          <a
            href="#contact"
            className="text-foreground font-bold hover:text-primary transition-colors flex items-center gap-2"
          >
            เส้นทางมาร้าน <ChevronDown className="w-4 h-4 animate-bounce mt-1" />
          </a>
        </motion.div>

        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 top-1/2 hidden lg:block"
        >
          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-xl border border-primary/5 flex flex-col items-center">
            <span className="text-3xl font-black text-primary">9</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground text-center">ปีแห่งการ<br/>สั่งสมวิชา</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
