import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Flame,
  Heart,
  ShoppingBag,
  ShieldCheck,
  Leaf,
  Clock,
  ArrowRight,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: "ซอสผัดกะเพรา kapoamom | สูตรแม่ทำให้ทาน อร่อยใน 2 นาที ไม่ต้องปรุงเพิ่ม",
  description:
    "สัมผัสรสชาติกะเพราแท้สูตรลับ 9 ปี ช.สหชัย เมืองตาก หอมกลิ่นเตาถ่าน จัดจ้านถึงใจ แค่เทซอส kapoamom 2-3 ช้อน ผัดกับเนื้อสัตว์ 2 นาที ก็อร่อยระดับตำนานเหมือนแม่มาผัดให้เอง สั่งจองล่วงหน้าได้ที่นี่!",
  keywords: [
    "ซอสผัดกะเพรา", 
    "กะเพราสำเร็จรูป", 
    "kapoamom", 
    "ซอสกะเพราไม่ต้องปรุงเพิ่ม", 
    "ช.สหชัย เมืองตาก", 
    "สูตรลับ 9 ปี", 
    "ผัดกะเพราให้อร่อย",
    "ซอสปรุงรสกะเพรา"
  ],
  openGraph: {
    title: "จบปัญหาผัดกะเพราไม่อร่อย! ด้วยซอส kapoamom ฝีมือแม่",
    description:
      "สูตรลับความอร่อย 9 ปีจากร้าน ช.สหชัย ส่งตรงถึงบ้านคุณ แค่เทแล้วผัด 2 นาที ก็ได้กะเพราที่จริงใจ หอมกลิ่นเตาถ่าน ไม่ต้องปรุงเพิ่ม!",
    url: `${siteConfig.identity.url}/kapoamom`,
    siteName: `kapoamom by ${siteConfig.identity.name}`,
    images: [
      {
        url: "/og-kapoamom.webp",
        width: 1200,
        height: 630,
        alt: "ซอสผัดกะเพรา kapoamom สูตรลับแม่ทำให้ทาน",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ซอสผัดกะเพรา kapoamom | อร่อยระดับตำนานใน 2 นาที",
    description: "ไม่ต้องปรุงเพิ่ม แค่มีซอส kapoamom ขวดเดียว ก็อร่อยเหมือนทานที่ร้าน ช.สหชัย",
    images: ["/og-kapoamom.webp"],
  },
};

export default function KapoamomPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFDF9] text-[#4A3728]">
      <Navigation />

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div
            className="absolute top-0 left-0 h-full w-full bg-center bg-repeat opacity-10"
            style={{ backgroundImage: "url('/images/hero-bg-texture.webp')" }}
          />
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <AnimatedSection className="space-y-8 text-center lg:text-left">
                <Badge className="rounded-full border-none bg-[#E85D04]/10 px-4 py-1.5 font-bold tracking-widest text-[#E85D04] uppercase">
                  Authentic Taste since 2017
                </Badge>
                <h1 className="text-5xl leading-tight font-black tracking-tighter md:text-7xl">
                  แบรนด์ <span className="font-serif text-[#E85D04] italic">kapoamom</span> <br />
                  ซอสผัดกะเพราฝีมือแม่
                </h1>
                <p className="mx-auto max-w-xl text-xl leading-relaxed font-medium text-[#6B5B4B] md:text-2xl lg:mx-0">
                  "อร่อยเหมือนกะเพราแม่ที่ผัดให้แน่นอน" รสชาติจัดจ้านถึงใจ ไม่ต้องปรุงเพิ่ม
                  แค่เทแล้วผัด ก็อร่อยระดับตำนาน
                </p>
                <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
                  <Button
                    className="h-16 w-full rounded-2xl bg-[#E85D04] px-10 text-lg font-black text-white shadow-xl shadow-[#E85D04]/20 hover:bg-[#D05403] sm:w-auto"
                    asChild
                  >
                    <Link href="#order">
                      <ShoppingBag className="mr-2 h-5 w-5" /> สั่งซื้อเลย (เร็วๆ นี้)
                    </Link>
                  </Button>

                  {/* AEMDEVWEB STRATEGIC PARTNER INFO */}
                  <div className="flex items-center gap-3 rounded-2xl border border-[#E85D04]/10 bg-white/50 p-4 shadow-sm backdrop-blur-sm">
                    <Shield className="h-5 w-5 text-[#E85D04]" />
                    <div className="text-left leading-none">
                      <p className="mb-1 text-[10px] font-black tracking-widest text-[#E85D04] uppercase">
                        Managed by
                      </p>
                      <p className="text-sm font-black italic">AEMDEVWEB</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="relative">
                <div className="absolute inset-0 animate-pulse rounded-full bg-[#E85D04]/10 blur-3xl" />
                <div className="relative aspect-square overflow-hidden rounded-[4rem] border-[16px] border-white shadow-2xl">
                  <Image
                    src="/images/kapoamom-sauce.webp"
                    alt="ซอสผัดกะเพรา kapoamom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 z-20 hidden rounded-[2.5rem] border border-[#E85D04]/10 bg-white p-8 shadow-2xl md:block">
                  <div className="mb-2 flex items-center gap-4">
                    <ShieldCheck className="h-8 w-8 text-[#E85D04]" />
                    <span className="text-lg font-black">มาตรฐาน ช.สหชัย</span>
                  </div>
                  <p className="text-sm font-medium text-[#6B5B4B] italic">
                    ส่งต่อความอร่อยโดย AEMDEVWEB
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* STRATEGIC BRANDING SECTION (WOW FACTOR) */}
        <section className="overflow-hidden border-y border-[#E85D04]/5 bg-white py-16">
          <div className="container mx-auto px-6">
            <AnimatedSection className="mx-auto max-w-5xl">
              <div className="group relative overflow-hidden rounded-[4rem] border border-[#E85D04]/10 bg-[#FFFDF9] p-10 shadow-sm md:p-16">
                <div className="absolute top-0 right-0 -mt-48 -mr-48 h-96 w-96 rounded-full bg-[#E85D04]/5 transition-transform duration-1000 group-hover:scale-110" />
                <div className="relative z-10 flex flex-col items-center gap-12 text-center md:flex-row md:text-left">
                  <div className="bg-primary shadow-primary/20 flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl text-white shadow-2xl">
                    <Shield className="h-12 w-12" />
                  </div>
                  <div className="space-y-4">
                    <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black tracking-[0.2em] uppercase">
                      Strategic Business Support
                    </Badge>
                    <h3 className="text-3xl leading-tight font-black tracking-tight text-[#4A3728]">
                      เบื้องหลังความสำเร็จของแบรนด์ <br className="hidden md:block" />
                      คือความเชี่ยวชาญจาก{" "}
                      <span className="text-primary font-serif text-2xl uppercase italic">
                        AEMDEVWEB
                      </span>
                    </h3>
                    <p className="text-lg leading-relaxed font-medium text-[#6B5B4B]">
                      ผลิตภัณฑ์แบรนด์ <strong>kapoamom</strong> ได้รับการวางรากฐานทางธุรกิจ
                      การสร้างตัวตนดิจิทัล และการตลาดออนไลน์ทุกขั้นตอนโดยทีมงาน{" "}
                      <strong>AEMDEVWEB</strong>{" "}
                      เพื่อยกระดับความอร่อยจากหน้าเตาสู่มาตรฐานสากลที่พร้อมส่งต่อความสุขให้ทุกครอบครัว
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="bg-[#FFFDF9] py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-black tracking-tighter text-[#4A3728] md:text-5xl">
                ทำไมต้องซอสกะเพรา <span className="text-[#E85D04]">kapoamom</span>?
              </h2>
              <p className="text-lg font-medium text-[#6B5B4B]">
                คัดสรรคุณภาพและนวัตกรรมการผลิตภายใต้การดูแลของทีมผู้เชี่ยวชาญ
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  icon: Leaf,
                  title: "วัตถุดิบจากธรรมชาติ",
                  desc: "ใช้ใบกะเพราสดแท้และพริกคุณภาพดี ไม่ใช้สารกันเสีย",
                },
                {
                  icon: Flame,
                  title: "กลิ่นหอมเตาถ่าน",
                  desc: "สูตรลับการเคี่ยวซอสที่ให้กลิ่นอายความหอมแบบดั้งเดิม",
                },
                {
                  icon: Clock,
                  title: "ประหยัดเวลา",
                  desc: "ผัดเสร็จภายใน 2 นาที ไม่ต้องปรุงเพิ่ม อร่อยแน่นอน",
                },
              ].map((feature, idx) => (
                <AnimatedSection
                  key={idx}
                  delay={idx * 0.1}
                  className="rounded-[3rem] border border-[#4A3728]/5 bg-white p-10 shadow-sm transition-all duration-500 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E85D04]/10 text-[#E85D04]">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 text-xl font-black text-[#4A3728]">{feature.title}</h3>
                  <p className="leading-relaxed font-medium text-[#6B5B4B]">{feature.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* STORY & USAGE SECTION */}
        <section id="story" className="bg-white py-24">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-20 lg:grid-cols-2">
              <AnimatedSection className="relative order-2 lg:order-1">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3.5rem] border-[12px] border-white shadow-2xl">
                  <Image
                    src="/images/kapoamom-action.webp"
                    alt="ขั้นตอนการปรุงซอสกะเพราฝีมือแม่"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection className="order-1 space-y-8 lg:order-2">
                <div className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E85D04]/10 text-[#E85D04]">
                  <Heart className="h-8 w-8" />
                </div>
                <h2 className="text-4xl font-black tracking-tighter text-[#4A3728] md:text-5xl">
                  จากความตั้งใจของ <br />
                  <span className="text-[#E85D04]">"แม่" สู่ขวดคุณ</span>
                </h2>
                <div className="space-y-6 text-left text-lg leading-relaxed font-medium text-[#6B5B4B]">
                  <p>
                    <strong>kapoamom</strong> เริ่มต้นจากความต้องการของเฮียเนกและเจ๊ตั๊ก
                    ที่อยากให้ลูกค้าที่อยู่ไกลได้ทานรสชาติกะเพราที่จริงใจเหมือนที่เจ๊ตั๊กตั้งใจผัดให้ลูกๆ
                    ทานที่บ้าน
                  </p>
                  <p>
                    เราใช้เวลากว่า 1 ปีในการทดลองและปรับปรุงสูตร
                    จนได้ซอสผัดกะเพราอเนกประสงค์ที่คงความสดใหม่ของวัตถุดิบ และรสชาติที่เสถียรที่สุด
                    ไม่ว่าใครจะผัด ก็อร่อยเหมือนแม่มาทำให้เองจริงๆ
                  </p>
                  <ul className="space-y-4 pt-4 text-sm font-bold">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#E85D04]" /> แค่เตรียมเนื้อสัตว์
                      150-200 กรัม
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#E85D04]" /> ใช้ซอสเพียง 2-3 ช้อนโต๊ะ
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#E85D04]" /> ผัดให้เข้ากัน
                      พร้อมเสิร์ฟความอร่อย
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ORDER / CTA SECTION */}
        <section id="order" className="relative overflow-hidden bg-[#E85D04] py-24">
          <div className="absolute top-0 right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="mx-auto max-w-4xl space-y-10 text-center">
              <h2 className="text-4xl leading-tight font-black tracking-tighter text-white md:text-6xl">
                เตรียมสัมผัสความอร่อย <br /> เร็วๆ นี้ ที่ ช.สหชัย
              </h2>
              <p className="text-xl font-medium text-white/80">
                ร่วมเป็นกลุ่มแรกที่ได้ลิ้มลองความจัดจ้านของซอสกะเพรา kapoamom{" "}
                <br className="hidden md:block" />
                เรากำลังเร่งเตรียมความพร้อมภายใต้การดูแลของ AEMDEVWEB
              </p>
              <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-[2rem] bg-white px-12 py-5 text-xl font-black text-[#E85D04] shadow-2xl transition-all hover:-translate-y-1 active:scale-95"
                >
                  ลงชื่อจองล่วงหน้า <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
