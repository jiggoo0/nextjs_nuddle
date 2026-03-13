import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, ShieldCheck, GraduationCap, Coins } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: `เรื่องราว 9 ปีของเฮียเนก | ${siteConfig.identity.name}`,
  description:
    "จากเครื่องแบบสีกากีสู่ผ้ากันเปื้อนแดง เรื่องราวการต่อสู้ 9 ปีของนายอเนก ยมเกิด ผู้สร้างตำนานบะหมี่ไข่ 98% เพื่อความสำเร็จของครอบครัว",
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-grow pt-24 pb-20">
        {/* HERO SECTION: THE LEGACY */}
        <section className="bg-primary/5 relative overflow-hidden py-24 md:py-32">
          <div className="bg-primary/10 absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full opacity-60 blur-3xl" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="mx-auto max-w-4xl space-y-8 text-center">
              <AnimatedSection>
                <Badge className="bg-primary/10 text-primary mb-6 rounded-full border-none px-4 py-1.5 font-bold tracking-widest uppercase">
                  9 Years Anniversary Legacy
                </Badge>
                <h1 className="mb-6 text-5xl leading-tight font-black tracking-tighter md:text-7xl">
                  จาก <span className="text-primary font-serif italic">"เครื่องแบบ"</span> <br />
                  สู่ <span className="text-primary font-serif italic">"ผ้ากันเปื้อน"</span>
                </h1>
                <p className="text-muted-foreground text-xl leading-relaxed font-medium md:text-2xl">
                  เรื่องราวชีวิตของ นายอเนก ยมเกิด (เฮียเนก) <br className="hidden md:block" />
                  บทพิสูจน์เกียรติยศที่แท้จริง... ที่วัดกันด้วย "หยาดเหงื่อ" และ "ความรัก"
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 1: THE TRANSITION (FROM POLICE TO NOODLE VENDOR) */}
        <section className="bg-background py-24">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <AnimatedSection className="relative order-2 md:order-1">
                <div className="bg-secondary/20 absolute -bottom-10 -left-10 h-64 w-64 rounded-full opacity-50 blur-3xl" />
                <div className="relative aspect-[4/5] rotate-2 overflow-hidden rounded-[3rem] border-[12px] border-white shadow-2xl transition-transform duration-700 hover:rotate-0">
                  <Image
                    src="/images/master-hands.webp"
                    alt="เฮียเนก นายอเนก ยมเกิด"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="border-primary/5 absolute -right-8 -bottom-8 z-20 max-w-[260px] rounded-3xl border bg-white p-8 shadow-xl">
                  <ShieldCheck className="text-primary mb-4 h-10 w-10" />
                  <p className="text-sm leading-tight font-bold italic">
                    "เกียรติยศไม่ได้อยู่ที่สวมชุดอะไร แต่อยู่ที่หัวใจเราทำเพื่อใคร"
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection className="order-1 space-y-8 md:order-2" delay={0.2}>
                <div className="bg-primary/10 text-primary mb-2 inline-flex h-16 w-16 items-center justify-center rounded-2xl">
                  <Star className="h-8 w-8" />
                </div>
                <h2 className="text-4xl leading-none font-black tracking-tighter md:text-5xl">
                  อดีต <span className="text-primary">"สีกากี"</span> <br />
                  กับทางเลือกที่ถูกมองข้าม
                </h2>
                <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
                  <p>
                    ในวันที่ นายอเนก ยมเกิด ตัดสินใจถอดเครื่องแบบตำรวจเพื่อมาจับลวดลวกบะหมี่
                    หลายสายตาเต็มไปด้วยคำถามและบางคนมองว่าเป็นการลดเกียรติลงมาเป็นเพียง "พ่อค้า"
                  </p>
                  <p>
                    แต่สำหรับเฮียเนก เกียรติยศในอดีตคือความภาคภูมิใจ
                    แต่ความรับผิดชอบต่อครอบครัวคือความมุ่งมั่นที่ยิ่งใหญ่กว่า
                    ท่านจึงหันหลังให้สถานะทางสังคมเพื่อเริ่มต้นเส้นทางสายความอร่อยที่ไม่มีเครื่องหมายประดับบ่า
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE FRUIT OF LABOR (WEALTH FROM NOODLES) */}
        <section className="bg-primary/5 border-primary/10 border-y py-24">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <AnimatedSection className="space-y-8">
                <div className="bg-primary shadow-primary/30 mb-2 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg">
                  <Coins className="h-8 w-8" />
                </div>
                <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
                  มีวันนี้เพราะ <br />
                  <span className="text-primary">"บะหมี่จริงๆ"</span>
                </h2>
                <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
                  <p>
                    9 ปีที่ร้าน ช.สหชัย เฮียเนกและเจ๊ตั๊กพิสูจน์ให้เห็นว่า
                    อาชีพพ่อค้าบะหมี่ที่ใครบางคนเคยมองว่าไร้เกียรติ
                    กลับสร้างทรัพย์สินและความมั่นคงได้มากกว่าวันที่ยังสวมเครื่องแบบ
                  </p>
                  <p className="text-foreground font-bold">
                    "ผมกล้าพูดได้อย่างเต็มปากว่า ผมมีวันนี้ได้เพราะบะหมี่จริงๆ ครับ"
                  </p>
                  <p>
                    จากรถเข็นบะหมี่ สู่รากฐานที่แข็งแกร่งของครอบครัว
                    ทุกหยาดเหงื่อที่แลกมาด้วยความเหนียวหนึบของเส้นบะหมี่ไข่ 98%
                    คือความภูมิใจที่ไม่มีเครื่องราชฯ ใดมาเปรียบได้
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="relative">
                <div className="relative aspect-square -rotate-2 overflow-hidden rounded-[3rem] border-[12px] border-white shadow-2xl transition-transform duration-700 hover:rotate-0">
                  <Image
                    src="/images/success-story.webp"
                    alt="ความภูมิใจและรางวัลจากความขยัน"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE FAMILY SUCCESS (CHILDREN IN POLICE FORCE) */}
        <section className="bg-background relative overflow-hidden py-24">
          <div className="bg-secondary/10 absolute top-1/2 left-0 h-96 w-96 -translate-x-1/2 rounded-full opacity-40 blur-3xl" />
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <AnimatedSection className="relative order-2 md:order-1">
                <div className="relative aspect-[4/3] rotate-1 overflow-hidden rounded-[3rem] border-[12px] border-white shadow-2xl transition-transform duration-700 hover:rotate-0">
                  <Image
                    src="/images/shop-atmosphere.webp"
                    alt="ความสุขและความภูมิใจของครอบครัว"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection className="order-1 space-y-8 md:order-2" delay={0.2}>
                <div className="bg-secondary/20 text-secondary-foreground mb-2 inline-flex h-16 w-16 items-center justify-center rounded-2xl">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h2 className="text-4xl leading-none font-black tracking-tighter md:text-5xl">
                  ส่งลูกสู่ <span className="text-primary">เครื่องแบบ</span> <br />
                  ด้วยหยาดเหงื่อของพ่อ
                </h2>
                <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
                  <p>
                    ความภาคภูมิใจสูงสุดของเฮียเนกและเจ๊ตั๊ก ไม่ใช่เงินทองที่งอกเงย
                    แต่คือการที่สามารถส่งลูกสาวคนโตและลูกชายคนเล็กจนเรียนจบ
                    และก้าวเข้ารับราชการตำรวจตามความตั้งใจของพ่อ
                  </p>
                  <p>
                    เครื่องแบบสีกากีที่ลูกๆ สวมใส่ในวันนี้
                    ถูกแลกมาด้วยความเหนื่อยยากและความมุ่งมั่นจากร้านบะหมี่เล็กๆ ตลอด 9 ปี
                    เป็นการส่งต่อเกียรติยศที่สมบูรณ์แบบที่สุดที่พ่อคนหนึ่งจะทำให้ลูกได้
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE CONCLUSION */}
        <section className="bg-muted/20 py-24">
          <div className="container mx-auto max-w-5xl px-6">
            <AnimatedSection className="border-primary/5 relative overflow-hidden rounded-[4rem] border bg-white p-10 text-center shadow-2xl md:p-20">
              <div className="bg-primary absolute top-0 left-0 h-full w-2" />
              <Badge className="bg-primary/10 text-primary mb-10 rounded-full border-none px-6 py-2 font-bold tracking-widest uppercase">
                Pride & Passion Since 2017
              </Badge>
              <Quote className="text-primary mx-auto mb-10 h-16 w-16 opacity-30" />
              <h2 className="mb-10 text-4xl leading-tight font-black tracking-tighter md:text-6xl">
                9 ปีแห่งความใส่ใจ <br />
                คือรางวัลที่แท้จริง
              </h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-2xl leading-relaxed font-medium italic">
                "ไม่ว่าจะสวมชุดอะไร ตำแหน่งไหน เดินเข้ามาในร้านเราคือพี่น้องกันหมด...
                ขอบคุณทุกชามที่ทำให้เรามีวันนี้ครับ"
              </p>
              <div className="mt-16 flex flex-col items-center justify-center gap-4 md:flex-row">
                <div className="text-center">
                  <p className="text-primary mb-1 text-sm font-bold tracking-widest uppercase">
                    Founder
                  </p>
                  <p className="text-xl font-black">นายอเนก ยมเกิด (เฮียเนก)</p>
                </div>
                <div className="bg-border mx-4 hidden h-12 w-px md:block" />
                <div className="text-center">
                  <p className="text-primary mb-1 text-sm font-bold tracking-widest uppercase">
                    Co-Founder
                  </p>
                  <p className="text-xl font-black">นางนัชรินทร์ ยมเกิด (เจ๊ตั๊ก)</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
