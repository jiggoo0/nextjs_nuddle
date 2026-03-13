import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Quote, Heart, Flame, Soup, Star } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: `เรื่องราว 9 ปี | ${siteConfig.identity.name}`,
  description: "เส้นทางกว่า 9 ปีแห่งความใส่ใจของเฮียเนกและเจ๊ตั๊ก สู่ตำนานบะหมี่ไข่ 98% หนึ่งเดียวในจังหวัดตาก",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="flex-grow pt-24 pb-20">
        {/* HERO SECTION */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-muted/30">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-60" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <AnimatedSection>
                <Badge className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full font-bold uppercase tracking-widest mb-6">
                  Our Journey
                </Badge>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6">
                  เรื่องราว 9 ปีแห่ง <br className="hidden md:block" />
                  <span className="text-primary italic font-serif">"ความใส่ใจ"</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                  จากร้านเล็กๆ สู่ตำนานบะหมี่ไข่ 98% ที่ครองใจคนตากมานานเกือบทศวรรษ <br className="hidden md:block" />
                  นี่คือเรื่องราวของเฮียเนกและเจ๊ตั๊ก
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 1: THE FOUNDERS */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection className="order-2 md:order-1 relative">
                <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl opacity-50" />
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[4/5] rotate-2 hover:rotate-0 transition-transform duration-700">
                  <Image 
                    src="/images/founders-warmth.webp" 
                    alt="เฮียเนกและเจ๊ตั๊ก เจ้าของร้านช.สหชัย" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-primary/5 max-w-[220px] z-20">
                  <div className="flex text-noodle-gold mb-2">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-sm font-bold leading-tight">"รอยยิ้มและความอิ่มท้องของลูกค้า คือความสุขของเรา"</p>
                </div>
              </AnimatedSection>

              <AnimatedSection className="order-1 md:order-2 space-y-8" delay={0.2}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                  <Heart className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">เริ่มต้นด้วย <span className="text-primary">ใจรัก</span></h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    หากใครได้แวะเวียนมาแถวสะพานกิตติขจร จังหวัดตาก คงไม่มีใครไม่รู้จักร้าน <strong>"ช.สหชัย เกี๊ยวปูหมูแดง"</strong> ร้านบะหมี่ที่ไม่ได้มีดีแค่รสชาติ แต่คือสถานที่ที่รวบรวมรอยยิ้มและความอิ่มท้องของคนเมืองตากมานานกว่า 9 ปี
                  </p>
                  <p>
                    <strong>"มากกว่าแค่พ่อค้าแม่ค้า คือความเป็นพี่เป็นน้อง"</strong> ร้านของเราเน้นบรรยากาศที่แสนเป็นกันเอง เฮียเนกและเจ๊ตั๊กจะคอยทักทายลูกค้าด้วยความคุ้นเคย ลูกค้าขาประจำมักจะบอกว่ามาทานที่นี่เหมือนมาทานข้าวบ้านเพื่อนที่สนิทใจ
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE 98% EGG NOODLE */}
        <section className="py-24 bg-primary/5 border-y border-primary/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-white/40 blur-3xl rounded-full" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection className="space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white mb-2 shadow-lg shadow-primary/30">
                  <Soup className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">ความลับของเส้น <br /><span className="text-primary">บะหมี่ไข่ 98%</span></h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    หัวใจสำคัญที่ทำให้ร้าน ช.สหชัย แตกต่างและเป็นที่จดจำ คือ <strong>"เส้นบะหมี่"</strong> เราให้ความสำคัญกับสัดส่วนไข่สดที่สูงถึง <strong>98%</strong> ซึ่งเป็นสูตรเฉพาะที่หาทานได้ยากในปัจจุบัน
                  </p>
                  <p>
                    เพื่อให้ได้เส้นบะหมี่ที่เล็ก บาง แต่มีความเหนียวหนึบสู้ฟันเป็นเอกลักษณ์ ไม่เละ และมีกลิ่นหอมของไข่สดชัดเจนในทุกคำ
                  </p>
                  <div className="border-l-4 border-primary pl-6 py-2 mt-8 bg-white/50 rounded-r-2xl">
                    <Quote className="w-6 h-6 text-primary mb-2 opacity-50" />
                    <p className="text-foreground font-bold italic">
                      "เราเลือกใช้แต่ของดีที่สุด เพราะอยากให้ลูกค้าได้สัมผัสรสชาติบะหมี่ที่แท้จริง สด สะอาด และปลอดภัย"
                    </p>
                    <span className="text-sm font-bold text-primary mt-2 block">- เฮียเนก</span>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="relative">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-square -rotate-2 hover:rotate-0 transition-transform duration-700">
                  <Image 
                    src="/images/blog-noodle-1.webp" 
                    alt="เส้นบะหมี่ไข่ 98%" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE CHARCOAL ROASTED PORK */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection className="order-2 md:order-1 relative">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[4/3] rotate-1 hover:rotate-0 transition-transform duration-700">
                  <Image 
                    src="/images/blog-noodle-4.webp" 
                    alt="หมูแดงย่างเตาถ่าน ช.สหชัย" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection className="order-1 md:order-2 space-y-8" delay={0.2}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/20 text-secondary-foreground mb-2">
                  <Flame className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">หมูแดง <br /><span className="text-primary">ย่างเตาถ่านโบราณ</span></h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    ในยุคที่ทุกอย่างเน้นความรวดเร็ว แต่ที่ร้าน ช.สหชัย เรายังคงเลือกใช้วิธีการย่างด้วย <strong>เตาถ่านโบราณ</strong> เพราะความร้อนจากถ่านไม้จะช่วยให้เนื้อหมูสุกอย่างทั่วถึง และได้กลิ่นหอมรมควันที่เตาแก๊สทำไม่ได้
                  </p>
                  <ul className="space-y-4 mt-6">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 font-bold text-xs">1</div>
                      <p><strong>คัดสรรเนื้อหมู:</strong> ใช้ส่วนสันคอที่มีมันแทรกเล็กน้อย เพื่อความนุ่ม</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 font-bold text-xs">2</div>
                      <p><strong>หมักเครื่องยาจีน:</strong> สูตรลับเครื่องเทศกว่า 10 ชนิด และน้ำผึ้งแท้ 100%</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 font-bold text-xs">3</div>
                      <p><strong>ย่าง 3 ชั่วโมง:</strong> ค่อยๆ ย่างจนน้ำผึ้งซึมเข้าเนื้อ และผิวเกรียมหอม</p>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE PROMISE */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto px-6 max-w-5xl">
            <AnimatedSection className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-primary/5 text-center">
              <Badge className="bg-noodle-gold text-white border-none px-4 py-1.5 rounded-full font-bold uppercase tracking-widest mb-6">
                Our Promise
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">ขอบคุณที่เดินทางมาด้วยกัน</h2>
              <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-10 shadow-lg">
                <Image 
                  src="/images/blog-noodle-3.webp" 
                  alt="รอยยิ้มเจ๊ตั๊ก" 
                  fill 
                  className="object-cover"
                />
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium max-w-3xl mx-auto">
                ตลอดเกือบทศวรรษที่ผ่านมา ร้าน ช.สหชัย เติบโตได้เพราะการสนับสนุนจากชาวจังหวัดตากและนักท่องเที่ยวทุกคน 
                เราสัญญาว่าจะรักษาความเหนียวหนึบของเส้นบะหมี่ ปริมาณที่อิ่มจุใจ และบริการที่อบอุ่นนี้ไว้ตลอดไป 
                เพื่อให้ร้านของเราเป็นพื้นที่แห่งความสุขของทุกคนครับ
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
