import { siteConfig } from "@/constants/site-config";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Blog & เรื่องราวความอร่อย | ${siteConfig.identity.name}`,
  description: siteConfig.identity.description,
};

export default function BlogListPage() {
  const contentDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(contentDir);
  
  const blogs = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const title = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      return { slug, title };
    });

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Blog & เรื่องราวความอร่อย
          </h1>
          <p className="text-lg text-muted-foreground">
            ติดตามข่าวสาร โปรโมชั่น และเรื่องราวเบื้องหลังความอร่อยของร้าน ช.สหชัย
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link 
              key={blog.slug} 
              href={`/blog/${blog.slug}`}
              className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-muted">
                <Image 
                  src={`/images/blog-noodle-${Math.floor(Math.random() * 4) + 1}.webp`}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {blog.title}
                </h2>
                <div className="flex items-center text-sm text-primary font-semibold">
                  อ่านเพิ่มเติม 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
