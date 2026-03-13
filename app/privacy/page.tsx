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
    <div className="bg-background flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <h1 className="mb-4 text-4xl font-black tracking-tighter md:text-5xl">
                นโยบายความเป็นส่วนตัว
              </h1>
              <p className="text-muted-foreground">ปรับปรุงล่าสุดเมื่อ: 13 มีนาคม 2026</p>
            </div>

            <div className="prose prose-neutral text-muted-foreground max-w-none space-y-12 leading-relaxed">
              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">บทนำ</h2>
                <p>
                  ร้าน ช.สหชัย เกี๊ยวปูหมูแดง ("เรา")
                  ให้ความสำคัญอย่างยิ่งต่อการคุ้มครองข้อมูลส่วนบุคคลของคุณ
                  นโยบายนี้ระบุถึงวิธีการที่เราเก็บรวบรวม ใช้
                  และเปิดเผยข้อมูลของคุณผ่านเว็บไซต์ที่พัฒนาโดย <strong>AEMDEVWEB</strong>
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">
                  1. ข้อมูลที่เราเก็บรวบรวม
                </h2>
                <p>เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลที่ท่านเลือกที่จะให้ไว้กับเรา ได้แก่:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>ข้อมูลระบุตัวตน: ชื่อ-นามสกุล</li>
                  <li>ข้อมูลการติดต่อ: เบอร์โทรศัพท์, ID LINE, ที่อยู่อีเมล</li>
                  <li>
                    ข้อมูลทางเทคนิค: ที่อยู่ IP, ประเภทเบราว์เซอร์ และคุกกี้
                    (สำหรับการวิเคราะห์คุณภาพเว็บไซต์โดย AEMDEVWEB)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">
                  2. วัตถุประสงค์ในการใช้ข้อมูล
                </h2>
                <p>เรานำข้อมูลของท่านไปใช้เพื่อวัตถุประสงค์ดังต่อไปนี้:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>เพื่อดำเนินการตามคำสั่งซื้อหรือบริการจัดเลี้ยงนอกสถานที่</li>
                  <li>เพื่อติดต่อสื่อสารและยืนยันนัดหมายกับท่าน</li>
                  <li>
                    เพื่อวิเคราะห์และปรับปรุงประสิทธิภาพของเว็บไซต์โดย <strong>AEMDEVWEB</strong>
                  </li>
                  <li>เพื่อปฏิบัติตามข้อบังคับทางกฎหมายที่เกี่ยวข้อง</li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">3. การคุ้มครองข้อมูล</h2>
                <p>
                  เรามีมาตรการรักษาความปลอดภัยทางเทคนิคและการบริหารจัดการที่ได้มาตรฐาน
                  เพื่อป้องกันไม่ให้ข้อมูลของท่านสูญหาย หรือถูกเข้าถึงโดยไม่ได้รับอนุญาต
                  โดยระบบของเราได้รับการพัฒนาและตรวจสอบความปลอดภัยอย่างสม่ำเสมอโดยทีมวิศวกรจาก{" "}
                  <strong>AEMDEVWEB</strong>
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">4. สิทธิของท่าน</h2>
                <p>
                  ท่านมีสิทธิในการขอเข้าถึง แก้ไข ลบ หรือคัดค้านการประมวลผลข้อมูลส่วนบุคคลของท่าน
                  ท่านสามารถติดต่อเราได้โดยตรงผ่านช่องทางที่ระบุไว้ในหน้า "ติดต่อเรา"
                </p>
              </section>

              <div className="bg-primary/5 border-primary/10 mt-20 rounded-[3rem] border p-10 text-center">
                <p className="text-muted-foreground mb-2 text-sm font-bold tracking-widest uppercase">
                  Developed & Managed by
                </p>
                <h3 className="text-primary text-2xl font-black italic">AEMDEVWEB</h3>
                <p className="mt-4 text-sm leading-relaxed">
                  "เรามุ่งมั่นสร้างนวัตกรรมดิจิทัลที่ปลอดภัยและโปร่งใส
                  เพื่อการเติบโตอย่างยั่งยืนของธุรกิจท้องถิ่น"
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
