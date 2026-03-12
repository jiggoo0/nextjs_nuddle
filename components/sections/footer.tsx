"use client";

import { siteConfig } from "@/constants/site-config";

export function FooterSection() {
  const { footer, identity } = siteConfig;

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-bold text-xs font-mono">
                {identity.name.charAt(0)}
              </span>
            </div>
            <span className="text-foreground font-bold text-sm tracking-tight">
              {identity.name}
            </span>
          </div>

          <nav className="flex items-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-xs font-medium tracking-widest uppercase"
              >
                {link.label || link.title}
              </a>
            ))}
          </nav>

          <p className="text-muted-foreground text-xs tracking-wide">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
