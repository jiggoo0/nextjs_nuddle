"use client";

import Link from "next/link";
import { siteConfig } from "@/constants/site-config";
import { Facebook, MapPin, Phone, MessageCircle } from "lucide-react";

export function FooterSection() {
  const { identity, contact, navigation } = siteConfig;

  return (
    <footer className="bg-muted/30 border-border border-t py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-6 inline-block" aria-label="กลับสู่หน้าแรก ช.สหชัย">
              <span className="text-foreground text-2xl font-black tracking-tighter">
                ช.สหชัย <span className="text-primary font-serif italic">เกี๊ยวปูหมูแดง</span>
              </span>
            </Link>
            <p className="text-foreground mb-8 max-w-sm text-sm font-bold leading-relaxed">
              {identity.description}
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/SahachaiNoodleTak"
                target="_blank"
                aria-label="ติดตาม ช.สหชัย บน Facebook"
                className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={contact.lineUrl}
                target="_blank"
                aria-label="สอบถามทาง LINE Official Account"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00B900]/10 text-[#00B900] transition-all hover:scale-110 hover:bg-[#00B900] hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link
                href={contact.googleMaps}
                target="_blank"
                aria-label="ดูเส้นทางร้านบน Google Maps"
                className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 hover:text-white"
              >
                <MapPin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-black tracking-widest uppercase text-foreground">เมนูเว็บไซต์</h4>
            <ul className="space-y-4">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground hover:text-primary text-sm font-bold transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-sm font-black tracking-widest uppercase text-foreground">ติดต่อร้าน</h4>
            <div className="space-y-4">
              <div className="text-foreground flex gap-3 text-sm font-bold">
                <Phone className="text-primary h-4 w-4 shrink-0" />
                <span>{contact.phoneDisplay}</span>
              </div>
              <div className="text-foreground flex gap-3 text-sm font-bold leading-relaxed">
                <MapPin className="text-primary h-4 w-4 shrink-0" />
                <span>{contact.address}</span>
              </div>
              <div className="bg-primary/10 border-primary/20 mt-6 rounded-2xl border p-4 shadow-sm">
                <p className="text-primary mb-1 text-xs font-black tracking-widest uppercase">
                  เวลาเปิดให้บริการ
                </p>
                <p className="text-foreground text-xs font-black">{contact.businessHours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-border mt-16 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-foreground text-[10px] font-black tracking-widest uppercase mb-1">
              © {new Date().getFullYear()} {identity.name}. สงวนลิขสิทธิ์.
            </p>
            <p className="text-foreground/80 text-[10px] font-bold leading-relaxed">
              Chef & Founder: นายอเนก ยมเกิด (เฮียเนก) & นางนัชรินทร์ ยมเกิด (เจ๊ตั๊ก) <br />
              Digital Heritage & Strategy by <Link href="https://www.aemdevweb.com" target="_blank" className="hover:text-primary font-black underline">AEMDEVWEB</Link>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/privacy"
              className="text-foreground hover:text-primary text-[10px] font-black tracking-widest uppercase transition-colors"
            >
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link
              href="/terms"
              className="text-foreground hover:text-primary text-[10px] font-black tracking-widest uppercase transition-colors"
            >
              ข้อกำหนดการใช้งาน
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
