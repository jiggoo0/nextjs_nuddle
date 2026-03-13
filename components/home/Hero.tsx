"use client";

import { motion } from "framer-motion";
import { Utensils, Heart, ChevronDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/constants/site-config";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background Story Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/founders-warmth.webp"
          alt="เบื้องหลังความอร่อย ช.สหชัย"
          fill
          className="scale-105 object-cover opacity-20"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="from-background to-background absolute inset-0 bg-gradient-to-b via-transparent" />
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0.01, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-primary/10 border-primary/20 mb-8 inline-flex items-center gap-2 rounded-full border px-6 py-2"
        >
          <Heart className="text-primary h-4 w-4 animate-pulse" />
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
            {hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0.01, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground mb-8 text-5xl leading-[0.95] font-black tracking-tighter md:text-8xl"
        >
          {hero.headlineLine1} <br />
          <span className="text-primary font-serif italic">{hero.headlineLine2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0.01, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mx-auto mb-12 max-w-2xl text-xl leading-relaxed font-medium md:text-2xl"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0.01, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <a
            href="#menu"
            aria-label="ดูเมนูความอร่อย ช.สหชัย"
            className="group bg-primary text-primary-foreground shadow-primary/30 hover:bg-primary/90 relative inline-flex items-center justify-center gap-3 rounded-[2rem] px-10 py-5 text-lg font-bold shadow-2xl transition-all hover:-translate-y-1 active:scale-95"
          >
            <Utensils className="h-5 w-5 transition-transform group-hover:rotate-12" />
            ลิ้มลองความอร่อย
          </a>
          <a
            href="#contact"
            aria-label="ดูพิกัดร้านและเวลาเปิดปิด"
            className="text-foreground hover:text-primary flex items-center gap-2 font-bold transition-colors"
          >
            เส้นทางมาร้าน <ChevronDown className="mt-1 h-4 w-4 animate-bounce" />
          </a>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -left-10 hidden lg:block"
        >
          <div className="border-primary/5 flex flex-col items-center rounded-[2.5rem] border bg-white/80 p-6 shadow-xl backdrop-blur-xl">
            <span className="text-primary text-3xl font-black">9</span>
            <span className="text-muted-foreground text-center text-[10px] font-bold tracking-widest uppercase">
              ปีแห่งการ
              <br />
              สั่งสมวิชา
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="from-background absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />
    </section>
  );
}
