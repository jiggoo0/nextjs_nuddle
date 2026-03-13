"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProductTeaser() {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group bg-primary/5 border-primary/10 relative overflow-hidden rounded-[3.5rem] border p-1 md:p-2"
        >
          <div className="relative flex flex-col items-center gap-12 overflow-hidden rounded-[3rem] bg-white p-8 md:flex-row md:p-16">
            {/* Background Accent */}
            <div className="bg-primary/5 absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full blur-3xl" />

            {/* Image/Visual Side - New Brand kapoamom */}
            <div className="relative mx-auto aspect-square w-full max-w-[320px] md:mx-0 md:w-1/3">
              <div className="bg-primary/20 absolute inset-0 animate-pulse rounded-full opacity-20" />
              <div className="bg-warm-cream relative z-10 h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
                <Image
                  src="/images/kapoamom-sauce.webp"
                  alt="ซอสผัดกะเพราฝีมือแม่ แบรนด์ kapoamom"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-primary absolute -right-4 -bottom-4 z-20 rotate-12 rounded-2xl p-4 text-xs font-black tracking-tighter text-white uppercase shadow-xl transition-transform group-hover:rotate-0">
                kapoamom <br /> Original
              </div>
            </div>

            {/* Content Side - New Brand Details */}
            <div className="relative z-10 space-y-6 text-center md:w-2/3 md:text-left">
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <Badge className="bg-primary flex items-center gap-2 rounded-full border-none px-4 py-1 font-bold tracking-widest text-white uppercase">
                  <Sparkles className="h-3 w-3" /> New Product
                </Badge>
                <span className="text-muted-foreground text-sm font-bold italic">
                  แบรนด์ใหม่ "kapoamom" (ซอสผัดกะเพราฝีมือแม่)
                </span>
              </div>

              <h2 className="text-4xl leading-tight font-black tracking-tighter md:text-6xl">
                กะเพราหมูสับทำเอง <br />
                <span className="text-primary font-serif text-3xl italic md:text-5xl">
                  ง่ายๆ ได้ที่บ้านคุณ
                </span>
              </h2>

              <div className="bg-primary/5 border-primary rounded-r-2xl border-l-4 p-6">
                <p className="text-foreground text-xl leading-relaxed font-bold italic">
                  "อร่อยเหมือนกะเพราแม่ที่ผัดให้แน่นอน"
                </p>
              </div>

              <p className="text-muted-foreground max-w-xl text-lg leading-relaxed font-medium">
                สัมผัสรสชาติจัดจ้าน หอมกลิ่นใบกะเพราแท้และสูตรลับฉบับฝีมือแม่ ไม่ต้องปรุงเพิ่ม
                แค่เทแล้วผัด ก็ได้รสชาติระดับตำนาน ช.สหชัย
                คัดสรรวัตถุดิบคุณภาพดีเพื่อมื้อพิเศษของทุกคนในครอบครัว
              </p>

              <div className="flex flex-col items-center gap-6 pt-4 sm:flex-row">
                <div className="flex items-center gap-2">
                  <UtensilsCrossed className="text-primary h-5 w-5" />
                  <span className="text-primary text-sm font-black tracking-widest uppercase">
                    เร็วๆ นี้
                  </span>
                </div>
                <div className="bg-border hidden h-4 w-px sm:block" />
                {/* UPDATED LINK TO PRODUCT PAGE */}
                <Link
                  href="/kapoamom"
                  className="text-muted-foreground hover:text-primary group/btn flex items-center gap-2 text-xs font-black tracking-widest uppercase transition-all"
                >
                  เข้าชมหน้าผลิตภัณฑ์{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
