"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Marketing Director, VisionCorp",
    text: "Absolutely wonderful experience working with this team! They truly understood our brand and delivered beyond expectations.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "John Smith",
    role: "Founder, Apex Solutions",
    text: "Professional, efficient, and exceeded all expectations. The project was completed on time with remarkable quality.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sarah Lee",
    role: "CEO, BrightPath",
    text: "They transformed our online presence completely! We've seen massive engagement growth since the redesign.",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Michael Chen",
    role: "CTO, NovaTech",
    text: "Their technical expertise and creativity made our app launch seamless and successful. Highly recommend!",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328b39f3?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center relative">
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="text-4xl font-extrabold mb-4 text-foreground">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Hear from some of the amazing people and brands we&apos;ve had the pleasure
          to work with.
        </p>
      </div>

      {/* 3D Carousel Container */}
      <div className="relative h-[420px] flex items-center justify-center overflow-hidden perspective-[1200px]">
        {testimonials.map((t, index) => {
          const offset = (index - current + testimonials.length) % testimonials.length;

          let scale = 1;
          let opacity = 1;
          let translateX = 0;
          let zIndex = 0;
          let rotateY = 0;

          if (offset === 0) {
            scale = 1;
            opacity = 1;
            zIndex = 50;
            translateX = 0;
            rotateY = 0;
          } else if (offset === 1 || (offset === -testimonials.length + 1)) {
            scale = 0.9;
            opacity = 0.7;
            zIndex = 30;
            translateX = 150;
            rotateY = -15;
          } else if (offset === testimonials.length - 1 || offset === -1) {
            scale = 0.9;
            opacity = 0.7;
            zIndex = 30;
            translateX = -150;
            rotateY = 15;
          } else {
            opacity = 0;
            zIndex = 0;
            scale = 0.8;
            translateX = 0;
            rotateY = 0;
          }

          return (
            <motion.div
              key={index}
              className="absolute w-full max-w-md"
              animate={{
                scale,
                opacity,
                x: translateX,
                rotateY,
                zIndex,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="rounded-2xl shadow-xl border border-border/40 bg-background/80 backdrop-blur-md">
                <CardContent className="p-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-primary/60 shadow-md">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed text-lg">
                    “{t.text}”
                  </p>
                  <div>
                    <p className="font-semibold text-lg text-foreground">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto p-2 rounded-full bg-background/80 hover:bg-accent transition shadow-md"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto p-2 rounded-full bg-background/80 hover:bg-accent transition shadow-md"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-primary scale-110"
                : "bg-gray-400/50 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
