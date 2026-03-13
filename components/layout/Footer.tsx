"use client";

import Link from "next/link";
import { siteConfig } from "@/constants/site-config";
import { Facebook, MapPin, Phone, MessageCircle } from "lucide-react";

export function FooterSection() {
  const { identity, contact, navigation } = siteConfig;

  return (
    <footer className="bg-muted/30 border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tighter text-foreground">
                ช.สหชัย <span className="text-primary">เกี๊ยวปูหมูแดง</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8">
              {identity.description}
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/SahachaiNoodleTak"
                target="_blank"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href={contact.lineUrl}
                target="_blank"
                className="w-10 h-10 rounded-full bg-[#00B900]/10 flex items-center justify-center text-[#00B900] hover:bg-[#00B900] hover:text-white hover:scale-110 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link
                href={contact.googleMaps}
                target="_blank"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all"
              >
                <MapPin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">เมนูเว็บไซต์</h4>
            <ul className="space-y-4">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">ติดต่อร้าน</h4>
            <div className="space-y-4">
              <div className="flex gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>{contact.phoneDisplay}</span>
              </div>
              <div className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{contact.address}</span>
              </div>
              <div className="mt-6 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <p className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">เวลาเปิดให้บริการ</p>
                <p className="text-xs text-foreground font-semibold">{contact.businessHours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} {identity.name}. สงวนลิขสิทธิ์. พัฒนาโดย AEMDEVWEB.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">นโยบายความเป็นส่วนตัว</Link>
            <Link href="/terms" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">ข้อกำหนดการใช้งาน</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
