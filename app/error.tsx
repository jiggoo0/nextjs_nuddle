"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCcw } from "lucide-react";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service like Sentry or Vercel
    console.error("Critical System Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFFDF9] px-6 text-center">
      <div className="bg-destructive/10 mb-8 flex h-24 w-24 items-center justify-center rounded-[2.5rem] text-destructive">
        <AlertTriangle className="h-12 w-12" />
      </div>
      
      <h1 className="mb-4 text-4xl font-black tracking-tighter text-[#4A3728]">
        เกิดข้อผิดพลาดบางประการ
      </h1>
      
      <p className="text-muted-foreground mx-auto mb-12 max-w-md text-lg font-medium">
        ขออภัยในความไม่สะดวก ระบบพบปัญหาทางเทคนิคชั่วคราว <br />
        กรุณาลองใหม่อีกครั้ง หรือกลับสู่หน้าหลักครับ
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          onClick={() => reset()}
          variant="outline"
          className="h-14 rounded-2xl border-[#4A3728]/10 px-8 text-lg font-bold"
        >
          <RefreshCcw className="mr-2 h-5 w-5" /> ลองใหม่อีกครั้ง
        </Button>
        
        <Button
          asChild
          className="bg-primary h-14 rounded-2xl px-8 text-lg font-bold shadow-xl shadow-primary/20"
        >
          <Link href="/">
            <Home className="mr-2 h-5 w-5" /> กลับสู่หน้าหลัก
          </Link>
        </Button>
      </div>

      <div className="mt-16 text-[10px] font-black uppercase tracking-[0.3em] text-[#4A3728]/30">
        System Guard by AEMDEVWEB
      </div>
    </div>
  );
}
