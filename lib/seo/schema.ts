import { siteConfig } from "@/constants/site-config";
import { BlogEntry } from "@/constants/blog-registry";

/**
 * @file lib/seo/schema.ts
 * @description Advanced Schema.org generators for high-level SEO.
 * Implements international standards for LocalBusiness, Restaurant, and Digital Heritage.
 */

// 1. Restaurant & Local Business Schema
export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteConfig.identity.url}/#restaurant`,
    "name": siteConfig.identity.name,
    "alternateName": siteConfig.identity.fullName,
    "image": [`${siteConfig.identity.url}${siteConfig.identity.ogImage}`],
    "description": siteConfig.identity.description,
    "url": siteConfig.identity.url,
    "telephone": siteConfig.contact.phone,
    "priceRange": "฿",
    "servesCuisine": "Thai Noodle, Street Food",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
      "addressLocality": "เมืองตาก",
      "addressRegion": "ตาก",
      "postalCode": "63000",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.8833,
      "longitude": 99.1233
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:30",
        "closes": "21:00"
      }
    ],
    "hasMenu": `${siteConfig.identity.url}/menu`,
    "founder": [
      {
        "@type": "Person",
        "name": "นายอเนก ยมเกิด Anek Yomkerd (เฮียเนก)",
        "jobTitle": "Head Chef & Founder"
      },
      {
        "@type": "Person",
        "name": "นางนัชรินทร์ ยมเกิด Nutcharin Yomkerd (เจ๊ตั๊ก)",
        "jobTitle": "Co-Founder & Manager"
      }
    ],
    "knowsAbout": ["Traditional Thai Noodle", "Egg Noodle 98%", "Charcoal Grilled Red Pork"],
    "maintainer": {
      "@type": "Organization",
      "name": "AEMDEVWEB",
      "url": "https://www.aemdevweb.com"
    }
  };
}

// 2. Breadcrumb Schema (For Google Search Results Path)
export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteConfig.identity.url}${item.item}`
    }))
  };
}

// 3. Blog Posting Schema (For News/Articles)
export function getBlogPostingSchema(blog: BlogEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": [`${siteConfig.identity.url}/images/${blog.image}`],
    "datePublished": blog.date,
    "author": {
      "@type": "Organization",
      "name": siteConfig.identity.name,
      "url": siteConfig.identity.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "AEMDEVWEB",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.identity.url}/images/aemdevweb-logo.svg`
      }
    }
  };
}

// 4. Product Schema (For kapoamom Sauce)
export function getProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ซอสผัดกะเพรา kapoamom",
    "description": "ซอสผัดกะเพราสูตรลับ 9 ปี จากร้าน ช.สหชัย อร่อยเหมือนแม่ทำให้ทาน",
    "brand": {
      "@type": "Brand",
      "name": "kapoamom"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": siteConfig.identity.name
    }
  };
}
