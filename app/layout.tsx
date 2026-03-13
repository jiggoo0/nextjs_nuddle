import type React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.identity.url),
  title: {
    default: siteConfig.identity.name,
    template: `%s | ${siteConfig.identity.name}`,
  },
  description: siteConfig.identity.description,
  keywords: siteConfig.identity.keywords,
  authors: [{ name: "Alogkorn Yomkerd (AEMZA MAX)", url: "https://www.me.aemdevweb.com" }],
  creator: "AEMDEVWEB - www.aemdevweb.com",
  publisher: "นายอลงกรณ์ ยมเกิด (Alogkorn Yomkerd)",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.identity.name,
    description: siteConfig.identity.description,
    url: siteConfig.identity.url,
    siteName: siteConfig.identity.name,
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: siteConfig.identity.name,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.identity.name,
    description: siteConfig.identity.description,
    images: ["/og-main.png"],
  },
  other: {
    "developer-contact": "https://www.aemdevweb.com",
    "developed-by": "AEMDEVWEB",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: siteConfig.identity.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": siteConfig.identity.name,
    "image": [`${siteConfig.identity.url}${siteConfig.identity.ogImage}`],
    "description": siteConfig.identity.description,
    "url": siteConfig.identity.url,
    "telephone": siteConfig.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "91/1 ถนนมหาดไทยบำรุง ต.หนองหลวง",
      "addressLocality": "เมืองตาก",
      "addressRegion": "ตาก",
      "postalCode": "63000",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.883,
      "longitude": 99.123
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:30",
      "closes": "21:00"
    },
    "servesCuisine": "Thai Noodle",
    "priceRange": "฿",
    "founder": {
      "@type": "Person",
      "name": "เฮียเนก (คุณชายบะหมี่)"
    },
    "author": {
      "@type": "Organization",
      "name": "AEMDEVWEB",
      "url": "https://www.aemdevweb.com"
    }
  };

  return (
    <html lang="th" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
