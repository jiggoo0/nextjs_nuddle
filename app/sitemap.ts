import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";
import { blogRegistry } from "@/constants/blog-registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.identity.url;

  // 1. Static Pages
  const staticPages = [
    "",
    "/about",
    "/menu",
    "/kapoamom",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Dynamic Blog Posts
  const blogPages = blogRegistry.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
