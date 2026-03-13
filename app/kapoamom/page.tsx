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
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "kapoamom | ซอสผัดกะเพราฝีมือแม่ อร่อยเหมือนแม่ผัดให้แน่นอน",
  description: "ซอสผัดกะเพราสูตรลับระดับตำนาน 9 ปี จากร้าน ช.สหชัย สู่แบรนด์ kapoamom รสชาติจัดจ้าน หอมกลิ่นเตาถ่าน ทำเองได้ง่ายๆ ที่บ้าน",
};

export default function KapoamomPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9] text-[#4A3728]">
      <Navigation />

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-bg-texture.png')] opacity-5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection className="space-y-8 text-center lg:text-left">
                <Badge className="bg-[#E85D04]/10 text-[#E85D04] border-none px-4 py-1.5 rounded-full font-bold uppercase tracking-widest">
                  Authentic Taste since 2017
                </Badge>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                  แบรนด์ <span className="text-[#E85D04] italic font-serif">kapoamom</span> <br />
                  ซอสผัดกะเพราฝีมือแม่
                </h1>
                <p className="text-xl md:text-2xl text-[#6B5B4B] leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                  "อร่อยเหมือนกะเพราแม่ที่ผัดให้แน่นอน" รสชาติจัดจ้านถึงใจ 
                  ไม่ต้องปรุงเพิ่ม แค่เทแล้วผัด ก็อร่อยระดับตำนาน
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                  <Button className="bg-[#E85D04] hover:bg-[#D05403] text-white rounded-2xl h-16 px-10 text-lg font-black shadow-xl shadow-[#E85D04]/20 w-full sm:w-auto" asChild>
                    <Link href="#order"><ShoppingBag className="mr-2 w-5 h-5" /> สั่งซื้อเลย (เร็วๆ นี้)</Link>
                  </Button>
                  <Button variant="outline" className="border-[#4A3728]/20 text-[#4A3728] rounded-2xl h-16 px-10 text-lg font-bold w-full sm:w-auto hover:bg-white" asChild>
                    <Link href="#story">เรื่องราวของแบรนด์</Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="relative">
                <div className="absolute inset-0 bg-[#E85D04]/10 rounded-full blur-3xl animate-pulse" />
                <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-[16px] border-white aspect-square">
                  <Image 
                    src="/images/kapoamom-sauce.webp" 
                    alt="ซอสผัดกะเพรา kapoamom" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-[#E85D04]/10 z-20 hidden md:block">
                  <div className="flex items-center gap-4 mb-2">
                    <ShieldCheck className="w-8 h-8 text-[#E85D04]" />
                    <span className="font-black text-lg">มาตรฐาน ช.สหชัย</span>
                  </div>
                  <p className="text-sm text-[#6B5B4B] font-medium italic">ส่งต่อความอร่อยจากรุ่นสู่รุ่น</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-24 bg-white border-y border-[#4A3728]/5">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-[#4A3728]">ทำไมต้องซอสกะเพรา <span className="text-[#E85D04]">kapoamom</span>?</h2>
              <p className="text-[#6B5B4B] text-lg font-medium">เราใส่ใจในทุกรายละเอียด เพื่อให้คุณได้สัมผัสรสชาติที่ดีที่สุดเหมือนทานที่ร้าน</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                { 
                  icon: Leaf, 
                  title: "วัตถุดิบจากธรรมชาติ", 
                  desc: "ใช้ใบกะเพราสดแท้และพริกคุณภาพดี ไม่ใช้สารกันเสีย" 
                },
                { 
                  icon: Flame, 
                  title: "กลิ่นหอมเตาถ่าน", 
                  desc: "สูตรลับการเคี่ยวซอสที่ให้กลิ่นอายความหอมแบบดั้งเดิม" 
                },
                { 
                  icon: Clock, 
                  title: "ประหยัดเวลา", 
                  desc: "ผัดเสร็จภายใน 2 นาที ไม่ต้องโขลกพริกกระเทียมให้วุ่นวาย" 
                }
              ].map((feature, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1} className="bg-[#FFFDF9] p-10 rounded-[3rem] border border-[#4A3728]/5 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-[#E85D04]/10 text-[#E85D04] flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black mb-4 text-[#4A3728]">{feature.title}</h3>
                  <p className="text-[#6B5B4B] leading-relaxed font-medium">{feature.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* STORY & USAGE SECTION */}
        <section id="story" className="py-24 bg-[#FFFDF9]">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <AnimatedSection className="relative order-2 lg:order-1">
                <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[4/5]">
                  <Image 
                    src="/images/signature-98-noodle.webp" 
                    alt="ขั้นตอนการปรุงซอสกะเพรา" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection className="space-y-8 order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E85D04]/10 text-[#E85D04] mb-2">
                  <Heart className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">จากความตั้งใจของ <br /><span className="text-[#E85D04]">"แม่" สู่ขวดคุณ</span></h2>
                <div className="space-y-6 text-lg text-[#6B5B4B] leading-relaxed font-medium">
                  <p>
                    <strong>kapoamom</strong> เริ่มต้นจากความต้องการของเฮียเนกและเจ๊ตั๊ก ที่อยากให้ลูกค้าที่อยู่ไกลได้ทานรสชาติกะเพราที่จริงใจเหมือนที่เจ๊ตั๊กตั้งใจผัดให้ลูกๆ ทานที่บ้าน
                  </p>
                  <p>
                    เราใช้เวลากว่า 1 ปีในการทดลองและปรับปรุงสูตร จนได้ซอสผัดกะเพราอเนกประสงค์ที่คงความสดใหม่ของวัตถุดิบ และรสชาติที่เสถียรที่สุด ไม่ว่าใครจะผัด ก็อร่อยเหมือนแม่มาทำให้เองจริงๆ
                  </p>
                  <ul className="space-y-4 pt-4 text-sm font-bold">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E85D04]" /> แค่เตรียมเนื้อสัตว์ 150-200 กรัม
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E85D04]" /> ใช้ซอสเพียง 2-3 ช้อนโต๊ะ
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E85D04]" /> ผัดให้เข้ากัน พร้อมเสิร์ฟความอร่อย
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ORDER / CTA SECTION */}
        <section id="order" className="py-24 bg-[#E85D04] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight">
                เตรียมสัมผัสความอร่อย <br /> เร็วๆ นี้ ที่ ช.สหชัย
              </h2>
              <p className="text-xl text-white/80 font-medium">
                ร่วมเป็นกลุ่มแรกที่ได้ลิ้มลองความจัดจ้านของซอสกะเพรา kapoamom <br className="hidden md:block" />
                เรากำลังเร่งเตรียมความพร้อมเพื่อส่งต่อความอร่อยถึงมือคุณ
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-[#E85D04] px-12 py-5 rounded-[2rem] text-xl font-black shadow-2xl hover:-translate-y-1 transition-all active:scale-95">
                  ลงชื่อจองล่วงหน้า <ArrowRight className="w-5 h-5" />
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
