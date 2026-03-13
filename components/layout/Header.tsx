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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass shadow-lg shadow-background/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-primary/10 shadow-sm transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.svg"
                alt="โลโก้ร้าน ช.สหชัย"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-foreground font-bold text-lg tracking-tighter">
                ช.สหชัย
              </span>
              <span className="text-[10px] text-primary font-bold uppercase tracking-widest">
                since 2017
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium tracking-wide"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden sm:inline-flex glow-border items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300"
            >
              สั่งอาหาร
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground p-2 hover:bg-secondary rounded-lg transition-colors"
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
              className="fixed inset-0 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-20 right-0 bottom-0 w-72 glass md:hidden"
            >
              <div className="flex flex-col p-8 gap-6">
                {siteConfig.navigation.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium tracking-wide block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
                <div className="border-t border-border pt-6">
                  <Link
                    href="/#contact"
                    className="glow-border block text-center bg-primary/10 hover:bg-primary/20 text-primary px-5 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all"
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
