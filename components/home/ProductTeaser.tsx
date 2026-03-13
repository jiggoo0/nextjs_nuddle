"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight } from "lucide-react";
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
            
            {/* Image/Visual Side */}
            <div className="md:w-1/3 relative aspect-square w-full max-w-[280px] mx-auto md:mx-0">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-20" />
              <div className="relative z-10 w-full h-full rounded-full border-[8px] border-warm-cream overflow-hidden shadow-2xl">
                <Image 
                  src="/images/blog-noodle-2.webp" 
                  alt="ซอสกะเพราสูตรลับ ช.สหชัย" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-noodle-gold text-white p-4 rounded-2xl shadow-xl z-20 font-black text-xs uppercase tracking-tighter rotate-12 group-hover:rotate-0 transition-transform">
                Premium <br /> Quality
              </div>
            </div>

            {/* Content Side */}
            <div className="md:w-2/3 space-y-6 text-center md:text-left relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Badge className="bg-primary text-white border-none px-4 py-1 rounded-full font-bold uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-3 h-3" /> Coming Soon
                </Badge>
                <span className="text-sm font-bold text-muted-foreground italic">
                  เตรียมพบกับ "ของดีจังหวัดตาก" ชิ้นถัดไป
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                ซอสกะเพราสูตรลับ <br />
                <span className="text-primary italic font-serif">ฉบับ ช.สหชัย</span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                จากความอร่อยหน้าเตาสู่ขวดแก้วระดับพรีเมียม รสชาติจัดจ้าน หอมกลิ่นเตาถ่านที่เป็นเอกลักษณ์ 
                ให้คุณรังสรรค์เมนูโปรดได้ง่ายๆ ที่บ้าน ด้วยมาตรฐาน 9 ปีที่เราภาคภูมิใจ
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-bold text-sm">เร็วๆ นี้</span>
                </div>
                <div className="w-px h-4 bg-border hidden sm:block" />
                <button className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:gap-4 transition-all group/btn">
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
