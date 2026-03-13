"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { customerReviews } from "@/data/reviews";
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function ReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="reviews" className="bg-muted/10 relative overflow-hidden py-32">
      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-xl space-y-4">
            <Badge className="bg-primary/10 text-primary rounded-full border-none px-4 py-1 font-bold tracking-widest uppercase">
              รีวิวจริงจากลูกค้า
            </Badge>
            <h2 className="text-4xl leading-none font-black tracking-tighter md:text-5xl">
              ความประทับใจ <br />
              <span className="text-primary text-4xl italic md:text-6xl">การันตีความอร่อย</span>
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="border-primary/20 text-primary hover:bg-primary flex h-14 w-14 items-center justify-center rounded-full border bg-white shadow-lg transition-all hover:text-white active:scale-90"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={scrollNext}
              className="border-primary/20 text-primary hover:bg-primary flex h-14 w-14 items-center justify-center rounded-full border bg-white shadow-lg transition-all hover:text-white active:scale-90"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="cursor-grab overflow-hidden active:cursor-grabbing" ref={emblaRef}>
          <div className="-ml-6 flex">
            {customerReviews.map((review) => (
              <div
                key={review.id}
                className="flex-[0_0_100%] pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="border-primary/5 group flex h-full flex-col justify-between rounded-[3rem] border bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div>
                    <div className="mb-6 flex items-start justify-between">
                      <div className="text-secondary flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <Quote className="text-primary/5 h-8 w-8" />
                    </div>
                    <p className="text-foreground mb-8 text-lg leading-relaxed font-medium italic">
                      "{review.comment}"
                    </p>
                  </div>

                  <div className="border-muted flex items-center gap-4 border-t pt-6">
                    <div className="bg-primary/5 text-primary flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-black">
                      {review.avatarInitials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-foreground font-bold">{review.name}</span>
                        {review.isVerified && (
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" />
                        )}
                      </div>
                      <div className="text-muted-foreground flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase">
                        <MapPin className="h-2.5 w-2.5" />
                        {review.location} • {review.date}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
