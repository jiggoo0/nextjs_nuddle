"use client";

import { siteConfig, cateringService } from "@/constants/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Utensils, ArrowRight, BookOpen, Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blog.json";

export function KnowledgeCorner() {
  // ดึงบทความล่าสุด 2 บทความ
  const latestBlogs = blogData.slice(0, 2);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl space-y-4">
            <Badge className="bg-primary/10 text-primary border-none px-4 py-1 rounded-full font-bold uppercase tracking-widest">
              Services & Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">บริการเด่น & <span className="text-primary italic">มุมความรู้</span></h2>
          </div>
          <Link href="/blog" className="text-primary font-bold hover:underline flex items-center gap-2 group mb-2">
            ดูข่าวสารทั้งหมด <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* BUSINESS FIRST: CATERING CARD (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative group"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-primary/5 h-full flex flex-col md:flex-row gap-10 items-center overflow-hidden">
              <div className="md:w-1/2 space-y-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                  <Utensils className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight">{cateringService.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {cateringService.description}
                </p>
                <div className="space-y-3">
                  {cateringService.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="rounded-2xl h-14 px-10 text-lg font-black shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all" asChild>
                  <Link href="/contact">{cateringService.cta}</Link>
                </Button>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-full w-full rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/blog-noodle-4.webp" 
                  alt="รับเหมานอกสถานที่ ช.สหชัย" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-sm font-bold">
                  "พร้อมเสิร์ฟความอร่อยถึงที่ ทั่วจังหวัดตาก"
                </div>
              </div>
            </div>
          </motion.div>

          {/* SECONDARY: KNOWLEDGE CORNER (Blog Cards) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 px-4 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <h4 className="font-black uppercase tracking-widest text-sm">เกร็ดความรู้ & ข่าวสาร</h4>
            </div>
            
            {latestBlogs.map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/blog/${blog.slug}`} className="block group">
                  <Card className="rounded-[2rem] overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-muted/30 group-hover:bg-white group-hover:-translate-y-1">
                    <CardContent className="p-0 flex items-center">
                      <div className="relative w-24 h-24 shrink-0 overflow-hidden m-2 rounded-2xl">
                        <Image 
                          src={`/images/${blog.image}`} 
                          alt={blog.title} 
                          fill 
                          className="object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                      </div>
                      <div className="p-4 pr-6 space-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                          <Calendar className="w-3 h-3 text-primary" />
                          <span>{blog.date}</span>
                        </div>
                        <h5 className="font-bold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                          {blog.title}
                        </h5>
                        <div className="flex items-center gap-1 text-primary text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                          อ่านต่อ <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}

            <div className="p-6 rounded-[2rem] bg-secondary/10 border border-secondary/20 mt-4">
              <p className="text-xs font-medium text-muted-foreground leading-relaxed italic">
                *ร่วมแบ่งปันเรื่องราวความอร่อยและข่าวสารในจังหวัดตากไปกับเรา ช.สหชัย เกี๊ยวปูหมูแดง
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
