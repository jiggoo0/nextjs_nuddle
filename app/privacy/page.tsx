import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: `นโยบายความเป็นส่วนตัว | ${siteConfig.identity.name}`,
  description: "นโยบายการคุ้มครองข้อมูลส่วนบุคคลของร้าน ช.สหชัย พัฒนาและดูแลระบบโดย AEMDEVWEB",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">นโยบายความเป็นส่วนตัว</h1>
              <p className="text-muted-foreground">ปรับปรุงล่าสุดเมื่อ: 13 มีนาคม 2026</p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-12 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">บทนำ</h2>
                <p>ร้าน ช.สหชัย เกี๊ยวปูหมูแดง ("เรา") ให้ความสำคัญอย่างยิ่งต่อการคุ้มครองข้อมูลส่วนบุคคลของคุณ นโยบายนี้ระบุถึงวิธีการที่เราเก็บรวบรวม ใช้ และเปิดเผยข้อมูลของคุณผ่านเว็บไซต์ที่พัฒนาโดย <strong>AEMDEVWEB</strong></p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">1. ข้อมูลที่เราเก็บรวบรวม</h2>
                <p>เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลที่ท่านเลือกที่จะให้ไว้กับเรา ได้แก่:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>ข้อมูลระบุตัวตน: ชื่อ-นามสกุล</li>
                  <li>ข้อมูลการติดต่อ: เบอร์โทรศัพท์, ID LINE, ที่อยู่อีเมล</li>
                  <li>ข้อมูลทางเทคนิค: ที่อยู่ IP, ประเภทเบราว์เซอร์ และคุกกี้ (สำหรับการวิเคราะห์คุณภาพเว็บไซต์โดย AEMDEVWEB)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">2. วัตถุประสงค์ในการใช้ข้อมูล</h2>
                <p>เรานำข้อมูลของท่านไปใช้เพื่อวัตถุประสงค์ดังต่อไปนี้:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>เพื่อดำเนินการตามคำสั่งซื้อหรือบริการจัดเลี้ยงนอกสถานที่</li>
                  <li>เพื่อติดต่อสื่อสารและยืนยันนัดหมายกับท่าน</li>
                  <li>เพื่อวิเคราะห์และปรับปรุงประสิทธิภาพของเว็บไซต์โดย <strong>AEMDEVWEB</strong></li>
                  <li>เพื่อปฏิบัติตามข้อบังคับทางกฎหมายที่เกี่ยวข้อง</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">3. การคุ้มครองข้อมูล</h2>
                <p>เรามีมาตรการรักษาความปลอดภัยทางเทคนิคและการบริหารจัดการที่ได้มาตรฐาน เพื่อป้องกันไม่ให้ข้อมูลของท่านสูญหาย หรือถูกเข้าถึงโดยไม่ได้รับอนุญาต โดยระบบของเราได้รับการพัฒนาและตรวจสอบความปลอดภัยอย่างสม่ำเสมอโดยทีมวิศวกรจาก <strong>AEMDEVWEB</strong></p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">4. สิทธิของท่าน</h2>
                <p>ท่านมีสิทธิในการขอเข้าถึง แก้ไข ลบ หรือคัดค้านการประมวลผลข้อมูลส่วนบุคคลของท่าน ท่านสามารถติดต่อเราได้โดยตรงผ่านช่องทางที่ระบุไว้ในหน้า "ติดต่อเรา"</p>
              </section>

              <div className="p-10 bg-primary/5 rounded-[3rem] border border-primary/10 text-center mt-20">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Developed & Managed by</p>
                <h3 className="text-2xl font-black text-primary italic">AEMDEVWEB</h3>
                <p className="text-sm mt-4 leading-relaxed">
                  "เรามุ่งมั่นสร้างนวัตกรรมดิจิทัลที่ปลอดภัยและโปร่งใส เพื่อการเติบโตอย่างยั่งยืนของธุรกิจท้องถิ่น"
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
