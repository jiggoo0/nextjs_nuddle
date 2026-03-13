"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, UtensilsCrossed } from "lucide-react";
import Image from "next/image";

export function ProductTeaser() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden rounded-[3.5rem] bg-primary/5 border border-primary/10 p-1 md:p-2"
        >
          <div className="relative overflow-hidden rounded-[3rem] bg-white p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
            
            {/* Image/Visual Side - New Brand kapoamom */}
            <div className="md:w-1/3 relative aspect-square w-full max-w-[320px] mx-auto md:mx-0">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse opacity-20" />
              <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-warm-cream">
                <Image 
                  src="/images/kapoamom-sauce.webp" 
                  alt="ซอสผัดกะเพราฝีมือแม่ แบรนด์ kapoamom" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-2xl shadow-xl z-20 font-black text-xs uppercase tracking-tighter rotate-12 group-hover:rotate-0 transition-transform">
                kapoamom <br /> Original
              </div>
            </div>

            {/* Content Side - New Brand Details */}
            <div className="md:w-2/3 space-y-6 text-center md:text-left relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Badge className="bg-primary text-white border-none px-4 py-1 rounded-full font-bold uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-3 h-3" /> New Product
                </Badge>
                <span className="text-sm font-bold text-muted-foreground italic">
                  แบรนด์ใหม่ "kapoamom" (ซอสผัดกะเพราฝีมือแม่)
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                กะเพราหมูสับทำเอง <br />
                <span className="text-primary italic font-serif text-3xl md:text-5xl">ง่ายๆ ได้ที่บ้านคุณ</span>
              </h2>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl">
                <p className="text-xl font-bold text-foreground leading-relaxed italic">
                  "อร่อยเหมือนกะเพราแม่ที่ผัดให้แน่นอน"
                </p>
              </div>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed font-medium">
                สัมผัสรสชาติจัดจ้าน หอมกลิ่นใบกะเพราแท้และสูตรลับฉบับฝีมือแม่ 
                ไม่ต้องปรุงเพิ่ม แค่เทแล้วผัด ก็ได้รสชาติระดับตำนาน ช.สหชัย 
                คัดสรรวัตถุดิบคุณภาพดีเพื่อมื้อพิเศษของทุกคนในครอบครัว
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" />
                  <span className="font-black text-sm uppercase tracking-widest text-primary">เร็วๆ นี้</span>
                </div>
                <div className="w-px h-4 bg-border hidden sm:block" />
                <button className="flex items-center gap-2 text-muted-foreground font-black uppercase tracking-widest text-xs hover:text-primary transition-all group/btn">
                  ติดตามความเคลื่อนไหว <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
