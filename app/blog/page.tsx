import { siteConfig } from "@/constants/site-config";
import { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronRight, BookOpen } from "lucide-react";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: `ข่าวสารและคู่มือของอร่อยเมืองตาก | ${siteConfig.identity.name}`,
  description: "รวบรวมบทความที่มีประโยชน์ ข่าวสารจังหวัดตาก และเคล็ดลับความอร่อยจากร้าน ช.สหชัย เกี๊ยวปูหมูแดง",
};

function getAllBlogs() {
  const contentDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(contentDir);
  
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const content = fs.readFileSync(path.join(contentDir, file), "utf8");
      
      const titleMatch = content.match(/title:\s*"(.*)"/);
      const dateMatch = content.match(/date:\s*"(.*)"/);
      const excerptMatch = content.match(/excerpt:\s*"(.*)"/);
      const categoryMatch = content.match(/category:\s*"(.*)"/);
      const imageMatch = content.match(/image:\s*"(.*)"/);
      
      return {
        slug,
        title: titleMatch ? titleMatch[1] : slug,
        date: dateMatch ? dateMatch[1] : "ไม่ระบุวันที่",
        excerpt: excerptMatch ? excerptMatch[1] : "",
        category: categoryMatch ? categoryMatch[1] : "ทั่วไป",
        image: imageMatch ? imageMatch[1] : "blog-noodle-1.webp",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogListingPage() {
  const blogs = getAllBlogs();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <Badge className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full font-bold uppercase tracking-widest mb-6">
              Tak Local Journal
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6">
              ข่าวสาร & <span className="text-primary italic">เรื่องราว</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              รวบรวมข้อมูลที่เป็นประโยชน์ ข่าวสารจังหวัดตาก และบันทึกการเดินทางของความอร่อยที่ส่งต่อกันมาจากรุ่นสู่รุ่น
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, idx) => (
              <AnimatedSection key={blog.slug} delay={idx * 0.1}>
                <Link href={`/blog/${blog.slug}`} className="group">
                  <Card className="rounded-[3rem] overflow-hidden border border-border bg-card hover:shadow-2xl transition-all duration-500 h-full flex flex-col group-hover:-translate-y-2">
                    {/* BLOG IMAGE ADDED HERE */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image 
                        src={`/images/${blog.image}`} 
                        alt={blog.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-white/90 backdrop-blur-md text-primary border-none font-bold shadow-lg">
                          {blog.category}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground mb-4">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{blog.date}</span>
                      </div>
                      
                      <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                        {blog.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] mt-auto">
                        อ่านบทความฉบับเต็ม <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-24 p-12 bg-primary text-white rounded-[4rem] text-center shadow-2xl shadow-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <BookOpen className="w-12 h-12 mx-auto mb-6 opacity-50" />
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-white">ต้องการรับเหมาจัดเลี้ยง?</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 font-medium">
              นอกจากข่าวสาร เรายังพร้อมให้บริการจัดเลี้ยงบะหมี่นอกสถานที่ในจังหวัดตาก เริ่มต้น 150 ชามขึ้นไป
            </p>
            <Button className="bg-white text-primary hover:bg-white/90 rounded-2xl h-14 px-10 text-lg font-black" asChild>
              <Link href="/contact">ติดต่อสอบถามราคาเหมา</Link>
            </Button>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
