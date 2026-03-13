import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Facebook } from "lucide-react";
import siteData from "@/data/site.json";
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "ติดต่อเรา | ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก",
  description:
    "เส้นทางมาร้าน ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก พร้อมเบอร์โทรศัพท์สั่งอาหารล่วงหน้า และเวลาเปิด-ปิดร้าน",
  keywords: ["ติดต่อ ช.สหชัย", "ทางไปร้าน ช.สหชัย", "เบอร์โทร ช.สหชัย ตาก", "แผนที่ ช.สหชัย"],
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "หน้าแรก", item: "/" },
    { name: "ติดต่อเรา", item: "/contact" },
  ]);

  return (
    <div className="flex-min-h-screen bg-warm-cream flex flex-col">
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      <main className="flex-grow pt-24 pb-20">
        <div className="container-stable">
          <AnimatedSection className="mb-16 text-center">
            <Badge className="bg-primary-red/10 text-primary-red mb-4 border-none px-4 py-1 text-sm font-bold tracking-wider">
              CONTACT US
            </Badge>
            <h1 className="text-primary-dark mb-6 text-4xl font-extrabold md:text-5xl">
              ติดต่อ <span className="text-primary-red">เฮียเนก-เจ๊ตั๊ก</span>
            </h1>
            <p className="text-light-text mx-auto max-w-2xl text-lg">
              สอบถามเส้นทาง สั่งอาหารล่วงหน้า หรือแนะนำติชม เรายินดีให้บริการด้วยความเต็มใจ
            </p>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-5">
            <AnimatedSection className="space-y-6 lg:col-span-2">
              <div className="border-primary-red/5 rounded-3xl border bg-white p-8 shadow-sm">
                <div className="mb-8 flex gap-5">
                  <div className="bg-warm-cream text-primary-red flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-inner">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-dark-text mb-2 text-xl font-bold">ที่ตั้งร้าน</h3>
                    <p className="text-light-text leading-relaxed">{siteData.address}</p>
                  </div>
                </div>

                <div className="mb-8 flex gap-5">
                  <div className="bg-warm-cream text-primary-red flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-inner">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-dark-text mb-2 text-xl font-bold">เบอร์โทรศัพท์</h3>
                    <p className="text-primary-red text-2xl font-bold">{siteData.phone}</p>
                    <p className="text-light-text mt-1 text-sm">โทรสั่งอาหารได้เลยครับ</p>
                  </div>
                </div>

                <div className="mb-8 flex gap-5">
                  <div className="bg-warm-cream text-primary-red flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-inner">
                    <Clock className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-dark-text mb-2 text-xl font-bold">เวลาเปิดให้บริการ</h3>
                    <p className="text-light-text">{siteData.opening_hours}</p>
                    <p className="text-primary-red mt-1 text-sm font-bold">
                      ปิดบริการ {siteData.closed_on}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-dark-text mb-4 font-bold">ติดตามความเคลื่อนไหวของเรา</h3>
                  <div className="flex gap-4">
                    <Button
                      className="text-md h-12 w-full rounded-xl bg-[#1877F2] text-white hover:bg-[#1877F2]/90"
                      asChild
                    >
                      <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer">
                        <Facebook className="mr-2 h-5 w-5" /> Facebook Page
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-3">
              <div className="relative h-[400px] w-full overflow-hidden rounded-3xl border-8 border-white bg-white shadow-md md:h-[450px]">
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
