import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { FooterSection } from "@/components/sections/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";
import servicesData from "@/data/services.json";

export const metadata: Metadata = {
  title: "เมนูอร่อย | ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก",
  description: "รวมเมนูเด็ดร้าน ช.สหชัย เกี๊ยวปูหมูแดง บะหมี่ทำเอง หมูแดงย่างเตาถ่าน และเกี๊ยวปูเนื้อแน่น คัดสรรความอร่อยมาให้คุณ",
  keywords: ["เมนู ช.สหชัย", "บะหมี่เกี๊ยวปู", "ราคาบะหมี่ตาก", "ของกินเมืองตาก", "ร้านอร่อยตาก"],
};

export default function MenuPage() {
  return (
    <div className="flex flex-min-h-screen flex-col bg-warm-cream">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container-stable">
          <AnimatedSection className="text-center mb-16">
            <Badge className="bg-primary-red/10 text-primary-red border-none mb-4 px-4 py-1 text-sm font-bold tracking-wider">
              OUR MENU
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary-dark">
              เมนูความอร่อย <span className="text-primary-red">ช.สหชัย</span>
            </h1>
            <p className="text-lg text-light-text max-w-2xl mx-auto">
              ทุกชามคือความใส่ใจ เส้นบะหมี่ทำเองสูตรโบราณ หมูแดงย่างเตาถ่านหอมกรุ่น และเกี๊ยวปูคำโต
            </p>
          </AnimatedSection>

          {servicesData.categories.map((category: any, catIdx: number) => (
            <AnimatedSection key={catIdx} className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-dark-text whitespace-nowrap">{category.name}</h2>
                <div className="h-px bg-noodle-gold/50 w-full"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item: any) => (
                  <Card key={item.id} className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white group">
                    <div className="relative h-64 overflow-hidden">
                      <Image 
                        src={`/images/${item.img}`} 
                        alt={item.name} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      {item.recommended && (
                        <Badge className="absolute top-4 left-4 bg-noodle-gold text-primary-dark font-bold border-none shadow-md px-3 py-1">
                          <Star className="w-3 h-3 mr-1 fill-primary-dark" /> แนะนำ
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3 gap-2">
                        <h3 className="text-xl font-bold text-dark-text leading-tight">{item.name}</h3>
                        <span className="text-primary-red font-bold text-lg bg-warm-cream px-3 py-1 rounded-lg shrink-0 border border-primary-red/10">
                          {item.price}.-
                        </span>
                      </div>
                      <p className="text-light-text text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
