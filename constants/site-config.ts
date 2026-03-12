/**
 * @file site-config.ts
 * @description Single Source of Truth (SSOT) สำหรับข้อมูลทั้งหมดในโปรเจกต์
 * @architecture Industrial Template Architecture
 * @rule ห้าม Hardcode ข้อความใดๆ ลงใน Component (.tsx) ให้มาแก้ไขที่ไฟล์นี้ 100%
 */

import { Eye, Bot, Layers, LucideIcon } from "lucide-react";

// ============================================================================
// 1. CORE SITE IDENTITY (ข้อมูลหลักของเว็บไซต์)
// ============================================================================
export const siteIdentity = {
  name: "ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก",
  description: "ที่สุดของบะหมี่เกี๊ยวปูในจังหวัดตาก หมูแดงย่างเตาถ่านสูตรโบราณ เปิดมาแล้วกว่า 9 ปี",
  url: "https://sahachai.aemdevweb.com",
  ogImage: "https://sahachai.aemdevweb.com/images/banner.jpg",
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
  { title: "เมนูแนะนำ", href: "/menu" },
  { title: "ติดต่อเรา", href: "/contact" },
];

// ============================================================================
// 3. HERO SECTION (ส่วนหน้าแรกสุด)
// ============================================================================
export const heroContent = {
  badge: "Next-Gen Visual Systems",
  headlineLine1: "Elite Visual Strategy",
  headlineLine2: "& AI Protocol",
  description:
    "High-performance digital frameworks and AI-driven visual systems for global-scale brands.",
  ctaPrimary: {
    label: "Initialize Protocol",
    href: "#contact",
  },
  ctaSecondary: {
    label: "Explore Systems",
    href: "#protocols",
  },
  stats: [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "150+", label: "Brands Served" },
    { value: "<50ms", label: "Response Time" },
  ],
};

// ============================================================================
// 4. PROTOCOLS SECTION (บริการ / ระบบการทำงาน)
// ============================================================================
export type Protocol = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export const protocolsContent = {
  badge: "// Core Systems",
  title: "Core Protocols",
  description:
    "Three integrated systems engineered for maximum performance and seamless brand execution.",
  items: [
    {
      icon: Eye,
      title: "Visual Intelligence",
      description:
        "AI-powered design analysis and generation systems that create pixel-perfect visual assets at scale. Real-time brand consistency enforcement across all touchpoints.",
      features: [
        "Automated design audits",
        "AI asset generation",
        "Brand compliance engine",
        "Multi-format optimization",
      ],
    },
    {
      icon: Bot,
      title: "Strategic Automation",
      description:
        "Intelligent workflow orchestration that eliminates manual bottlenecks. Self-optimizing pipelines that adapt to your team's velocity and project complexity.",
      features: [
        "Workflow orchestration",
        "Predictive scheduling",
        "Auto-scaling pipelines",
        "Performance analytics",
      ],
    },
    {
      icon: Layers,
      title: "Elite UI/UX",
      description:
        "Research-driven interface design backed by behavioral analytics and A/B tested interaction patterns. Enterprise-grade design systems built for scale.",
      features: [
        "Behavioral analytics",
        "Interaction design",
        "Design system architecture",
        "Accessibility audits",
      ],
    },
  ] as Protocol[],
};

// ============================================================================
// 5. PRICING SECTION (แพ็กเกจราคา)
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
  badge: "// Strategic Pricing",
  title: "Select Your Protocol",
  description:
    "Scalable pricing tiers designed for every stage of growth. All plans include core AI infrastructure.",
  tiers: [
    {
      name: "Basic",
      price: "$2,400",
      period: "/month",
      description: "Essential visual systems for emerging brands.",
      features: [
        "Brand identity design",
        "Up to 5 pages UI/UX",
        "Basic AI asset generation",
        "Monthly design audits",
        "Email support",
      ],
      cta: "Select Basic",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$5,800",
      period: "/month",
      description: "Advanced AI protocols for scaling operations.",
      features: [
        "Full design system architecture",
        "Unlimited pages UI/UX",
        "Advanced AI visual engine",
        "Weekly performance reports",
        "Strategic automation pipelines",
        "Priority support",
        "Dedicated account manager",
      ],
      cta: "Select Pro",
      highlighted: true,
    },
    {
      name: "Elite",
      price: "$12,000",
      period: "/month",
      description: "Complete enterprise-grade visual infrastructure.",
      features: [
        "Custom AI model training",
        "Enterprise design system",
        "24/7 dedicated team",
        "Real-time brand compliance",
        "Multi-platform deployment",
        "Executive strategy sessions",
        "SLA-backed uptime guarantee",
        "White-glove onboarding",
      ],
      cta: "Select Elite",
      highlighted: false,
    },
  ] as PricingTier[],
};

// ============================================================================
// 6. PORTFOLIO SECTION (ผลงาน)
// ============================================================================
export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  span: string;
  aspect: string;
};

export const portfolioContent = {
  badge: "// Case Studies",
  title: "Portfolio",
  description:
    "A selection of AI-generated visuals and strategic design systems deployed for enterprise clients.",
  items: [
    {
      title: "Neural Network Visualization",
      category: "AI Visual System",
      image: "/portfolio-ai-visual-1.jpg",
      span: "lg:col-span-2 lg:row-span-2",
      aspect: "aspect-square lg:aspect-auto lg:h-full",
    },
    {
      title: "Analytics Dashboard",
      category: "UI/UX Design",
      image: "/portfolio-ai-visual-2.jpg",
      span: "",
      aspect: "aspect-[4/3]",
    },
    {
      title: "Geometric Identity",
      category: "Brand System",
      image: "/portfolio-ai-visual-3.jpg",
      span: "",
      aspect: "aspect-[4/3]",
    },
    {
      title: "Machine Vision",
      category: "AI Protocol",
      image: "/portfolio-ai-visual-4.jpg",
      span: "",
      aspect: "aspect-[4/3]",
    },
    {
      title: "Particle Systems",
      category: "Generative Art",
      image: "/portfolio-ai-visual-5.jpg",
      span: "",
      aspect: "aspect-[4/3]",
    },
    {
      title: "Brand Architecture",
      category: "Design System",
      image: "/portfolio-ai-visual-6.jpg",
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
// 8. LEAD CAPTURE / CONTACT FORM (ฟอร์มติดต่อ)
// ============================================================================
export const leadCaptureContent = {
  badge: "// Initialize",
  title: "Start Your Protocol",
  description:
    "Submit your details and our strategy team will prepare a custom deployment plan within 24 hours.",
  successTitle: "Protocol Initialized",
  successDescription:
    "Our team will contact you within 24 hours with your custom deployment plan.",
  buttonText: "Submit Request",
  fields: {
    name: { label: "Full Name", placeholder: "John Doe" },
    email: { label: "Work Email", placeholder: "john@company.com" },
    company: { label: "Company", placeholder: "Acme Inc." },
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
