import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { FooterSection } from "@/components/sections/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Facebook, Mail } from "lucide-react";
import siteData from "@/data/site.json";

export const metadata: Metadata = {
  title: "ติดต่อเรา | ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก",
  description: "เส้นทางมาร้าน ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก พร้อมเบอร์โทรศัพท์สั่งอาหารล่วงหน้า และเวลาเปิด-ปิดร้าน",
  keywords: ["ติดต่อ ช.สหชัย", "ทางไปร้าน ช.สหชัย", "เบอร์โทร ช.สหชัย ตาก", "แผนที่ ช.สหชัย"],
};

export default function ContactPage() {
  return (
    <div className="flex flex-min-h-screen flex-col bg-warm-cream">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container-stable">
          <AnimatedSection className="text-center mb-16">
            <Badge className="bg-primary-red/10 text-primary-red border-none mb-4 px-4 py-1 text-sm font-bold tracking-wider">
              CONTACT US
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary-dark">
              ติดต่อ <span className="text-primary-red">เฮียเนก-เจ๊ตั๊ก</span>
            </h1>
            <p className="text-lg text-light-text max-w-2xl mx-auto">
              สอบถามเส้นทาง สั่งอาหารล่วงหน้า หรือแนะนำติชม เรายินดีให้บริการด้วยความเต็มใจ
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-8">
            <AnimatedSection className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-primary-red/5">
                <div className="flex gap-5 mb-8">
                  <div className="w-14 h-14 bg-warm-cream rounded-2xl flex items-center justify-center text-primary-red shrink-0 shadow-inner">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-dark-text">ที่ตั้งร้าน</h3>
                    <p className="text-light-text leading-relaxed">{siteData.address}</p>
                  </div>
                </div>

                <div className="flex gap-5 mb-8">
                  <div className="w-14 h-14 bg-warm-cream rounded-2xl flex items-center justify-center text-primary-red shrink-0 shadow-inner">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-dark-text">เบอร์โทรศัพท์</h3>
                    <p className="text-2xl font-bold text-primary-red">{siteData.phone}</p>
                    <p className="text-sm text-light-text mt-1">โทรสั่งอาหารได้เลยครับ</p>
                  </div>
                </div>

                <div className="flex gap-5 mb-8">
                  <div className="w-14 h-14 bg-warm-cream rounded-2xl flex items-center justify-center text-primary-red shrink-0 shadow-inner">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-dark-text">เวลาเปิดให้บริการ</h3>
                    <p className="text-light-text">{siteData.opening_hours}</p>
                    <p className="text-sm font-bold text-primary-red mt-1">ปิดบริการ {siteData.closed_on}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="font-bold mb-4 text-dark-text">ติดตามความเคลื่อนไหวของเรา</h3>
                  <div className="flex gap-4">
                    <Button className="w-full bg-[#1877F2] hover:bg-[#1877F2]/90 text-white rounded-xl h-12 text-md" asChild>
                      <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer">
                        <Facebook className="mr-2 w-5 h-5" /> Facebook Page
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-3">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md border-8 border-white h-[600px] w-full relative">
                <iframe 
                  src={siteData.google_maps_embed} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
