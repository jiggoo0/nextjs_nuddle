"use client";

import { cateringService } from "@/constants/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Utensils, ArrowRight, BookOpen, Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// สร้าง Mock Data สำหรับ Blog ชั่วคราว (หรือจะดึงจาก API/FileSystem ใน Server Component ก็ได้)
// ในที่นี้เป็น Client Component เราจะใช้ข้อมูลคงที่ที่สอดคล้องกับไฟล์ MDX ครับ
const latestBlogs = [
  {
    slug: "legend-of-sahachai-noodle",
    title: "5 เหตุผลที่ทำไมบะหมี่เกี๊ยวปู ช.สหชัย ถึงเป็นตำนานเมืองตากกว่า 9 ปี",
    date: "2026-03-10",
    image: "blog-noodle-1.webp",
  },
  {
    slug: "secret-red-pork-recipe",
    title: "สูตรลับหมูแดงย่างเตาถ่าน เฮียเนก: มรดกความอร่อยที่หาทานยาก",
    date: "2026-03-05",
    image: "blog-noodle-2.webp",
  },
];

export function KnowledgeCorner() {
  return (
    <section className="bg-background overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="max-w-2xl space-y-4">
            <Badge className="bg-primary/10 text-primary rounded-full border-none px-4 py-1 font-bold tracking-widest uppercase">
              Services & Stories
            </Badge>
            <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
              บริการเด่น & <span className="text-primary italic">มุมความรู้</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-primary group mb-2 flex items-center gap-2 font-bold hover:underline"
          >
            ดูข่าวสารทั้งหมด{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* BUSINESS FIRST: CATERING CARD (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative lg:col-span-2"
          >
            <div className="bg-primary/5 absolute inset-0 -rotate-1 rounded-[3rem] transition-transform duration-500 group-hover:rotate-0" />
            <div className="border-primary/5 relative flex h-full flex-col items-center gap-10 overflow-hidden rounded-[3rem] border bg-white p-8 shadow-xl md:flex-row md:p-12">
              <div className="relative z-10 space-y-6 md:w-1/2">
                <div className="bg-primary shadow-primary/30 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg">
                  <Utensils className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-black tracking-tight md:text-4xl">
                  {cateringService.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {cateringService.description}
                </p>
                <div className="space-y-3">
                  {cateringService.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-bold">
                      <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="shadow-primary/20 h-14 rounded-2xl px-10 text-lg font-black shadow-xl transition-all hover:-translate-y-1"
                  asChild
                >
                  <Link href="/contact">{cateringService.cta}</Link>
                </Button>
              </div>
              <div className="relative h-64 w-full overflow-hidden rounded-[2rem] shadow-2xl md:h-full md:w-1/2">
                <Image
                  src="/images/blog-noodle-4.webp"
                  alt="รับเหมานอกสถานที่ ช.สหชัย"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-6 bottom-6 left-6 text-sm font-bold text-white">
                  "พร้อมเสิร์ฟความอร่อยถึงที่ ทั่วจังหวัดตาก"
                </div>
              </div>
            </div>
          </motion.div>

          {/* SECONDARY: KNOWLEDGE CORNER (Blog Cards) */}
          <div className="space-y-6">
            <div className="mb-4 flex items-center gap-3 px-4">
              <BookOpen className="text-primary h-5 w-5" />
              <h4 className="text-sm font-black tracking-widest uppercase">
                เกร็ดความรู้ & ข่าวสาร
              </h4>
            </div>

            {latestBlogs.map((blog, idx) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/blog/${blog.slug}`} className="group block">
                  <Card className="bg-muted/30 overflow-hidden rounded-[2rem] border-none shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white hover:shadow-xl">
                    <CardContent className="flex items-center p-0">
                      <div className="relative m-2 h-24 w-24 shrink-0 overflow-hidden rounded-2xl">
                        <Image
                          src={`/images/${blog.image}`}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="space-y-2 p-4 pr-6">
                        <div className="text-muted-foreground flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase">
                          <Calendar className="text-primary h-3 w-3" />
                          <span>{blog.date}</span>
                        </div>
                        <h5 className="group-hover:text-primary line-clamp-2 text-sm leading-tight font-bold transition-colors">
                          {blog.title}
                        </h5>
                        <div className="text-primary flex items-center gap-1 text-[10px] font-black tracking-widest uppercase opacity-0 transition-opacity group-hover:opacity-100">
                          อ่านต่อ <ChevronRight className="h-3 w-3" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}

            <div className="bg-secondary/10 border-secondary/20 mt-4 rounded-[2rem] border p-6">
              <p className="text-muted-foreground text-xs leading-relaxed font-medium italic">
                *ร่วมแบ่งปันเรื่องราวความอร่อยและข่าวสารในจังหวัดตากไปกับเรา ช.สหชัย เกี๊ยวปูหมูแดง
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
