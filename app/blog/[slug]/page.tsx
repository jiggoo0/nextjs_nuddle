import { siteConfig } from "@/constants/site-config";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

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
    title: `${title} | Blog ${siteConfig.identity.name}`,
    description: `อ่านเรื่องราวความอร่อยของ ${siteConfig.identity.name} - ${title}`,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  
  // Check if file exists
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  // Dynamically import the MDX content from the content folder
  // Note: For App Router, we need to handle this carefully.
  // We'll use a dynamic component that imports the MDX.
  const Content = dynamic(() => import(`@/content/blog/${slug}.mdx`), {
    loading: () => <div className="animate-pulse h-64 bg-muted rounded-xl" />,
  });

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <Content />
        </article>
      </div>
    </main>
  );
}
