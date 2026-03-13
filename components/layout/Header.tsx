"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/constants/site-config";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass shadow-background/50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="border-primary/10 relative h-10 w-10 overflow-hidden rounded-xl border shadow-sm transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.svg"
                alt="โลโก้ร้าน ช.สหชัย"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-foreground text-lg font-bold tracking-tighter">ช.สหชัย</span>
              <span className="text-primary text-[10px] font-bold tracking-widest uppercase">
                since 2017
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {siteConfig.navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm font-medium tracking-wide transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="glow-border bg-primary/10 hover:bg-primary/20 text-primary hidden items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 sm:inline-flex"
            >
              สั่งอาหาร
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:bg-secondary rounded-lg p-2 transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-background/80 fixed inset-0 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="glass fixed top-20 right-0 bottom-0 w-72 md:hidden"
            >
              <div className="flex flex-col gap-6 p-8">
                {siteConfig.navigation.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground block text-base font-medium tracking-wide transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
                <div className="border-border border-t pt-6">
                  <Link
                    href="/#contact"
                    className="glow-border bg-primary/10 hover:bg-primary/20 text-primary block rounded-lg px-5 py-3 text-center text-sm font-semibold tracking-wide transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    สั่งอาหาร
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
