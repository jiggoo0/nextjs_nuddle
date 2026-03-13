"use client";

import { Check } from "lucide-react";
import { siteConfig } from "@/constants/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function MenuHighlights() {
  const { pricing } = siteConfig;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {pricing.tiers.map((tier, index) => (
        <motion.div
          key={tier.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`bg-card relative flex flex-col rounded-[32px] border p-8 transition-all duration-500 hover:shadow-2xl ${
            tier.highlighted
              ? "border-primary ring-primary/20 z-10 scale-105 shadow-xl ring-1"
              : "border-border"
          }`}
        >
          {tier.highlighted && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground px-3 text-[10px] font-bold tracking-wider uppercase shadow-md">
                เมนูยอดนิยม
              </Badge>
            </div>
          )}

          <div className="mb-8">
            <h3 className="mb-2 text-xl font-bold">{tier.name}</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-foreground text-4xl font-bold tracking-tight">
                {tier.price}
              </span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed italic">
              "{tier.description}"
            </p>
          </div>

          <ul className="mb-10 flex-grow space-y-4">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <div className="bg-primary/10 text-primary mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full">
                  <Check className="h-2.5 w-2.5" />
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            variant={tier.highlighted ? "default" : "outline"}
            className="h-12 w-full rounded-xl text-sm font-bold tracking-wide"
            asChild
          >
            <a href="#contact">{tier.cta}</a>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
