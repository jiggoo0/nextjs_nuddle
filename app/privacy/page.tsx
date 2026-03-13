import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: `นโยบายความเป็นส่วนตัว | ${siteConfig.identity.name}`,
  description: "นโยบายการคุ้มครองข้อมูลส่วนบุคคลของร้าน ช.สหชัย พัฒนาโดย AEMDEVWEB",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <h1 className="text-4xl font-black mb-10 tracking-tighter">นโยบายความเป็นส่วนตัว</h1>
            <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">1. การเก็บรวบรวมข้อมูล</h2>
                <p>เราเก็บรวบรวมข้อมูลที่คุณให้ไว้เมื่อคุณติดต่อเราผ่านหน้าเว็บไซต์ หรือช่องทางโซเชียลมีเดีย เช่น ชื่อ เบอร์โทรศัพท์ เพื่อวัตถุประสงค์ในการให้บริการที่รวดเร็วและมีประสิทธิภาพที่สุด</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">2. การใช้ข้อมูล</h2>
                <p>ข้อมูลของคุณจะถูกใช้เพื่อยืนยันการสั่งซื้ออาหาร การส่งข่าวสารโปรโมชั่น (หากได้รับอนุญาต) และการปรับปรุงคุณภาพการให้บริการของร้าน ช.สหชัย เท่านั้น</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">3. ความปลอดภัยของข้อมูล</h2>
                <p>เราให้ความสำคัญกับการรักษาความปลอดภัยข้อมูลส่วนบุคคลของคุณ เว็บไซต์ของเราได้รับการพัฒนาโดย <strong>AEMDEVWEB</strong> โดยใช้เทคโนโลยี Next.js 16 ที่มีความปลอดภัยสูง เพื่อป้องกันการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต</p>
              </section>
              <section className="p-8 bg-primary/5 rounded-3xl border border-primary/10 italic">
                <p>นโยบายนี้มีผลตั้งแต่วันที่ 13 มีนาคม 2026 เป็นต้นไป หากมีการเปลี่ยนแปลงใดๆ เราจะทำการแจ้งให้ทราบผ่านหน้าเว็บไซต์นี้</p>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
