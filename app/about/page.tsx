import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { FooterSection } from "@/components/sections/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, Star } from "lucide-react";
import Image from "next/image";
import familyData from "@/data/fammiry.json";
import siteData from "@/data/site.json";

export const metadata: Metadata = {
  title: "รู้จักเรา เฮียเนก-เจ๊ตั๊ก | ตำนานบะหมี่ 9 ปี จ.ตาก",
  description: "เรื่องราวความเป็นมาของร้าน ช.สหชัย เกี๊ยวปูหมูแดง จังหวัดตาก จุดเริ่มต้นความอร่อยจากหัวใจเฮียเนกและเจ๊ตั๊ก สู่ตำนานที่ครองใจลูกค้ามากว่า 9 ปี",
  keywords: ["ประวัติ ช.สหชัย", "เฮียเนก", "เจ๊ตั๊ก", "ตำนานบะหมี่ตาก", "ร้านบะหมี่เก่าแก่"],
};

export default function AboutPage() {
  return (
    <div className="flex flex-min-h-screen flex-col bg-warm-cream">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container-stable">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-primary-red/10 text-primary-red border-none mb-4 px-4 py-1 text-sm font-bold tracking-wider">
              OUR STORY
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary-dark">
              {familyData.story_title}
            </h1>
            <p className="text-lg text-light-text leading-relaxed">
              จากความรักในการทำอาหาร สู่ความตั้งใจที่อยากให้ทุกคนได้ทานของอร่อยเหมือนคนในครอบครัว
            </p>
          </AnimatedSection>

          <AnimatedSection className="grid lg:grid-cols-2 gap-12 items-center mb-20 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-primary-red/5">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg border-4 border-noodle-gold">
              <Image 
                src="/images/banner.jpg" 
                alt="บรรยากาศร้าน ช.สหชัย" 
                fill 
                className="object-cover" 
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-red">จุดเริ่มต้นแห่งความภูมิใจ</h2>
              <p className="text-light-text leading-relaxed mb-6 text-lg indent-8">
                {familyData.description}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-3 bg-warm-cream px-5 py-3 rounded-xl">
                  <Award className="text-noodle-gold w-8 h-8" />
                  <div>
                    <p className="font-bold text-dark-text leading-none">9 ปี</p>
                    <p className="text-xs text-light-text">แห่งความเชื่อมั่น</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-warm-cream px-5 py-3 rounded-xl">
                  <Star className="text-noodle-gold w-8 h-8" />
                  <div>
                    <p className="font-bold text-dark-text leading-none">สูตรโบราณ</p>
                    <p className="text-xs text-light-text">ทำเองทุกขั้นตอน</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">หัวใจของ <span className="text-primary-red">ช.สหชัย</span></h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {familyData.members.map((member: any) => (
                <div key={member.id} className="bg-white p-8 rounded-3xl shadow-sm border border-primary-red/5 text-center flex flex-col items-center group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary-red/10">
                  <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-warm-cream group-hover:border-noodle-gold transition-colors duration-300 shadow-inner">
                    <Image 
                      src={`/images/${member.img}`} 
                      alt={member.name} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-1">{member.name}</h3>
                  <Badge className="bg-primary-red text-white mb-4">{member.role}</Badge>
                  <p className="text-light-text italic">"{member.bio}"</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">เส้นทางของเรา (Milestones)</h2>
            <div className="space-y-6 text-left">
              {familyData.milestones.map((ms: any, idx: number) => (
                <div key={idx} className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border-l-4 border-noodle-gold">
                  <div className="bg-primary-red/10 text-primary-red font-bold py-2 px-4 rounded-lg shrink-0">
                    {ms.year}
                  </div>
                  <p className="text-lg text-dark-text mt-1">{ms.event}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
