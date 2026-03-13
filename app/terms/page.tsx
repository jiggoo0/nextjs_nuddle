import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: `ข้อกำหนดการใช้งาน | ${siteConfig.identity.name}`,
  description: "เงื่อนไขและข้อกำหนดการใช้งานเว็บไซต์ ช.สหชัย พัฒนาโดย AEMDEVWEB",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <h1 className="text-4xl font-black mb-10 tracking-tighter">ข้อกำหนดการใช้งาน</h1>
            <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">1. การยอมรับข้อกำหนด</h2>
                <p>การเข้าถึงและใช้งานเว็บไซต์นี้ ถือว่าคุณยอมรับข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ในหน้านี้</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">2. ทรัพย์สินทางปัญญา</h2>
                <p>เนื้อหาทั้งหมดบนเว็บไซต์นี้ รวมถึงข้อความ รูปภาพ และโลโก้ เป็นทรัพย์สินของร้าน ช.สหชัย และ <strong>AEMDEVWEB</strong> ห้ามมิให้มีการคัดลอกหรือนำไปใช้เพื่อการค้าโดยไม่ได้รับอนุญาต</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">3. การปฏิเสธความรับผิดชอบ</h2>
                <p>เราพยายามอย่างดีที่สุดในการแสดงข้อมูลราคาและรายการเมนูให้ถูกต้องที่สุด อย่างไรก็ตาม ราคาอาจมีการเปลี่ยนแปลงตามความเหมาะสมโดยไม่ต้องแจ้งให้ทราบล่วงหน้า</p>
              </section>
              <section className="pt-10 border-t border-border mt-10">
                <p className="text-sm">ดูแลและพัฒนาระบบโดย <strong>AEMDEVWEB</strong> (Digital Solutions Provider)</p>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
