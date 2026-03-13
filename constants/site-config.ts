/**
 * @file site-config.ts
 * @description ข้อมูลหลักร้าน ช.สหชัย เกี๊ยวปูหมูแดง - เน้นเส้นบะหมี่ไข่ 98% เหนียวหนึบ
 * @rule ห้ามใช้ Emoji ในโค้ดเด็ดขาด
 */

import { Soup, Utensils, Heart } from "lucide-react";

export const siteIdentity = {
  name: "ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก",
  fullName: "ช.สหชัย เกี๊ยวปูหมูแดง - ของอร่อยเมืองตาก บะหมี่ทำเอง 98% อิ่มคุ้มค่า",
  description:
    "แวะมาฝากท้องกับร้านลับเมืองตาก ช.สหชัย เกี๊ยวปูหมูแดง สัมผัสบะหมี่ทำเองไข่ 98% เหนียวหนึบสู้ฟัน หมูแดงย่างเตาถ่านหอมๆ บรรยากาศอบอุ่น ราคาเป็นกันเอง ครองใจคนตากมากว่า 9 ปี",
  url: "https://sahachai.aemdevweb.com",
  ogImage: "/images/founders-warmth.webp",
  themeColor: "#b22222",
  keywords: [
    "ร้านอาหารตาก 2569",
    "ของกินเมืองตาก",
    "ร้านอร่อยจังหวัดตาก",
    "บะหมี่ทำเอง ตาก",
    "บะหมี่ตาก",
    "ร้านลับเมืองตาก",
    "ช.สหชัย เกี๊ยวปูหมูแดง",
    "จัดเลี้ยงนอกสถานที่ ตาก",
  ],
};

export const contactInfo = {
  phone: "090-690-6080",
  phoneDisplay: "090-690-6080 (เฮียเนก/เจ๊ตั๊ก ยินดีรับสายจ้า)",
  lineId: "@698fqfdg",
  lineUrl: "https://lin.ee/7ZnLEUEZ",
  lineQrCode: "https://qr-official.line.me/gs/M_698fqfdg_GW.png?oat_content=qr",
  address: "91/1 ถนนมหาดไทยบำรุง ต.หนองหลวง อ.เมือง จ.ตาก 63000 (ใกล้สะพานกิตติขจร)",
  googleMaps: "https://maps.app.goo.gl/KLdnUCffDN6RZpTT8",
  businessHours: "10:30 - 21:00 น. (หยุดทุกวันอาทิตย์)",
};

export const navLinks = [
  { title: "หน้าแรก", href: "/" },
  { title: "เรื่องราว 9 ปี", href: "/about" },
  { title: "เมนูอิ่มจุใจ", href: "/#menu" },
  { title: "บรรยากาศบ้านๆ", href: "/#gallery" },
  { title: "รีวิวจากลูกค้า", href: "/#reviews" },
  { title: "ติดต่อเรา", href: "/#contact" },
];

export const heroContent = {
  badge: "ของอร่อยเมืองตาก ครองใจมากว่า 9 ปี",
  headlineLine1: "เหนียวหนึบ อิ่มคุ้ม",
  headlineLine2: "รสชาติที่ทุกคนเข้าถึงได้",
  description:
    "เฮียเนกและเจ๊ตั๊กตั้งใจทำบะหมี่ไข่สด 98% นวดเองทุกวัน เพื่อให้ทุกคนได้ทานของอร่อย เครื่องแน่นจุใจ ในราคาที่สบายกระเป๋า แวะมาทานกันให้อิ่มท้องนะครับ",
  ctaPrimary: { label: "ดูเมนูของเรา", href: "#menu" },
  ctaSecondary: { label: "เส้นทางมาร้าน", href: "#contact" },
  stats: [
    { value: "98%", label: "สัดส่วนไข่สด" },
    { value: "9+", label: "ปีที่ผูกพันกับคนตาก" },
    { value: "100%", label: "อิ่มอร่อยคุ้มค่า" },
  ],
};

export const signatureFeatures = [
  {
    icon: Soup,
    title: "เส้นบะหมี่ไข่ 98%",
    description:
      "จุดเด่นที่ทุกคนบอกต่อ คือเส้นที่เล็ก บาง แต่เหนียวหนึบด้วยส่วนผสมของไข่สดคุณภาพสูง 98%",
  },
  {
    icon: Heart,
    title: "บริการด้วยใจ",
    description:
      "เฮียเนกและเจ๊ตั๊กดูแลลูกค้าเหมือนคนในครอบครัว ให้เครื่องเยอะ อิ่มจุใจ ในบรรยากาศที่อบอุ่น",
  },
  {
    icon: Utensils,
    title: "เครื่องแน่น จุใจ",
    description:
      "เกี๊ยวปูคำโต เนื้อปูม้าสด และหมูแดงนุ่มฉ่ำ เราจัดเต็มให้คุณอิ่มท้องได้ในราคามิตรภาพ",
  },
];

export const cateringService = {
  title: "รับเหมานอกสถานที่ (Catering)",
  description:
    "บริการจัดเลี้ยงบะหมี่เกี๊ยวปู-หมูแดง สำหรับงานบุญ งานบวช งานแต่ง หรือหน่วยงานราชการในจังหวัดตาก เริ่มต้นเพียง 150 ชามขึ้นไป พร้อมอุปกรณ์ครบวงจร",
  highlights: ["เส้นบะหมี่ทำใหม่สด", "หมูแดงย่างเตาถ่านหอมๆ", "บริการรวดเร็วโดยทีมงานมืออาชีพ"],
  cta: "สอบถามราคาเหมา",
};
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
    {
      src: "/images/hero-noodle.webp",
      alt: "บะหมี่เกี๊ยวปูหมูแดง ช.สหชัย",
      title: "บะหมี่ไข่ 98% ซิกเนเจอร์",
    },
    {
      src: "/images/signature-98-noodle.webp",
      alt: "เกี๊ยวปูทำมือ ช.สหชัย",
      title: "งานฝีมือคุณภาพ",
    },
    {
      src: "/images/blog-noodle-1.webp",
      alt: "บะหมี่ไข่ทำเองสดใหม่",
      title: "เส้นบะหมี่เหนียวหนึบ",
    },
    { src: "/images/blog-noodle-2.webp", alt: "หมูแดงย่างหอมๆ", title: "ความใส่ใจในเครื่องปรุง" },
    { src: "/images/blog-noodle-3.webp", alt: "บรรยากาศความใจดี", title: "รอยยิ้มจากเจ๊ตั๊ก" },
    { src: "/images/master-hands.webp", alt: "เฮียเนกดูแลทุกชาม", title: "มาตรฐาน 9 ปี" },
  ],
};

export const siteConfig = {
  identity: siteIdentity,
  contact: contactInfo,
  navigation: navLinks,
  hero: heroContent,
  features: signatureFeatures,
  catering: cateringService,
  pricing: pricingContent,
  gallery: galleryContent,
};
