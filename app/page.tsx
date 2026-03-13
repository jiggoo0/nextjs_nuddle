import type { Metadata } from "next";
import { siteConfig } from "@/constants/site-config";
import { HeroSection } from "@/components/home/Hero";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { MenuHighlights } from "@/components/home/MenuHighlights";
import { ReviewCarousel } from "@/components/home/Testimonials";
import { KnowledgeCorner } from "@/components/home/KnowledgeCorner";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Quote, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: siteConfig.identity.fullName,
  description: siteConfig.identity.description,
  keywords: siteConfig.identity.keywords,
};

export default function Home() {
  const { contact, gallery } = siteConfig;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      <Navigation />

      <main className="flex-grow">
        {/* 1. HERO - THE FIRST IMPRESSION */}
        <HeroSection />

        {/* 2. THE SECRET OF TASTE - บะหมี่ไข่ 98% */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-white rotate-2 hover:rotate-0 transition-transform duration-700 aspect-[4/5]">
                  <Image 
                    src="/images/blog-noodle-1.webp" 
                    alt="ความเหนียวหนึบของเส้นบะหมี่ไข่ 98%" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 z-20 bg-primary p-8 rounded-[2.5rem] shadow-2xl text-white max-w-[240px] -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Quote className="w-8 h-8 mb-4 opacity-50" />
                  <p className="text-lg font-bold leading-tight">
                    "เราใช้ไข่สดถึง 98% เพื่อความเหนียวหนึบที่เป็นเอกลักษณ์"
                  </p>
                  <div className="mt-4 text-xs font-bold uppercase tracking-widest opacity-70">- เฮียเนก</div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary border-none py-1.5 px-4 rounded-full font-bold">
                    ความลับของความอร่อย
                  </Badge>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                    สัมผัสเส้นบะหมี่ <br />
                    <span className="text-primary italic">ไข่สด 98%</span>
                  </h2>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                  หนึ่งเดียวในเมืองตากที่ยังคงรักษาสัดส่วนไข่สดสูงถึง 98% จนได้เส้นบะหมี่ที่เหนียวหนึบ สู้ฟัน ไม่เละ และมีกลิ่นหอมของไข่ชัดเจน 
                  ทุกชามที่เสิร์ฟคือความภูมิใจที่เราอยากให้คุณได้ลิ้มลองความแตกต่างที่แท้จริง
                </p>

                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div className="space-y-2 border-l-4 border-primary/20 pl-6">
                    <div className="text-3xl font-black text-foreground text-left">98%</div>
                    <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider text-left">สัดส่วนไข่สด</p>
                  </div>
                  <div className="space-y-2 border-l-4 border-primary/20 pl-6">
                    <div className="text-3xl font-black text-foreground text-left">เหนียวหนึบ</div>
                    <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider text-left">เอกลักษณ์เฉพาะตัว</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SIGNATURE MENUS */}
        <section id="menu" className="py-32 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <Badge className="bg-secondary/20 text-secondary-foreground border-none px-4 py-1 rounded-full font-bold uppercase tracking-widest">
                เมนูแนะนำ
              </Badge>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">รสชาติที่เป็นตำนาน</h2>
              <p className="text-lg text-muted-foreground font-medium italic">
                "เครื่องแน่น จุใจ สมราคาที่คุณไว้วางใจเรามานาน"
              </p>
            </div>
            
            <MenuHighlights />
          </div>
        </section>

        {/* 4. REAL CUSTOMER REVIEWS */}
        <ReviewCarousel />

        {/* 5. SERVICES & KNOWLEDGE CORNER (NEW!) */}
        <KnowledgeCorner />

        {/* 6. MOMENTS OF JOY */}
        <section id="gallery" className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
              <div className="max-w-xl space-y-4 mx-auto md:mx-0">
                <Badge className="bg-primary/10 text-primary border-none px-4 py-1 rounded-full font-bold uppercase tracking-widest">
                  บันทึกความทรงจำ
                </Badge>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">บรรยากาศความอบอุ่น</h2>
              </div>
              <Link href="/about" className="text-primary font-bold hover:underline flex items-center gap-2 mb-2 mx-auto md:mx-0">
                อ่านเรื่องราว 9 ปี ของเรา <ChevronDown className="w-4 h-4 -rotate-90" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.items.map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="group relative rounded-[3rem] overflow-hidden shadow-xl aspect-[4/3] bg-muted border-[10px] border-white transition-transform duration-500 hover:-translate-y-2">
                    <Image 
                      src={item.src} 
                      alt={item.alt} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 text-left">
                      <div className="text-white font-black text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</div>
                      <p className="text-white/70 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.alt}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 7. VISIT US */}
        <section id="contact" className="py-32 bg-primary/5 border-t border-primary/10">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-[4rem] p-12 lg:p-20 shadow-2xl border border-primary/5 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-10">
                <div className="space-y-4 text-center lg:text-left">
                  <Badge className="bg-primary/10 text-primary border-none px-4 py-1 rounded-full font-bold">
                    พิกัดความอร่อย
                  </Badge>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-center lg:text-left">แวะมาทักทาย <br /><span className="text-primary font-serif italic text-center lg:text-left">เฮียเนก & เจ๊ตั๊ก</span></h2>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6 items-start group">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white shrink-0">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-left">เส้นทางมาร้าน</h4>
                      <p className="text-muted-foreground font-medium leading-relaxed text-left">{contact.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white shrink-0">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-center lg:text-left">โทรสั่งล่วงหน้า</h4>
                      <p className="text-2xl font-black text-primary text-center lg:text-left">{contact.phoneDisplay}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white shrink-0 text-center lg:text-left">
                      <Clock className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-left">เวลาเปิดให้บริการ</h4>
                      <p className="text-muted-foreground font-medium text-left">{contact.businessHours}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 text-center lg:text-left">
                  <Link
                    href={contact.googleMaps}
                    target="_blank"
                    className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-5 rounded-[2rem] text-lg font-black shadow-2xl shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all active:scale-95"
                  >
                    <MapPin className="w-5 h-5" /> นำทางไปร้าน
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2 w-full h-[400px] md:h-[450px] rounded-[3.5rem] overflow-hidden border-[12px] border-muted shadow-2xl relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.123!2d99.123!3d16.883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd962df324c00b%3A0xc0688820f4f9f476!2z4LiKLuC4quC4q-C4reC4quC4seC4p-C5gOC4geC4teC5ieC4p-C4m-C4ueC4reC4reC4oeC4seC4p-C5geC4lOC4hw!5e0!3m2!1sth!2sth!4v1710000000000!5m2!1sth!2sth" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
