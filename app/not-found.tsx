import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchX, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFDF9]">
      <Navigation />
      <main className="flex flex-grow flex-col items-center justify-center px-6 text-center pt-20">
        <div className="bg-primary/5 mb-8 flex h-32 w-32 items-center justify-center rounded-[3rem] text-primary">
          <SearchX className="h-16 w-16" />
        </div>
        
        <h1 className="mb-4 text-5xl font-black tracking-tighter text-[#4A3728] md:text-7xl">
          ไม่พบหน้าที่ต้องการ
        </h1>
        
        <p className="text-muted-foreground mx-auto mb-12 max-w-md text-lg font-medium">
          ขออภัยครับ ดูเหมือนว่าหน้าที่คุณกำลังตามหาจะไม่มีอยู่จริง <br />
          หรืออาจถูกย้ายไปที่อื่นแล้ว แวะทานบะหมี่ก่อนไหมครับ?
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            variant="outline"
            className="h-14 rounded-2xl border-[#4A3728]/10 px-8 text-lg font-bold"
          >
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-5 w-5" /> ย้อนกลับ
            </Link>
          </Button>
          
          <Button
            asChild
            className="bg-primary h-14 rounded-2xl px-8 text-lg font-bold shadow-xl shadow-primary/20"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" /> กลับหน้าหลัก
            </Link>
          </Button>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
