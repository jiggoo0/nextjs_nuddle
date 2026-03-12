/**
 * @file site-config.ts
 * @description Single Source of Truth (SSOT) สำหรับข้อมูลทั้งหมดในโปรเจกต์
 * @architecture Industrial Template Architecture
 * @rule ห้าม Hardcode ข้อความใดๆ ลงใน Component (.tsx) ให้มาแก้ไขที่ไฟล์นี้ 100%
 */

import { Soup, UtensilsCrossed, Star, LucideIcon } from "lucide-react";

// ============================================================================
// 1. CORE SITE IDENTITY (ข้อมูลหลักของเว็บไซต์)
// ============================================================================
export const siteIdentity = {
  name: "ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก",
  description: "ที่สุดของบะหมี่เกี๊ยวปูในจังหวัดตาก หมูแดงย่างเตาถ่านสูตรโบราณ เปิดมาแล้วกว่า 9 ปี",
  url: "https://sahachai-noodle.aemdevweb.com",
  ogImage: "https://sahachai-noodle.aemdevweb.com/images/hero-noodle.webp",
  themeColor: "#b22222",
};

export const contactInfo = {
  email: "contact@sahachaitak.com",
  phone: "083-630-1174",
  address: "ตรงข้ามร้านทอง สินสุวรรณ 3 ต.ระแหง อ.เมือง จ.ตาก 63000",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/SahachaiNoodleTak",
  line: "@sahachaitak",
  linkedin: "",
};

// ============================================================================
// 2. NAVIGATION (เมนูนำทาง)
// ============================================================================
export type NavLink = { title: string; href: string; label?: string };

export const navLinks: NavLink[] = [
  { title: "หน้าแรก", href: "/" },
  { title: "เรื่องราว", href: "/about" },
  { title: "เมนูแนะนำ", href: "/#menu" },
  { title: "บทความ", href: "/blog" },
  { title: "ติดต่อเรา", href: "/#contact" },
];

// ============================================================================
// 3. HERO SECTION (ส่วนหน้าแรกสุด)
// ============================================================================
export const heroContent = {
  badge: "สูตรลับกว่า 9 ปี",
  headlineLine1: "ช.สหชัย",
  headlineLine2: "เกี๊ยวปูหมูแดง จ.ตาก",
  description:
    "ที่สุดของบะหมี่ทำเองสูตรโบราณ หมูแดงอบน้ำผึ้งย่างเตาถ่าน และเกี๊ยวปูเนื้อแน่นๆ ของดีเมืองตากที่คุณต้องลอง",
  ctaPrimary: {
    label: "สั่งอาหารออนไลน์",
    href: "https://www.facebook.com/SahachaiNoodleTak",
  },
  ctaSecondary: {
    label: "ดูเมนูทั้งหมด",
    href: "#protocols",
  },
  stats: [
    { value: "9+", label: "ปีที่เปิดบริการ" },
    { value: "500+", label: "รีวิวระดับ 5 ดาว" },
    { value: "100%", label: "ทำเองทุกขั้นตอน" },
  ],
};

// ============================================================================
// 4. PROTOCOLS SECTION (เมนูแนะนำ / จุดเด่นของร้าน)
// ============================================================================
export type Protocol = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export const protocolsContent = {
  badge: "// เมนูซิกเนเจอร์",
  title: "รสชาติที่เป็นเอกลักษณ์",
  description:
    "จากสูตรดั้งเดิมกว่า 9 ปี เราคัดสรรวัตถุดิบคุณภาพเยี่ยม เพื่อส่งต่อความอร่อยในทุกๆ ชาม",
  items: [
    {
      icon: Soup,
      title: "บะหมี่เกี๊ยวปูหมูแดง",
      description:
        "บะหมี่ไข่ทำเองเส้นเหนียมนุ่ม เสิร์ฟพร้อมเกี๊ยวปูชิ้นโต และหมูแดงอบน้ำผึ้งย่างเตาถ่านสูตรพิเศษที่นุ่มฉ่ำไม่เหมือนใคร",
      features: [
        "บะหมี่ไข่สดทำเองทุกวัน",
        "เกี๊ยวปูเนื้อแน่น",
        "หมูแดงอบน้ำผึ้งย่างเตาถ่าน",
        "น้ำซุปกระดูกหมูเข้มข้น",
      ],
    },
    {
      icon: UtensilsCrossed,
      title: "หมูแดงย่างเตาถ่าน",
      description:
        "หมูส่วนสันคอคัดพิเศษ หมักด้วยเครื่องยาจีนและน้ำผึ้งแท้ ย่างด้วยเตาถ่านแบบโบราณจนได้ความหอมและรสชาติที่กลมกล่อม",
      features: [
        "ย่างด้วยเตาถ่านโบราณ",
        "น้ำราดสูตรลับเฉพาะ",
        "หมูสันคอคัดพิเศษ",
        "เสิร์ฟร้อนๆ ทุกจาน",
      ],
    },
    {
      icon: Star,
      title: "เกี๊ยวปูทำมือ",
      description:
        "เกี๊ยวแผ่นบางสอดไส้ด้วยหมูสับปรุงรสและเนื้อปูม้าสดๆ ห่อด้วยมือทุกชิ้น เพื่อให้ได้รสสัมผัสที่เต็มคำที่สุด",
      features: [
        "เนื้อปูม้าสดส่งตรงทุกวัน",
        "ห่อมือชิ้นต่อชิ้น",
        "ไส้แน่นเต็มคำ",
        "ไม่มีสารกันบูด",
      ],
    },
  ] as Protocol[],
};

// ============================================================================
// 5. PRICING SECTION (รายการราคา)
// ============================================================================
export type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
};

export const pricingContent = {
  badge: "// ราคามิตรภาพ",
  title: "เลือกความอร่อยในแบบคุณ",
  description:
    "ราคาคุ้มค่ากับคุณภาพที่คุณได้รับ เราคัดสรรสิ่งที่ดีที่สุดมาให้ในทุกๆ ชาม",
  tiers: [
    {
      name: "ธรรมดา",
      price: "฿50",
      period: "/ชาม",
      description: "อิ่มอร่อยพอดีคำกับสูตรดั้งเดิม",
      features: [
        "บะหมี่ไข่สด",
        "หมูแดงอบน้ำผึ้ง",
        "เกี๊ยวปู 2 ชิ้น",
        "น้ำซุปหอมหวาน",
      ],
      cta: "สั่งชามนี้",
      highlighted: false,
    },
    {
      name: "พิเศษ",
      price: "฿60",
      period: "/ชาม",
      description: "เพิ่มความฟินด้วยเนื้อปูและเครื่องเน้นๆ",
      features: [
        "บะหมี่ไข่ 2 ก้อน",
        "หมูแดงเพิ่มพิเศษ",
        "เกี๊ยวปู 4 ชิ้น",
        "เนื้อปูม้าโรยหน้า",
        "น้ำซุปถ้วยโต",
      ],
      cta: "สั่งพิเศษเลย",
      highlighted: true,
    },
    {
      name: "จัมโบ้ / รวมมิตร",
      price: "฿80",
      period: "/ชาม",
      description: "จัดเต็มสำหรับคนรักบะหมี่ตัวจริง",
      features: [
        "บะหมี่ไข่ 3 ก้อน",
        "หมูแดง + เกี๊ยวปูแบบจุใจ",
        "เนื้อปูม้าพรีเมียม",
        "เครื่องรวมมิตรทุกอย่าง",
        "บริการจัดส่งฟรี (ในเขตที่กำหนด)",
      ],
      cta: "สั่งชุดใหญ่",
      highlighted: false,
    },
  ] as PricingTier[],
};

// ============================================================================
// 6. PORTFOLIO SECTION (แกลเลอรีความอร่อย)
// ============================================================================
export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  span: string;
  aspect: string;
};

export const portfolioContent = {
  badge: "// แกลเลอรี",
  title: "ความอร่อยที่พิสูจน์ได้",
  description:
    "บรรยากาศร้านและเมนูยอดฮิตที่ครองใจชาวจังหวัดตากและนักท่องเที่ยวมาอย่างยาวนาน",
  items: [
    {
      title: "บะหมี่เกี๊ยวปูหมูแดงซิกเนเจอร์",
      category: "เมนูหลัก",
      image: "/images/hero-noodle.webp",
      span: "lg:col-span-2 lg:row-span-2",
      aspect: "aspect-square lg:aspect-auto lg:h-full",
    },
    {
      title: "บะหมี่แห้งพิเศษปู",
      category: "เมนูแนะนำ",
      image: "/images/noodle-special.webp",
      span: "",
      aspect: "aspect-[4/3]",
    },
    {
      title: "บรรยากาศหน้าร้าน",
      category: "จุดเช็คอิน",
      image: "/images/hero-noodle.webp",
      span: "",
      aspect: "aspect-[4/3]",
    },
    {
      title: "หมูแดงย่างเตาถ่านสดๆ",
      category: "เบื้องหลังความอร่อย",
      image: "/images/noodle-special.webp",
      span: "",
      aspect: "aspect-[4/3]",
    },
    {
      title: "เกี๊ยวปูห่อใหม่ทุกวัน",
      category: "วัตถุดิบ",
      image: "/images/hero-noodle.webp",
      span: "",
      aspect: "aspect-[4/3]",
    },
    {
      title: "ความสุขในทุกคำ",
      category: "รีวิวลูกค้า",
      image: "/images/noodle-special.webp",
      span: "lg:col-span-2",
      aspect: "aspect-[4/3] lg:aspect-[21/9]",
    },
  ] as PortfolioItem[],
};

// ============================================================================
// 7. FOOTER SECTION (ส่วนท้าย)
// ============================================================================
export const footerContent = {
  copyright: `© ${new Date().getFullYear()} ${siteIdentity.name}. All rights reserved.`,
  links: navLinks,
};

// ============================================================================
// 8. LEAD CAPTURE / CONTACT FORM (สั่งซื้อ / ติดต่อ)
// ============================================================================
export const leadCaptureContent = {
  badge: "// ติดต่อเรา",
  title: "สั่งอาหารล่วงหน้า",
  description:
    "กรอกข้อมูลเพื่อสั่งอาหารล่วงหน้า หรือสอบถามเส้นทาง ร้านของเรายินดีให้บริการทุกท่านครับ",
  successTitle: "รับข้อมูลเรียบร้อย",
  successDescription:
    "ขอบคุณที่เลือก ช.สหชัย เราจะดำเนินการเตรียมความอร่อยให้ท่านโดยเร็วที่สุด",
  buttonText: "ส่งข้อมูล",
  fields: {
    name: { label: "ชื่อของคุณ", placeholder: "เช่น คุณสมชาย" },
    email: { label: "เบอร์โทรศัพท์", placeholder: "08x-xxx-xxxx" },
    company: { label: "เมนูที่ต้องการ", placeholder: "เช่น บะหมี่เกี๊ยวปู 2 ห่อ" },
  },
};

// ============================================================================
// EXPORT AGGREGATOR
// ============================================================================
export const siteConfig = {
  identity: siteIdentity,
  contact: contactInfo,
  socials: socialLinks,
  navigation: navLinks,
  hero: heroContent,
  protocols: protocolsContent,
  pricing: pricingContent,
  portfolio: portfolioContent,
  footer: footerContent,
  leadCapture: leadCaptureContent,
};
