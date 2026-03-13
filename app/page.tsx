import type { Metadata } from "next";
import { siteConfig } from "@/constants/site-config";
import { HeroSection } from "@/components/home/Hero";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { MenuHighlights } from "@/components/home/MenuHighlights";
import { ReviewCarousel } from "@/components/home/Testimonials";
import { KnowledgeCorner } from "@/components/home/KnowledgeCorner";
import { ProductTeaser } from "@/components/home/ProductTeaser";
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
    <div className="bg-background text-foreground selection:bg-primary/10 selection:text-primary flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* 1. HERO - THE FIRST IMPRESSION */}
        <HeroSection />

        {/* 2. THE SECRET OF TASTE - บะหมี่ไข่ 98% */}
        <section className="relative overflow-hidden py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center gap-20 lg:flex-row">
              <div className="relative lg:w-1/2">
                <div className="bg-secondary/20 absolute -top-10 -left-10 h-40 w-40 animate-pulse rounded-full opacity-50 blur-3xl" />
                <div className="relative z-10 aspect-[4/5] rotate-2 overflow-hidden rounded-[3rem] border-[12px] border-white shadow-2xl transition-transform duration-700 hover:rotate-0">
                  <Image
                    src="/images/blog-noodle-1.webp"
                    alt="ความเหนียวหนึบของเส้นบะหมี่ไข่ 98%"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute -right-10 -bottom-10 z-20 max-w-[240px] -rotate-3 rounded-[2.5rem] p-8 text-white shadow-2xl transition-transform duration-500 hover:rotate-0">
                  <Quote className="mb-4 h-8 w-8 opacity-50" />
                  <p className="text-lg leading-tight font-bold">
                    "เราใช้ไข่สดถึง 98% เพื่อความเหนียวหนึบที่เป็นเอกลักษณ์"
                  </p>
                  <div className="mt-4 text-xs font-bold tracking-widest uppercase opacity-70">
                    - เฮียเนก
                  </div>
                </div>
              </div>

              <div className="space-y-10 text-center lg:w-1/2 lg:text-left">
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary rounded-full border-none px-4 py-1.5 font-bold">
                    ความลับของความอร่อย
                  </Badge>
                  <h2 className="text-4xl leading-none font-black tracking-tighter md:text-6xl">
                    สัมผัสเส้นบะหมี่ <br />
                    <span className="text-primary italic">ไข่สด 98%</span>
                  </h2>
                </div>

                <p className="text-muted-foreground text-xl leading-relaxed font-medium">
                  หนึ่งเดียวในเมืองตากที่ยังคงรักษาสัดส่วนไข่สดสูงถึง 98%
                  จนได้เส้นบะหมี่ที่เหนียวหนึบ สู้ฟัน ไม่เละ และมีกลิ่นหอมของไข่ชัดเจน
                  ทุกชามที่เสิร์ฟคือความภูมิใจที่เราอยากให้คุณได้ลิ้มลองความแตกต่างที่แท้จริง
                </p>

                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div className="border-primary/20 space-y-2 border-l-4 pl-6">
                    <div className="text-foreground text-left text-3xl font-black">98%</div>
                    <p className="text-muted-foreground text-left text-sm font-bold tracking-wider uppercase">
                      สัดส่วนไข่สด
                    </p>
                  </div>
                  <div className="border-primary/20 space-y-2 border-l-4 pl-6">
                    <div className="text-foreground text-left text-3xl font-black">เหนียวหนึบ</div>
                    <p className="text-muted-foreground text-left text-sm font-bold tracking-wider uppercase">
                      เอกลักษณ์เฉพาะตัว
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SIGNATURE MENUS */}
        <section id="menu" className="bg-muted/30 py-32">
          <div className="container mx-auto px-6">
            <div className="mx-auto mb-20 max-w-3xl space-y-4 text-center">
              <Badge className="bg-secondary/20 text-secondary-foreground rounded-full border-none px-4 py-1 font-bold tracking-widest uppercase">
                เมนูแนะนำ
              </Badge>
              <h2 className="text-foreground text-4xl font-black tracking-tighter md:text-6xl">
                รสชาติที่เป็นตำนาน
              </h2>
              <p className="text-muted-foreground text-lg font-medium italic">
                "เครื่องแน่น จุใจ สมราคาที่คุณไว้วางใจเรามานาน"
              </p>
            </div>

            <MenuHighlights />
          </div>
        </section>

        {/* 4. PRODUCT TEASER (NEW!) - ซอสกะเพราของดีจังหวัดตาก */}
        <ProductTeaser />

        {/* 5. REAL CUSTOMER REVIEWS */}
        <ReviewCarousel />

        {/* 6. SERVICES & KNOWLEDGE CORNER */}
        <KnowledgeCorner />

        {/* 7. MOMENTS OF JOY */}
        <section id="gallery" className="bg-background py-32">
          <div className="container mx-auto px-6">
            <div className="mb-16 flex flex-col items-end justify-between gap-8 text-center md:flex-row md:text-left">
              <div className="mx-auto max-w-xl space-y-4 md:mx-0">
                <Badge className="bg-primary/10 text-primary rounded-full border-none px-4 py-1 font-bold tracking-widest uppercase">
                  บันทึกความทรงจำ
                </Badge>
                <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
                  แวะมาดูบรรยากาศร้านเราสิครับ
                </h2>
              </div>
              <Link
                href="/about"
                className="text-primary mx-auto mb-2 flex items-center gap-2 font-bold hover:underline md:mx-0"
              >
                อ่านเรื่องราวสนุกๆ ของเรา <ChevronDown className="h-4 w-4 -rotate-90" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {gallery.items.map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="group bg-muted relative aspect-[4/3] overflow-hidden rounded-[3rem] border-[10px] border-white shadow-xl transition-transform duration-500 hover:-translate-y-2">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 text-left opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <div className="mb-2 translate-y-4 text-2xl font-black text-white transition-transform duration-500 group-hover:translate-y-0">
                        {item.title}
                      </div>
                      <p className="translate-y-4 text-sm font-medium text-white/70 transition-transform delay-75 duration-500 group-hover:translate-y-0">
                        {item.alt}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 8. VISIT US */}
        <section id="contact" className="bg-primary/5 border-primary/10 border-t py-32">
          <div className="container mx-auto px-6">
            <div className="border-primary/5 flex flex-col items-center gap-16 rounded-[4rem] border bg-white p-12 shadow-2xl lg:flex-row lg:p-20">
              <div className="space-y-10 lg:w-1/2">
                <div className="space-y-4 text-center lg:text-left">
                  <Badge className="bg-primary/10 text-primary rounded-full border-none px-4 py-1 font-bold">
                    หิวเมื่อไหร่ แวะมาเลย
                  </Badge>
                  <h2 className="text-center text-4xl font-black tracking-tighter md:text-6xl lg:text-left">
                    แวะมาฝากท้องกับ <br />
                    <span className="text-primary text-center font-serif italic lg:text-left">
                      เฮียเนก & เจ๊ตั๊ก
                    </span>
                  </h2>
                </div>

                <div className="space-y-8">
                  <div className="group flex items-start gap-6">
                    <div className="bg-primary/5 text-primary group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors group-hover:text-white">
                      <MapPin className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-left text-xl font-bold">เส้นทางมาร้าน</h4>
                      <p className="text-muted-foreground text-left leading-relaxed font-medium">
                        {contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-6">
                    <div className="bg-primary/5 text-primary group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors group-hover:text-white">
                      <Phone className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-center text-xl font-bold lg:text-left">
                        โทรสั่งล่วงหน้า
                      </h4>
                      <p className="text-primary text-center text-2xl font-black lg:text-left">
                        {contact.phoneDisplay}
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-6">
                    <div className="bg-primary/10 text-primary group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors group-hover:text-white">
                      <Clock className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-left text-xl font-black">เวลาเปิดให้บริการ</h3>
                      <p className="text-foreground text-left font-bold">
                        {contact.businessHours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 text-center lg:text-left">
                  <Link
                    href={contact.googleMaps}
                    target="_blank"
                    className="bg-primary text-primary-foreground shadow-primary/30 hover:bg-primary/90 inline-flex items-center gap-3 rounded-[2rem] px-12 py-5 text-lg font-black shadow-2xl transition-all hover:-translate-y-1 active:scale-95"
                  >
                    <MapPin className="h-5 w-5" /> นำทางไปร้าน
                  </Link>
                </div>
              </div>

              <div className="border-muted relative h-[400px] w-full overflow-hidden rounded-[3.5rem] border-[12px] shadow-2xl md:h-[450px] lg:w-1/2">
                <iframe
                  title="แผนที่ร้าน ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก"
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
