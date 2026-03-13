import { blogRegistry } from "@/constants/blog-registry";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ChevronLeft, 
  User, 
  Clock, 
  BarChart3, 
  Zap, 
  CheckCircle2,
  Cpu
} from "lucide-react";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogRegistry.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogRegistry.find(b => b.slug === slug);
  
  if (!blog) return { title: "บทความไม่พบ" };

  return {
    title: `${blog.title} | สาระน่ารู้ ช.สหชัย & AEMDEVWEB`,
    description: blog.excerpt,
    openGraph: {
      images: ["/og-main.png"],
    }
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogRegistry.find(b => b.slug === slug);
  
  if (!blog) {
    notFound();
  }

  const Content = dynamic(() => import(`@/content/blog/${slug}.mdx`), {
    loading: () => <div className="animate-pulse h-96 bg-muted rounded-[3rem]" />,
  });

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <AnimatedSection>
            {/* Navigation & Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold">
                <ChevronLeft className="w-4 h-4" /> คลังความรู้เมืองตาก
              </Link>
              <Badge className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase">
                {blog.category} / Insight Analysis
              </Badge>
            </div>

            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-12">
              {blog.title}
            </h1>

            {/* INSIGHT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 p-2 bg-muted/30 rounded-[2.5rem] border border-border/50">
              <div className="bg-white dark:bg-card p-6 rounded-[2rem] shadow-sm flex flex-col justify-between border border-primary/5">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-[10px] font-black text-primary uppercase">Read Time</span>
                </div>
                <div className="text-2xl font-black tracking-tighter">3-5 Min</div>
                <p className="text-[10px] text-muted-foreground font-bold mt-1">สรุปข้อมูลเพื่อคุณ</p>
              </div>
              
              <div className="bg-white dark:bg-card p-6 rounded-[2rem] shadow-sm flex flex-col justify-between border border-primary/5">
                <div className="flex items-center justify-between mb-4">
                  <BarChart3 className="w-5 h-5 text-secondary-foreground" />
                  <span className="text-[10px] font-black text-secondary-foreground uppercase">Expert Level</span>
                </div>
                <div className="text-2xl font-black tracking-tighter">ตำนาน 9 ปี</div>
                <p className="text-[10px] text-muted-foreground font-bold mt-1">จากประสบการณ์ตรง</p>
              </div>

              <div className="bg-white dark:bg-card p-6 rounded-[2rem] shadow-sm flex flex-col justify-between border border-primary/5">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <span className="text-[10px] font-black text-amber-500 uppercase">Impact Score</span>
                </div>
                <div className="text-2xl font-black tracking-tighter text-foreground">98/100</div>
                <p className="text-[10px] text-muted-foreground font-bold mt-1">ความพึงพอใจลูกค้า</p>
              </div>

              <div className="bg-primary p-6 rounded-[2rem] shadow-xl flex flex-col justify-between text-white group cursor-default">
                <div className="flex items-center justify-between mb-4">
                  <Cpu className="w-5 h-5 text-white/70" />
                  <span className="text-[10px] font-black text-white/70 uppercase">Dev Pulse</span>
                </div>
                <div className="text-2xl font-black tracking-tighter">SEO Active</div>
                <p className="text-[10px] text-white/50 font-bold mt-1 group-hover:text-white transition-colors">Managed by AEMDEVWEB</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-8">
                <article className="prose prose-neutral prose-lg max-w-none dark:prose-invert 
                  prose-headings:tracking-tighter prose-headings:font-black 
                  prose-p:leading-relaxed prose-p:text-muted-foreground 
                  prose-strong:text-foreground prose-strong:font-bold
                  prose-img:rounded-[3rem] prose-img:shadow-2xl prose-img:border-[12px] prose-img:border-muted">
                  <Content />
                </article>

                <div className="mt-24 pt-16 border-t border-border">
                  <div className="bg-primary/5 rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight">ทำไมบทความนี้ถึงมีประโยชน์?</h3>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                        เราไม่ได้แค่ขายบะหมี่ แต่เราสร้างระบบนิเวศน์ทางความรู้ที่เชื่อมโยงระหว่าง <strong>"สูตรอาหารระดับตำนาน"</strong> และ <strong>"เทคโนโลยีดิจิทัล"</strong> 
                        เพื่อให้ชาวเมืองตากได้เข้าถึงข้อมูลที่ดีที่สุดผ่านนวัตกรรมของ <strong>AEMDEVWEB</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-4 space-y-8">
                <div className="sticky top-32">
                  <div className="p-8 bg-card border border-border rounded-[2.5rem] space-y-8">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-6 flex items-center gap-2">
                        <User className="w-3 h-3" /> ผู้เรียบเรียง
                      </h4>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">ส</div>
                        <div>
                          <p className="font-black text-foreground">ช.สหชัย (ตาก)</p>
                          <p className="text-xs text-muted-foreground font-medium italic">ทีมงานมาตรฐาน 9 ปี</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-border text-xs text-muted-foreground font-bold">
                      เผยแพร่เมื่อ: {blog.date}
                    </div>

                    <div className="pt-8 border-t border-border">
                      <Button className="w-full rounded-2xl h-12 font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/20" asChild>
                        <Link href="/contact">สอบถามบริการรับเหมา</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
