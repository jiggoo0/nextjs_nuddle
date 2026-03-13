import { getAllBlogs, getBlogBySlug, getSiteConfig } from "@/lib/api/data";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, User, Clock, BarChart3, Zap, CheckCircle2, Cpu } from "lucide-react";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  const siteConfig = await getSiteConfig();

  if (!blog) return { title: "บทความไม่พบ" };

  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: {
      canonical: `${siteConfig.identity.url}/blog/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `${siteConfig.identity.url}/blog/${slug}`,
      images: [
        {
          url: `/images/${blog.image}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const Content = dynamic(() => import(`@/content/blog/${slug}.mdx`), {
    loading: () => <div className="bg-muted h-96 animate-pulse rounded-[3rem]" />,
  });

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto max-w-5xl px-6">
          <AnimatedSection>
            {/* Navigation & Header */}
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-bold transition-colors"
              >
                <ChevronLeft className="h-4 w-4" /> คลังความรู้เมืองตาก
              </Link>
              <Badge className="bg-primary/10 text-primary rounded-full border-none px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase">
                {blog.category} / Insight Analysis
              </Badge>
            </div>

            <h1 className="mb-12 text-4xl leading-[1.1] font-black tracking-tighter md:text-7xl">
              {blog.title}
            </h1>

            {/* INSIGHT CARDS */}
            <div className="bg-muted/30 border-border/50 mb-16 grid grid-cols-1 gap-4 rounded-[2.5rem] border p-2 md:grid-cols-4">
              <div className="dark:bg-card border-primary/5 flex flex-col justify-between rounded-[2rem] border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <Clock className="text-primary h-5 w-5" />
                  <span className="text-primary text-[10px] font-black uppercase">Read Time</span>
                </div>
                <div className="text-2xl font-black tracking-tighter">3-5 Min</div>
                <p className="text-muted-foreground mt-1 text-[10px] font-bold">
                  สรุปข้อมูลเพื่อคุณ
                </p>
              </div>

              <div className="dark:bg-card border-primary/5 flex flex-col justify-between rounded-[2rem] border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <BarChart3 className="text-secondary-foreground h-5 w-5" />
                  <span className="text-secondary-foreground text-[10px] font-black uppercase">
                    Expert Level
                  </span>
                </div>
                <div className="text-2xl font-black tracking-tighter">ตำนาน 9 ปี</div>
                <p className="text-muted-foreground mt-1 text-[10px] font-bold">จากประสบการณ์ตรง</p>
              </div>

              <div className="dark:bg-card border-primary/5 flex flex-col justify-between rounded-[2rem] border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <Zap className="h-5 w-5 text-amber-500" />
                  <span className="text-[10px] font-black text-amber-500 uppercase">
                    Impact Score
                  </span>
                </div>
                <div className="text-foreground text-2xl font-black tracking-tighter">98/100</div>
                <p className="text-muted-foreground mt-1 text-[10px] font-bold">
                  ความพึงพอใจลูกค้า
                </p>
              </div>

              <div className="bg-primary group flex cursor-default flex-col justify-between rounded-[2rem] p-6 text-white shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <Cpu className="h-5 w-5 text-white/70" />
                  <span className="text-[10px] font-black text-white/70 uppercase">Dev Pulse</span>
                </div>
                <div className="text-2xl font-black tracking-tighter">SEO Active</div>
                <p className="mt-1 text-[10px] font-bold text-white/50 transition-colors group-hover:text-white">
                  Managed by AEMDEVWEB
                </p>
              </div>
            </div>

            <div className="grid gap-16 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <article className="prose prose-neutral prose-lg dark:prose-invert prose-headings:tracking-tighter prose-headings:font-black prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground prose-strong:font-bold prose-img:rounded-[3rem] prose-img:shadow-2xl prose-img:border-[12px] prose-img:border-muted max-w-none">
                  <Content />
                </article>

                <div className="border-border mt-24 border-t pt-16">
                  <div className="bg-primary/5 relative overflow-hidden rounded-[3.5rem] p-10 md:p-16">
                    <div className="bg-primary/10 absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <div className="mb-6 flex items-center gap-3">
                        <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-xl text-white">
                          <CheckCircle2 className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight">
                          ทำไมบทความนี้ถึงมีประโยชน์?
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                        เราไม่ได้แค่ขายบะหมี่ แต่เราสร้างระบบนิเวศน์ทางความรู้ที่เชื่อมโยงระหว่าง{" "}
                        <strong>"สูตรอาหารระดับตำนาน"</strong> และ{" "}
                        <strong>"เทคโนโลยีดิจิทัล"</strong>
                        เพื่อให้ชาวเมืองตากได้เข้าถึงข้อมูลที่ดีที่สุดผ่านนวัตกรรมของ{" "}
                        <strong>AEMDEVWEB</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="space-y-8 lg:col-span-4">
                <div className="sticky top-32">
                  <div className="bg-card border-border space-y-8 rounded-[2.5rem] border p-8">
                    <div>
                      <h4 className="text-muted-foreground mb-6 flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase">
                        <User className="h-3 w-3" /> ผู้เรียบเรียง
                      </h4>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full font-black">
                          ส
                        </div>
                        <div>
                          <p className="text-foreground font-black">ช.สหชัย (ตาก)</p>
                          <p className="text-muted-foreground text-xs font-medium italic">
                            ทีมงานมาตรฐาน 9 ปี
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-border text-muted-foreground border-t pt-8 text-xs font-bold">
                      เผยแพร่เมื่อ: {blog.date}
                    </div>

                    <div className="border-border border-t pt-8">
                      <Button
                        className="shadow-primary/20 h-12 w-full rounded-2xl text-xs font-black tracking-widest uppercase shadow-lg"
                        asChild
                      >
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
