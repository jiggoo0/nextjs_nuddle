import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";
import servicesData from "@/data/services.json";

interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  img: string;
  recommended: boolean;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const metadata: Metadata = {
  title: "เมนูอร่อย | ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก",
  description:
    "รวมเมนูเด็ดร้าน ช.สหชัย เกี๊ยวปูหมูแดง บะหมี่ทำเอง หมูแดงย่างเตาถ่าน และเกี๊ยวปูเนื้อแน่น คัดสรรความอร่อยมาให้คุณ",
  keywords: ["เมนู ช.สหชัย", "บะหมี่เกี๊ยวปู", "ราคาบะหมี่ตาก", "ของกินเมืองตาก", "ร้านอร่อยตาก"],
};

export default function MenuPage() {
  const categories = servicesData.categories as unknown as MenuCategory[];

  return (
    <div className="flex-min-h-screen bg-warm-cream flex flex-col">
      <Navigation />

      <main className="flex-grow pt-24 pb-20">
        <div className="container-stable">
          <AnimatedSection className="mb-16 text-center">
            <Badge className="bg-primary-red/10 text-primary-red mb-4 border-none px-4 py-1 text-sm font-bold tracking-wider">
              OUR MENU
            </Badge>
            <h1 className="text-primary-dark mb-6 text-4xl font-extrabold md:text-5xl">
              เมนูความอร่อย <span className="text-primary-red">ช.สหชัย</span>
            </h1>
            <p className="text-light-text mx-auto max-w-2xl text-lg">
              ทุกชามคือความใส่ใจ เส้นบะหมี่ทำเองสูตรโบราณ หมูแดงย่างเตาถ่านหอมกรุ่น และเกี๊ยวปูคำโต
            </p>
          </AnimatedSection>

          {categories.map((category: MenuCategory, catIdx: number) => (
            <AnimatedSection key={catIdx} className="mb-20">
              <div className="mb-8 flex items-center gap-4">
                <h2 className="text-dark-text text-3xl font-bold whitespace-nowrap">
                  {category.name}
                </h2>
                <div className="bg-noodle-gold/50 h-px w-full"></div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item: MenuItem) => (
                  <Card
                    key={item.id}
                    className="group overflow-hidden rounded-2xl border-none bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={`/images/${item.img}`}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {item.recommended && (
                        <Badge className="bg-noodle-gold text-primary-dark absolute top-4 left-4 border-none px-3 py-1 font-bold shadow-md">
                          <Star className="fill-primary-dark mr-1 h-3 w-3" /> แนะนำ
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <h3 className="text-dark-text text-xl leading-tight font-bold">
                          {item.name}
                        </h3>
                        <span className="text-primary-red bg-warm-cream border-primary-red/10 shrink-0 rounded-lg border px-3 py-1 text-lg font-bold">
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
