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
            <Link href="/" className="mb-6 inline-block">
              <span className="text-foreground text-2xl font-bold tracking-tighter">
                ช.สหชัย <span className="text-primary">เกี๊ยวปูหมูแดง</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm text-sm leading-relaxed">
              {identity.description}
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/SahachaiNoodleTak"
                target="_blank"
                className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={contact.lineUrl}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00B900]/10 text-[#00B900] transition-all hover:scale-110 hover:bg-[#00B900] hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link
                href={contact.googleMaps}
                target="_blank"
                className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 hover:text-white"
              >
                <MapPin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold tracking-widest uppercase">เมนูเว็บไซต์</h4>
            <ul className="space-y-4">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-sm font-bold tracking-widest uppercase">ติดต่อร้าน</h4>
            <div className="space-y-4">
              <div className="text-muted-foreground flex gap-3 text-sm">
                <Phone className="text-primary h-4 w-4 shrink-0" />
                <span>{contact.phoneDisplay}</span>
              </div>
              <div className="text-muted-foreground flex gap-3 text-sm leading-relaxed">
                <MapPin className="text-primary h-4 w-4 shrink-0" />
                <span>{contact.address}</span>
              </div>
              <div className="bg-primary/5 border-primary/10 mt-6 rounded-2xl border p-4">
                <p className="text-primary mb-1 text-xs font-bold tracking-widest uppercase">
                  เวลาเปิดให้บริการ
                </p>
                <p className="text-foreground text-xs font-semibold">{contact.businessHours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-border mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} {identity.name}. สงวนลิขสิทธิ์. พัฒนาโดย AEMDEVWEB.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground text-[10px] tracking-widest uppercase transition-colors"
            >
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground text-[10px] tracking-widest uppercase transition-colors"
            >
              ข้อกำหนดการใช้งาน
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
