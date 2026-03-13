import { siteConfig } from "@/constants/site-config";
import { blogRegistry } from "@/constants/blog-registry";
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

export const metadata: Metadata = {
  title: `ข่าวสารและคู่มือของอร่อยเมืองตาก | ${siteConfig.identity.name}`,
  description:
    "รวบรวมบทความที่มีประโยชน์ ข่าวสารจังหวัดตาก และเคล็ดลับความอร่อยจากร้าน ช.สหชัย เกี๊ยวปูหมูแดง",
};

export default function BlogListingPage() {
  const blogs = [...blogRegistry].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-20 text-center">
            <Badge className="bg-primary/10 text-primary mb-6 rounded-full border-none px-4 py-1.5 font-bold tracking-widest uppercase">
              Tak Local Journal
            </Badge>
            <h1 className="mb-6 text-5xl leading-tight font-black tracking-tighter md:text-7xl">
              ข่าวสาร & <span className="text-primary italic">เรื่องราว</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl font-medium">
              รวบรวมข้อมูลที่เป็นประโยชน์ ข่าวสารจังหวัดตาก
              และบันทึกการเดินทางของความอร่อยที่ส่งต่อกันมาจากรุ่นสู่รุ่น
            </p>
          </AnimatedSection>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, idx) => (
              <AnimatedSection key={blog.slug} delay={idx * 0.1}>
                <Link href={`/blog/${blog.slug}`} className="group">
                  <Card className="border-border bg-card flex h-full flex-col overflow-hidden rounded-[3rem] border transition-all duration-500 group-hover:-translate-y-2 hover:shadow-2xl">
                    <div className="bg-muted relative h-64 w-full overflow-hidden">
                      <Image
                        src={`/images/${blog.image}`}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-6 left-6">
                        <Badge className="text-primary border-none bg-white/90 font-bold shadow-lg backdrop-blur-md">
                          {blog.category}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="flex h-full flex-col p-8">
                      <div className="text-muted-foreground mb-4 flex items-center gap-2 text-xs font-bold">
                        <Calendar className="text-primary h-3.5 w-3.5" />
                        <span>{blog.date}</span>
                      </div>

                      <h3 className="group-hover:text-primary mb-4 line-clamp-2 text-2xl leading-tight font-black tracking-tight transition-colors">
                        {blog.title}
                      </h3>

                      <p className="text-muted-foreground mb-8 line-clamp-3 flex-grow text-sm leading-relaxed">
                        {blog.excerpt}
                      </p>

                      <div className="text-primary mt-auto flex items-center gap-2 text-[10px] font-black tracking-widest uppercase">
                        อ่านบทความฉบับเต็ม{" "}
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="bg-primary shadow-primary/20 relative mt-24 overflow-hidden rounded-[4rem] p-12 text-center text-white shadow-2xl">
            <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <BookOpen className="mx-auto mb-6 h-12 w-12 opacity-50" />
            <h2 className="mb-4 text-3xl font-black tracking-tight text-white md:text-4xl">
              ต้องการรับเหมาจัดเลี้ยง?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-medium text-white/80">
              นอกจากข่าวสาร เรายังพร้อมให้บริการจัดเลี้ยงบะหมี่นอกสถานที่ในจังหวัดตาก เริ่มต้น 150
              ชามขึ้นไป
            </p>
            <Button
              className="text-primary h-14 rounded-2xl bg-white px-10 text-lg font-black hover:bg-white/90"
              asChild
            >
              <Link href="/contact">ติดต่อสอบถามราคาเหมา</Link>
            </Button>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
