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

// ฟังก์ชันช่วยดึง Metadata จากไฟล์ MDX แบบง่าย
function getMdxData(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;
    
    const content = fs.readFileSync(filePath, "utf8");
    const titleMatch = content.match(/title:\s*"(.*)"/);
    const dateMatch = content.match(/date:\s*"(.*)"/);
    const categoryMatch = content.match(/category:\s*"(.*)"/);
    
    return {
      title: titleMatch ? titleMatch[1] : slug,
      date: dateMatch ? dateMatch[1] : "ไม่ระบุวันที่",
      category: categoryMatch ? categoryMatch[1] : "ทั่วไป",
    };
  } catch (e) {
    return null;
  }
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
  const data = getMdxData(slug);
  
  if (!data) return { title: "บทความไม่พบ" };

  return {
    title: `${data.title} | ${siteConfig.identity.name}`,
    description: `อ่านบทความเรื่อง ${data.title} รวบรวมข้อมูลที่เป็นประโยชน์จากร้าน ช.สหชัย และข่าวสารเมืองตาก`,
    openGraph: {
      images: ["/og-main.png"],
    }
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const data = getMdxData(slug);
  
  if (!data) {
    notFound();
  }

  const Content = dynamic(() => import(`@/content/blog/${slug}.mdx`), {
    loading: () => <div className="animate-pulse h-96 bg-muted rounded-[3rem]" />,
  });

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
                {data.category}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
                {data.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium border-y border-border py-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{data.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  <span>โดย ช.สหชัย (ตาก)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-primary" />
                  <span>ข่าวสารจังหวัดตาก, ของอร่อยเมืองตาก</span>
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
              <p className="text-muted-foreground mt-2 max-w-md mx-auto text-sm">
                เราให้บริการด้าน SEO และระบบเว็บไซต์ประสิทธิภาพสูง เพื่อให้ธุรกิจท้องถิ่นเติบโตอย่างมั่นคง
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
