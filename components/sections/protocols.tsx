"use client";

import { AnimatedSection, AnimatedCard } from "@/components/animated-section";
import { siteConfig } from "@/constants/site-config";

export function ProtocolsSection() {
  const { protocols } = siteConfig;

  return (
    <section id="protocols" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase">
            {protocols.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4 tracking-tight">
            {protocols.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {protocols.description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {protocols.items.map((protocol, index) => (
            <AnimatedCard key={protocol.title} delay={index * 0.1}>
              <div className="glass glass-hover rounded-xl p-8 h-full flex flex-col transition-all duration-500 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                  <protocol.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                  {protocol.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {protocol.description}
                </p>

                <ul className="flex flex-col gap-2.5">
                  {protocol.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <div className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
