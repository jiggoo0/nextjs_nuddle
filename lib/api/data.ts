import { cache } from "react";
import { blogRegistry, BlogEntry } from "@/constants/blog-registry";
import { siteConfig } from "@/constants/site-config";

/**
 * @file lib/api/data.ts
 * @description Advanced Data Access Layer using React cache for optimal performance.
 * This acts as the Single Source of Truth for fetching application data.
 */

// 1. Fetch all blog posts (Cached)
export const getAllBlogs = cache(async (): Promise<BlogEntry[]> => {
  return blogRegistry;
});

// 2. Fetch single blog post by slug (Cached)
export const getBlogBySlug = cache(async (slug: string): Promise<BlogEntry | undefined> => {
  return blogRegistry.find((blog) => blog.slug === slug);
});

// 3. Get Site Configuration (Cached)
export const getSiteConfig = cache(async () => {
  return siteConfig;
});

// 4. Get Featured Content (Example of filtered data fetching)
export const getFeaturedBlogs = cache(async (limit = 3): Promise<BlogEntry[]> => {
  return blogRegistry.slice(0, limit);
});
