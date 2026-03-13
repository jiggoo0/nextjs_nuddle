import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: `ข้อกำหนดการใช้งาน | ${siteConfig.identity.name}`,
  description: "เงื่อนไขและข้อกำหนดการใช้งานเว็บไซต์ ช.สหชัย พัฒนาและดูแลโดย AEMDEVWEB",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">ข้อกำหนดการใช้งาน</h1>
              <p className="text-muted-foreground">มีผลบังคับใช้ตั้งแต่วันที่: 13 มีนาคม 2026</p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-12 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">1. การยอมรับเงื่อนไข</h2>
                <p>การเข้าถึงหรือใช้งานเว็บไซต์นี้ ถือว่าท่านตกลงที่จะผูกพันตามข้อกำหนดและเงื่อนไขการใช้งานเหล่านี้ กฎหมายและข้อบังคับที่เกี่ยวข้องทั้งหมด หากท่านไม่เห็นด้วยกับเงื่อนไขใดๆ ท่านจะไม่ได้รับอนุญาตให้ใช้งานเว็บไซต์นี้</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">2. ทรัพย์สินทางปัญญา</h2>
                <p>เนื้อหา รูปภาพ โลโก้ และการออกแบบเว็บไซต์ทั้งหมดเป็นทรัพย์สินทางปัญญาของร้าน ช.สหชัย เกี๊ยวปูหมูแดง และ <strong>AEMDEVWEB</strong> ห้ามมิให้ทำซ้ำ ดัดแปลง หรือเผยแพร่โดยไม่ได้รับความยินยอมเป็นลายลักษณ์อักษร</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">3. ข้อมูลผลิตภัณฑ์และราคา</h2>
                <p>เราพยายามอย่างเต็มที่ในการให้ข้อมูลราคาและรายการอาหารที่ถูกต้องที่สุด อย่างไรก็ตาม ราคาที่แสดงอาจมีการเปลี่ยนแปลงได้ตามความเหมาะสมและสถานการณ์ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า โดยเฉพาะในกรณีของบริการรับเหมาจัดเลี้ยงนอกสถานที่ซึ่งต้องมีการประเมินราคาเป็นรายกรณี</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">4. การปฏิเสธความรับผิดชอบ</h2>
                <p>เนื้อหาบนเว็บไซต์นี้จัดทำขึ้นเพื่อการให้ข้อมูลทั่วไปเท่านั้น ร้าน ช.สหชัย และ <strong>AEMDEVWEB</strong> จะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดจากการใช้งานหรือการไม่สามารถใช้งานเนื้อหาบนเว็บไซต์นี้ได้</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">5. การแก้ไขปรับปรุง</h2>
                <p>เราอาจปรับปรุงข้อกำหนดการใช้งานเหล่านี้ได้ทุกเมื่อโดยไม่ต้องแจ้งให้ทราบล่วงหน้า การใช้งานเว็บไซต์อย่างต่อเนื่องของท่านจะถือว่าท่านยอมรับการเปลี่ยนแปลงดังกล่าว</p>
              </section>

              <div className="pt-16 border-t border-border mt-20 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Technical Provider</p>
                  <h4 className="text-xl font-black italic">AEMDEVWEB</h4>
                </div>
                <div className="text-center md:text-right text-sm">
                  <p>ดูแลระบบโดยทีมงานมืออาชีพ</p>
                  <p className="font-bold">Next.js 16 High-Performance Infrastructure</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
