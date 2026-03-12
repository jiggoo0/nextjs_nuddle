import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { FooterSection } from "@/components/sections/footer";
import { Navigation } from "@/components/navigation";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Utensils, Star, Phone, MapPin, Clock, Facebook, Award } from "lucide-react";
import Image from "next/image";

// ดึงข้อมูลจาก JSON (ในสถานการณ์จริงอาจใช้ fetch หรือ import โดยตรง)
import siteData from "@/data/site.json";
import familyData from "@/data/fammiry.json";
import servicesData from "@/data/services.json";
import reviewsData from "@/data/reviews.json";
import blogData from "@/data/blog.json";

// SEO & METADATA (AGGRESSIVE SEO)
export const metadata: Metadata = {
  title: "ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก | ตำนานความอร่อย 9 ปี อบอุ่นเหมือนทานที่บ้าน",
  description: "ที่สุดของบะหมี่เกี๊ยวปูในจังหวัดตาก หมูแดงย่างเตาถ่านสูตรโบราณ โดยเฮียเนกและเจ๊ตั๊ก คัดสรรวัตถุดิบคุณภาพสดใหม่ทุกวัน เปิดมาแล้วกว่า 9 ปี",
  keywords: ["บะหมี่เกี๊ยวปู ตาก", "ร้านอาหารจังหวัดตาก", "ช.สหชัย", "หมูแดงเตาถ่าน", "ของกินเมืองตาก", "ร้านอร่อยตาก"],
  openGraph: {
    title: "ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก - ตำนานความอร่อย 9 ปี",
    description: "บะหมี่เกี๊ยวปูเน้นๆ หมูแดงย่างเตาถ่านหอมๆ พร้อมบริการที่อบอุ่นแบบครอบครัว",
    images: ["/images/banner.jpg"],
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-min-h-screen flex-col">
      {/* 🌟 STRUCTURED DATA (LOCAL SEO + REVIEWS) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": siteData.shop_name,
            "image": "https://sahachai-noodle.aemdevweb.com/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": siteData.address,
              "addressLocality": "ต.ระแหง อ.เมือง",
              "addressRegion": "จ.ตาก",
              "postalCode": "63000",
              "addressCountry": "TH"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 16.883,
              "longitude": 99.123
            },
            "url": "https://sahachai-noodle.aemdevweb.com",
            "telephone": siteData.phone,
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "11:00",
                "closes": "20:00"
              }
            ],
            "priceRange": "฿-฿฿",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "520"
            },
            "author": {
              "@type": "Person",
              "name": "นายอลงกรณ์ ยมเกิด (Alogkorn Yomkerd)",
              "url": "https://www.me.aemdevweb.com"
            },
            "maintainer": {
              "@type": "Organization",
              "name": "AEMDEVWEB",
              "url": "https://www.aemdevweb.com"
            },
            "founder": [
              {
                "@type": "Person",
                "name": "นายอเนก ยมเกิด (Anek Yomkerd)",
                "jobTitle": "เจ้าของร้าน (เฮียเนก)"
              },
              {
                "@type": "Person",
                "name": "นางนัชรินทร์ ยมเกิด (Nacharin Yomkerd)",
                "jobTitle": "เจ้าของร้าน (เจ๊ตั๊ก)"
              }
            ],
            "hasPart": [
              {
                "@type": "Blog",
                "name": "Noodle Story & Tak Guide",
                "description": "เรื่องราวตำนานบะหมี่ 9 ปีและการท่องเที่ยวในจังหวัดตาก",
                "author": {
                  "@type": "Person",
                  "name": "นายอลงกรณ์ ยมเกิด (AEMDEVWEB)"
                }
              }
            ]
          }),
        }}
      />

      <Navigation />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section id="home" className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <Image 
            src="/images/banner.jpg" 
            alt="บะหมี่เกี๊ยวปู ช.สหชัย จ.ตาก" 
            fill 
            className="object-cover brightness-50"
            priority
          />
          <div className="container-stable relative z-10 text-center text-white">
            <AnimatedSection>
              <Badge variant="secondary" className="mb-4 bg-noodle-gold text-primary-dark font-bold py-1 px-4 text-sm animate-pulse">
                <Award className="mr-2 h-4 w-4" /> ตำนานความอร่อย 9 ปี เมืองตาก
              </Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
                ช.สหชัย <span className="text-noodle-gold">เกี๊ยวปูหมูแดง</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium bg-primary-red/80 inline-block px-8 py-3 rounded-full backdrop-blur-sm shadow-xl">
                "อิ่มอร่อย อบอุ่น เหมือนทานที่บ้าน โดยเฮียเนกและเจ๊ตั๊ก"
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-noodle-gold hover:bg-gold-light text-primary-dark font-bold text-lg px-10 h-14 rounded-full transition-transform hover:scale-105 shadow-lg" asChild>
                  <a href="#menu">
                    <Utensils className="mr-2 h-5 w-5" /> ดูเมนูแนะนำ
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 text-lg px-10 h-14 rounded-full transition-transform hover:scale-105 backdrop-blur-sm" asChild>
                  <a href={siteData.google_maps_link} target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" /> เส้นทางมาร้าน
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAMILY STORY SECTION */}
        <section id="story" className="py-20 bg-warm-cream">
          <div className="container-stable">
            <div className="section-warmth -mt-40 z-20">
              <AnimatedSection className="text-center max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary-red/10 rounded-full">
                    <Utensils className="h-10 w-10 text-primary-red" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-red">
                  {familyData.story_title}
                </h2>
                <p className="text-lg leading-relaxed text-light-text mb-10 indent-8">
                  {familyData.description}
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  {familyData.members.map((member: any) => (
                    <div key={member.id} className="flex flex-col items-center bg-warm-cream/50 p-6 rounded-2xl border border-primary-red/5">
                      <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full border-4 border-noodle-gold shadow-md">
                        <Image 
                          src={`/images/${member.img}`} 
                          alt={member.name} 
                          fill 
                          className="object-cover" 
                        />
                      </div>
                      <h3 className="text-xl font-bold text-primary-dark">{member.name}</h3>
                      <p className="text-sm font-semibold text-primary-red mb-2 uppercase tracking-wider">{member.role}</p>
                      <p className="text-center text-light-text text-sm italic">{member.bio}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* MENU HIGHLIGHT SECTION */}
        <section id="menu" className="py-24 bg-white">
          <div className="container-stable">
            <div className="text-center mb-16">
              <Badge className="bg-primary-red/10 text-primary-red border-none mb-3">MENU SELECTION</Badge>
              <h2 className="text-4xl font-bold mb-4">ความประทับใจ <span className="text-primary-red">จากผู้ใช้บริการจริง</span></h2>
              <div className="w-20 h-1 bg-noodle-gold mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {servicesData.categories[0].items.slice(0, 6).map((item: any) => (
                <Card key={item.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
                  <div className="relative h-64">
                    <Image src={`/images/${item.img}`} alt={item.name} fill className="object-cover" />
                    {item.recommended && (
                      <Badge className="absolute top-4 left-4 bg-noodle-gold text-primary-dark font-bold border-none shadow-md">
                        <Star className="w-3 h-3 mr-1 fill-primary-dark" /> เมนูแนะนำ
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-dark-text">{item.name}</h3>
                      <span className="text-primary-red font-bold text-lg bg-warm-cream px-3 py-1 rounded-lg">
                        {item.price}.-
                      </span>
                    </div>
                    <p className="text-light-text text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="bg-primary-red hover:bg-primary-dark text-white rounded-full px-12 h-14 font-bold shadow-lg shadow-primary-red/20">
                ดูเมนูเด็ดทั้งหมดของเรา
              </Button>
            </div>
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section id="reviews" className="py-24 bg-warm-cream relative overflow-hidden">
          <div className="container-stable">
            <div className="text-center mb-16">
              <Badge className="bg-primary-red/10 text-primary-red border-none mb-3">TESTIMONIALS</Badge>
              <h2 className="text-4xl font-bold mb-4">ความอร่อย <span className="text-primary-red">ที่บอกต่อกันปากต่อปาก</span></h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviewsData.map((review: any, idx: number) => (
                <Card key={idx} className="p-8 rounded-3xl border-none shadow-sm bg-white/80 backdrop-blur-sm relative">
                  <div className="flex text-noodle-gold mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-noodle-gold" />
                    ))}
                  </div>
                  <p className="text-dark-text italic mb-6 leading-relaxed">"{review.comment}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-red/10 rounded-full flex items-center justify-center text-primary-red font-bold uppercase">
                      {review.user[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-primary-dark">{review.user}</h4>
                      <p className="text-xs text-light-text">{review.date}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG SECTION - SEO POWERHOUSE */}
        <section id="story-blog" className="py-24 bg-white">
          <div className="container-stable">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div className="text-left">
                <Badge className="bg-primary-red/10 text-primary-red border-none mb-3">BLOG & STORIES</Badge>
                <h2 className="text-4xl font-bold">เรื่องราว <span className="text-primary-red">และความประทับใจ</span></h2>
                <div className="w-20 h-1 bg-noodle-gold mt-4"></div>
              </div>
              <Button variant="ghost" className="text-primary-red font-bold hover:bg-primary-red/5">
                ดูบทความทั้งหมด <Award className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogData.map((post: any) => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="relative h-56 rounded-2xl overflow-hidden mb-5">
                    <Image 
                      src={`/images/${post.image}`} 
                      alt={post.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 backdrop-blur-sm text-primary-red font-bold border-none shadow-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="px-2">
                    <p className="text-xs text-light-text mb-2 flex items-center gap-2">
                      <Clock className="w-3 h-3" /> {post.date}
                    </p>
                    <h3 className="text-xl font-bold mb-3 text-dark-text group-hover:text-primary-red transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-light-text text-sm line-clamp-2 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary-red text-sm font-bold gap-1 group-hover:gap-2 transition-all">
                      อ่านต่อ <span className="translate-y-[1px]">→</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 bg-white">
          <div className="container-stable">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-primary-red/10 text-primary-red border-none mb-3">CONTACT US</Badge>
                <h2 className="text-4xl font-bold mb-8">ช่องทาง <span className="text-primary-red">ติดต่อและที่ตั้งร้าน</span></h2>
                
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-warm-cream rounded-2xl flex items-center justify-center text-primary-red shrink-0 border border-primary-red/5 shadow-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">ที่ตั้งร้าน</h4>
                      <p className="text-light-text text-sm leading-relaxed">{siteData.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-warm-cream rounded-2xl flex items-center justify-center text-primary-red shrink-0 border border-primary-red/5 shadow-sm">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">เบอร์โทรศัพท์</h4>
                      <p className="text-primary-red font-bold text-lg">{siteData.phone}</p>
                      <p className="text-xs text-light-text">โทรสั่งอาหารล่วงหน้า หรือสอบถามเส้นทาง</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-warm-cream rounded-2xl flex items-center justify-center text-primary-red shrink-0 border border-primary-red/5 shadow-sm">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">เวลาเปิด-ปิด</h4>
                      <p className="text-light-text text-sm leading-relaxed">{siteData.opening_hours}</p>
                      <p className="text-xs text-primary-red font-semibold">({siteData.closed_on})</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex gap-4">
                  <Button variant="outline" className="rounded-full gap-2 border-primary-red/20 hover:bg-primary-red/5">
                    <Facebook className="w-5 h-5 text-[#1877F2]" /> Facebook Page
                  </Button>
                </div>
              </div>

              <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-primary-red/10 border-8 border-white">
                <iframe 
                  src={siteData.google_maps_embed} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
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
