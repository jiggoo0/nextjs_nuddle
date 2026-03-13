import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/static/development/",
        "/*.json$",
      ],
    },
    sitemap: `${siteConfig.identity.url}/sitemap.xml`,
  };
}
