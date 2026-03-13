import { siteConfig } from "@/constants/site-config";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ChevronLeft, Calendar, User, Tag } from "lucide-react";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(contentDir);
  
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
    }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  
  return {
    title: `${title} | คู่มือของอร่อยและข่าวสารเมืองตาก | ${siteConfig.identity.name}`,
    description: `อ่านข่าวสารจังหวัดตากและเรื่องราวความอร่อยของร้าน ช.สหชัย ${title} - รวบรวมข้อมูลที่เป็นประโยชน์สำหรับชาวเมืองตากและนักท่องเที่ยว`,
    openGraph: {
      images: [`/images/blog-${slug}.webp`, "/og-main.png"],
    }
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const Content = dynamic(() => import(`@/content/blog/${slug}.mdx`), {
    loading: () => <div className="animate-pulse h-96 bg-muted rounded-[3rem]" />,
  });

  const formattedTitle = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            {/* Back Button */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm font-bold">
              <ChevronLeft className="w-4 h-4" /> กลับไปหน้าข่าวสาร
            </Link>

            {/* Post Header */}
            <div className="mb-12">
              <Badge className="bg-primary/10 text-primary border-none px-4 py-1 rounded-full mb-6 font-bold uppercase tracking-widest">
                Tak Local News & Food
              </Badge>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
                {formattedTitle}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium border-y border-border py-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>13 มีนาคม 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  <span>โดย เฮียเนก-เจ๊ตั๊ก (ช.สหชัย)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-primary" />
                  <span>ของดีเมืองตาก, ข่าวสารจังหวัด</span>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <article className="prose prose-neutral prose-lg max-w-none dark:prose-invert 
              prose-headings:tracking-tighter prose-headings:font-black 
              prose-p:leading-relaxed prose-p:text-muted-foreground 
              prose-strong:text-foreground prose-strong:font-bold
              prose-img:rounded-[2.5rem] prose-img:shadow-2xl">
              <Content />
            </article>

            {/* AEMDEVWEB Footer Credit */}
            <div className="mt-20 p-10 bg-primary/5 rounded-[3rem] border border-primary/10 text-center">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Developed & Optimized by</p>
              <h3 className="text-2xl font-black text-primary">AEMDEVWEB</h3>
              <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                เราให้บริการด้าน SEO และระบบเว็บไซต์ประสิทธิภาพสูง เพื่อให้ธุรกิจในท้องถิ่นเติบโตอย่างมั่นคงในยุคดิจิทัล
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
