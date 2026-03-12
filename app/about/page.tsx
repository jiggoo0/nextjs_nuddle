import MenuGuide from "@/content/blog/menu-guide.mdx";
import { siteConfig } from "@/constants/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `เรื่องราวและเมนูแนะนำ | ${siteConfig.identity.name}`,
  description: siteConfig.identity.description,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <MenuGuide />
        </article>
      </div>
    </main>
  );
}
