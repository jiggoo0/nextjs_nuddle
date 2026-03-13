import type React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: siteConfig.identity.name,
  description: siteConfig.identity.description,
  keywords: ["ช.สหชัย", "เกี๊ยวปูหมูแดง ตาก", "นายอเนก ยมเกิด", "เฮียเนก", "นางนัชรินทร์ ยมเกิด", "เจ๊ตั๊ก", "ร้านอาหารจังหวัดตาก"],
  authors: [{ name: "Alogkorn Yomkerd (AEMZA MAX)", url: "https://www.me.aemdevweb.com" }],
  creator: "AEMDEVWEB - www.aemdevweb.com",
  publisher: "นายอลงกรณ์ ยมเกิด (Alogkorn Yomkerd)",
  other: {
    "developer-contact": "https://www.aemdevweb.com",
    "developed-by": "AEMDEVWEB",
  }
};

export const viewport: Viewport = {
  viewportFit: 'cover',
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
