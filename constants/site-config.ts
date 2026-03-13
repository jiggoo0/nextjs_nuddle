/**
 * @file site-config.ts
 * @description ข้อมูลหลักร้าน ช.สหชัย เกี๊ยวปูหมูแดง - เน้นเส้นบะหมี่ไข่ 98% เหนียวหนึบ
 * @rule ห้ามใช้ Emoji ในโค้ดเด็ดขาด
 */

import { Soup, Utensils, Heart } from "lucide-react";

export const siteIdentity = {
  name: "ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก",
  fullName: "ช.สหชัย เกี๊ยวปูหมูแดง - บะหมี่ไข่ 98% เหนียวหนึบ หนึ่งเดียวในเมืองตาก",
  description: "สัมผัสเอกลักษณ์บะหมี่ไข่ 98% ที่เหนียวหนึบสู้ฟันไม่เหมือนใคร ความภูมิใจกว่า 9 ปีของเฮียเนกและเจ๊ตั๊ก พิกัดสะพานกิตติขจร เมืองตาก",
  url: "https://sahachai-noodle.aemdevweb.com",
  ogImage: "/images/founders-warmth.webp",
  themeColor: "#b22222",
  keywords: ["บะหมี่ไข่ 98%", "บะหมี่เหนียวหนึบ ตาก", "ช.สหชัย เกี๊ยวปูหมูแดง", "ร้านอร่อยเมืองตาก", "บะหมี่เกี๊ยวปู ตาก"]
};

export const contactInfo = {
  phone: "090-690-6080",
  phoneDisplay: "090-690-6080 (เฮียเนก/เจ๊ตั๊ก)",
  lineId: "@698fqfdg",
  lineUrl: "https://lin.ee/7ZnLEUEZ",
  lineQrCode: "https://qr-official.line.me/gs/M_698fqfdg_GW.png?oat_content=qr",
  address: "91/1 ถนนมหาดไทยบำรุง ต.หนองหลวง อ.เมือง จ.ตาก 63000",
  googleMaps: "https://maps.app.goo.gl/KLdnUCffDN6RZpTT8",
  businessHours: "10:30 - 21:00 น. (หยุดทุกวันอาทิตย์)",
};

export const navLinks = [
  { title: "หน้าแรก", href: "/" },
  { title: "เรื่องราว 9 ปี", href: "/about" },
  { title: "เมนูอิ่มจุใจ", href: "/#menu" },
  { title: "บรรยากาศร้าน", href: "/#gallery" },
  { title: "รีวิวลูกค้า", href: "/#reviews" },
  { title: "ติดต่อเรา", href: "/#contact" },
];

export const heroContent = {
  badge: "ตำนานบะหมี่ไข่ 98% หนึ่งเดียวในตาก",
  headlineLine1: "เหนียวหนึบ สู้ฟัน",
  headlineLine2: "รสชาติที่เป็นเอกลักษณ์",
  description: "เพราะเราใส่ใจในสัดส่วนไข่ที่สูงถึง 98% จนได้เส้นบะหมี่ที่เหนียวหนึบ ไม่เหมือนใคร เสิร์ฟพร้อมเกี๊ยวปูและหมูแดงสูตรลับ ในปริมาณที่อิ่มจุใจ",
  ctaPrimary: { label: "ดูรายการเมนู", href: "#menu" },
  ctaSecondary: { label: "เส้นทางมาร้าน", href: "#contact" },
  stats: [
    { value: "98%", label: "สัดส่วนไข่สด" },
    { value: "9+", label: "ปีที่ครองใจคนตาก" },
    { value: "100%", label: "ความเหนียวหนึบ" },
  ],
};

export const signatureFeatures = [
  {
    icon: Soup,
    title: "เส้นบะหมี่ไข่ 98%",
    description: "จุดเด่นที่ทุกคนบอกต่อ คือเส้นที่เล็ก บาง แต่เหนียวหนึบด้วยส่วนผสมของไข่สดคุณภาพสูง 98%",
  },
  {
    icon: Heart,
    title: "บริการด้วยใจ",
    description: "เฮียเนกและเจ๊ตั๊กดูแลลูกค้าเหมือนคนในครอบครัว ให้เครื่องเยอะ อิ่มจุใจ ในบรรยากาศที่อบอุ่น",
  },
  {
    icon: Utensils,
    title: "เครื่องแน่น จุใจ",
    description: "เกี๊ยวปูคำโต เนื้อปูม้าสด และหมูแดงนุ่มฉ่ำ เราจัดเต็มให้คุณอิ่มท้องได้ในราคามิตรภาพ",
  },
];

export const pricingContent = {
  badge: "เมนูยอดฮิต",
  title: "อิ่มอร่อยกับเส้นระดับตำนาน",
  description: "ราคาเป็นกันเอง เครื่องแน่นจุใจ เริ่มต้นเพียง 40.-",
  tiers: [
    {
      name: "บะหมี่เกี๊ยวหมูแดง",
      price: "฿45 - 50",
      period: "",
      description: "สัมผัสความหนึบของเส้นบะหมี่ไข่ 98% คู่กับหมูแดงสูตรลับ",
      features: ["เส้นบะหมี่ไข่ 98%", "หมูแดงสูตรต้นตำรับ", "เกี๊ยวหมูแน่นๆ", "น้ำซุปกลมกล่อม"],
      cta: "สั่งชามนี้",
      highlighted: false,
    },
    {
      name: "บะหมี่เกี๊ยวปูหมูแดง",
      price: "฿55 - 60",
      period: "",
      description: "เมนูซิกเนเจอร์ที่พรีเมียมที่สุด รวมทุกความอร่อยไว้ในชามเดียว",
      features: ["เนื้อปูม้าสดใหม่", "เส้นเหนียวหนึบพิเศษ", "เกี๊ยวปูชิ้นใหญ่", "อิ่มจุใจแน่นอน"],
      cta: "เมนูขายดีอันดับ 1",
      highlighted: true,
    },
    {
      name: "หมูกรอบ / ข้าวหมูกรอบ",
      price: "฿50 - 60",
      period: "",
      description: "หมูกรอบสะอาด หนังบางกรอบ รสชาติสไตล์เมืองตาก",
      features: ["หมูกรอบคัดเกรด", "น้ำราดสูตรเข้มข้น", "เครื่องเคียงครบชุด", "อิ่มท้องกำลังดี"],
      cta: "สายกรอบต้องลอง",
      highlighted: false,
    },
  ],
};

export const galleryContent = {
  badge: "ภาพบรรยากาศความอร่อย",
  title: "ความสุขในทุกๆ คำ",
  items: [
    { src: "/images/hero-noodle.webp", alt: "บะหมี่เกี๊ยวปูหมูแดง ช.สหชัย", title: "บะหมี่ไข่ 98% ซิกเนเจอร์" },
    { src: "/images/noodle-special.webp", alt: "เกี๊ยวปูทำมือ ช.สหชัย", title: "งานฝีมือคุณภาพ" },
    { src: "/images/blog-noodle-1.webp", alt: "บะหมี่ไข่ทำเองสดใหม่", title: "เส้นบะหมี่เหนียวหนึบ" },
    { src: "/images/blog-noodle-2.webp", alt: "หมูแดงย่างหอมๆ", title: "ความใส่ใจในเครื่องปรุง" },
    { src: "/images/blog-noodle-3.webp", alt: "บรรยากาศความใจดี", title: "รอยยิ้มจากเจ๊ตั๊ก" },
    { src: "/images/blog-noodle-4.webp", alt: "เฮียเนกดูแลทุกชาม", title: "มาตรฐาน 9 ปี" },
  ]
};

export const siteConfig = {
  identity: siteIdentity,
  contact: contactInfo,
  navigation: navLinks,
  hero: heroContent,
  features: signatureFeatures,
  pricing: pricingContent,
  gallery: galleryContent,
};
