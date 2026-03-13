"use client";

import { Check } from "lucide-react";
import { siteConfig } from "@/constants/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function MenuHighlights() {
  const { pricing } = siteConfig;

  return (
    <section className="py-24 bg-muted/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">{pricing.badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{pricing.title}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{pricing.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[32px] border bg-card hover:shadow-2xl transition-all duration-500 ${
                tier.highlighted ? "border-primary shadow-xl ring-1 ring-primary/20 scale-105 z-10" : "border-border"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground font-bold shadow-md uppercase tracking-wider text-[10px] px-3">
                    เมนูยอดนิยม
                  </Badge>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground">{tier.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-4 leading-relaxed italic">
                  "{tier.description}"
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "default" : "outline"}
                className="w-full h-12 rounded-xl font-bold text-sm tracking-wide"
                asChild
              >
                <a href="#contact">{tier.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
