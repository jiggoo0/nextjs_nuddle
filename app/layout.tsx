import type React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.identity.url),
  title: siteConfig.identity.name,
  description: siteConfig.identity.description,
  keywords: siteConfig.identity.keywords,
  authors: [{ name: "Alogkorn Yomkerd (AEMZA MAX)", url: "https://www.me.aemdevweb.com" }],
  creator: "AEMDEVWEB - www.aemdevweb.com",
  publisher: "นายอลงกรณ์ ยมเกิด (Alogkorn Yomkerd)",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
