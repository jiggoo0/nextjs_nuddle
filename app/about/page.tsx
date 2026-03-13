import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Quote, Heart, Star, ShieldCheck, GraduationCap, Coins } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: `เรื่องราว 9 ปีของเฮียเนก | ${siteConfig.identity.name}`,
  description: "จากเครื่องแบบสีกากีสู่ผ้ากันเปื้อนแดง เรื่องราวการต่อสู้ 9 ปีของนายอเนก ยมเกิด ผู้สร้างตำนานบะหมี่ไข่ 98% เพื่อความสำเร็จของครอบครัว",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="flex-grow pt-24 pb-20">
        {/* HERO SECTION: THE LEGACY */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-primary/5">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <AnimatedSection>
                <Badge className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full font-bold uppercase tracking-widest mb-6">
                  9 Years Anniversary Legacy
                </Badge>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6">
                  จาก <span className="text-primary italic font-serif">"เครื่องแบบ"</span> <br />
                  สู่ <span className="text-primary italic font-serif">"ผ้ากันเปื้อน"</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                  เรื่องราวชีวิตของ นายอเนก ยมเกิด (เฮียเนก) <br className="hidden md:block" />
                  บทพิสูจน์เกียรติยศที่แท้จริง... ที่วัดกันด้วย "หยาดเหงื่อ" และ "ความรัก"
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 1: THE TRANSITION (FROM POLICE TO NOODLE VENDOR) */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection className="order-2 md:order-1 relative">
                <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl opacity-50" />
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[4/5] rotate-2 hover:rotate-0 transition-transform duration-700">
                  <Image 
                    src="/images/master-hands.webp" 
                    alt="เฮียเนก นายอเนก ยมเกิด" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-primary/5 max-w-[260px] z-20">
                  <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                  <p className="text-sm font-bold leading-tight italic">
                    "เกียรติยศไม่ได้อยู่ที่สวมชุดอะไร แต่อยู่ที่หัวใจเราทำเพื่อใคร"
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection className="order-1 md:order-2 space-y-8" delay={0.2}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                  <Star className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
                  อดีต <span className="text-primary">"สีกากี"</span> <br />
                  กับทางเลือกที่ถูกมองข้าม
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    ในวันที่ นายอเนก ยมเกิด ตัดสินใจถอดเครื่องแบบตำรวจเพื่อมาจับลวดลวกบะหมี่ หลายสายตาเต็มไปด้วยคำถามและบางคนมองว่าเป็นการลดเกียรติลงมาเป็นเพียง "พ่อค้า"
                  </p>
                  <p>
                    แต่สำหรับเฮียเนก เกียรติยศในอดีตคือความภาคภูมิใจ แต่ความรับผิดชอบต่อครอบครัวคือความมุ่งมั่นที่ยิ่งใหญ่กว่า ท่านจึงหันหลังให้สถานะทางสังคมเพื่อเริ่มต้นเส้นทางสายความอร่อยที่ไม่มีเครื่องหมายประดับบ่า
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE FRUIT OF LABOR (WEALTH FROM NOODLES) */}
        <section className="py-24 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection className="space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white mb-2 shadow-lg shadow-primary/30">
                  <Coins className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                  มีวันนี้เพราะ <br />
                  <span className="text-primary">"บะหมี่จริงๆ"</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    9 ปีที่ร้าน ช.สหชัย เฮียเนกและเจ๊ตั๊กพิสูจน์ให้เห็นว่า อาชีพพ่อค้าบะหมี่ที่ใครบางคนเคยมองว่าไร้เกียรติ กลับสร้างทรัพย์สินและความมั่นคงได้มากกว่าวันที่ยังสวมเครื่องแบบ
                  </p>
                  <p className="text-foreground font-bold">
                    "ผมกล้าพูดได้อย่างเต็มปากว่า ผมมีวันนี้ได้เพราะบะหมี่จริงๆ ครับ"
                  </p>
                  <p>
                    จากรถเข็นบะหมี่ สู่รากฐานที่แข็งแกร่งของครอบครัว ทุกหยาดเหงื่อที่แลกมาด้วยความเหนียวหนึบของเส้นบะหมี่ไข่ 98% คือความภูมิใจที่ไม่มีเครื่องราชฯ ใดมาเปรียบได้
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="relative">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-square -rotate-2 hover:rotate-0 transition-transform duration-700">
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
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-40 -translate-x-1/2" />
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection className="order-2 md:order-1 relative">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[4/3] rotate-1 hover:rotate-0 transition-transform duration-700">
                  <Image 
                    src="/images/shop-atmosphere.webp" 
                    alt="ความสุขและความภูมิใจของครอบครัว" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection className="order-1 md:order-2 space-y-8" delay={0.2}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/20 text-secondary-foreground mb-2">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
                  ส่งลูกสู่ <span className="text-primary">เครื่องแบบ</span> <br />
                  ด้วยหยาดเหงื่อของพ่อ
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    ความภาคภูมิใจสูงสุดของเฮียเนกและเจ๊ตั๊ก ไม่ใช่เงินทองที่งอกเงย แต่คือการที่สามารถส่งลูกสาวคนโตและลูกชายคนเล็กจนเรียนจบ และก้าวเข้ารับราชการตำรวจตามความตั้งใจของพ่อ
                  </p>
                  <p>
                    เครื่องแบบสีกากีที่ลูกๆ สวมใส่ในวันนี้ ถูกแลกมาด้วยความเหนื่อยยากและความมุ่งมั่นจากร้านบะหมี่เล็กๆ ตลอด 9 ปี เป็นการส่งต่อเกียรติยศที่สมบูรณ์แบบที่สุดที่พ่อคนหนึ่งจะทำให้ลูกได้
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE CONCLUSION */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto px-6 max-w-5xl">
            <AnimatedSection className="bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl border border-primary/5 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <Badge className="bg-primary/10 text-primary border-none px-6 py-2 rounded-full font-bold uppercase tracking-widest mb-10">
                Pride & Passion Since 2017
              </Badge>
              <Quote className="w-16 h-16 text-primary mx-auto mb-10 opacity-30" />
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-tight">
                9 ปีแห่งความใส่ใจ <br />
                คือรางวัลที่แท้จริง
              </h2>
              <p className="text-2xl text-muted-foreground leading-relaxed font-medium max-w-3xl mx-auto italic">
                "ไม่ว่าจะสวมชุดอะไร ตำแหน่งไหน เดินเข้ามาในร้านเราคือพี่น้องกันหมด... ขอบคุณทุกชามที่ทำให้เรามีวันนี้ครับ"
              </p>
              <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Founder</p>
                  <p className="text-xl font-black">นายอเนก ยมเกิด (เฮียเนก)</p>
                </div>
                <div className="hidden md:block w-px h-12 bg-border mx-4" />
                <div className="text-center">
                  <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Co-Founder</p>
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
