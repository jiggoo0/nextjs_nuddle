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
    skipSnaps: false
  });
  
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="reviews" className="py-32 bg-muted/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl space-y-4">
            <Badge className="bg-primary/10 text-primary border-none px-4 py-1 rounded-full font-bold uppercase tracking-widest">
              รีวิวจริงจากลูกค้า
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
              ความประทับใจ <br />
              <span className="text-primary italic text-4xl md:text-6xl">การันตีความอร่อย</span>
            </h2>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all active:scale-90 shadow-lg bg-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all active:scale-90 shadow-lg bg-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6">
            {customerReviews.map((review) => (
              <div key={review.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="h-full bg-white rounded-[3rem] p-10 shadow-xl border border-primary/5 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-1 text-secondary">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-primary/5" />
                    </div>
                    <p className="text-lg font-medium leading-relaxed text-foreground mb-8 italic">
                      "{review.comment}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 border-t border-muted pt-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary font-black text-xl">
                      {review.avatarInitials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">{review.name}</span>
                        {review.isVerified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                        <MapPin className="w-2.5 h-2.5" />
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
