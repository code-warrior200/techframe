/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";

interface HeroProps {
  typingSpeed?: number; // speed of typing (ms per letter)
  deletingSpeed?: number; // speed of deleting (ms per letter)
  pauseDuration?: number; // pause time before deleting (ms)
}

export default function Hero({
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 20000,
}: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  // Smooth scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#next-section");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  // Typewriter effect
  const texts = [
    "Empower Your Business with Modern Solutions",
    "Grow Through Design and Strategy",
    "Innovate with Cutting-Edge Technology",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentText.slice(0, prev.length - 1)
          : currentText.slice(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentText) {
        setIsTyping(false);
        setTimeout(() => {
          setIsDeleting(true);
          setIsTyping(true);
        }, pauseDuration);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, typingSpeed, deletingSpeed, pauseDuration, texts]);

  return (
    <section
      ref={ref}
      className="relative min-h-[95vh] flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Cinematic Parallax Background */}
      <motion.div
        style={{
          y,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')",
        }}
        className="absolute inset-0 bg-cover bg-center will-change-transform scale-105"
      />

      {/* Layered Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_70%)]" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
        >
          {displayedText}
          <span
            className={`border-r-4 pr-1 ml-1 ${
              isTyping ? "border-white animate-pulse" : "border-transparent"
            }`}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We help brands grow through strategy, design, and cutting-edge
          technology — creating digital experiences that truly connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/services">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-primary/50 transition-all bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90"
            >
              Explore Services
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-white text-black hover:bg-white hover:text-black transition-all"
            >
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        onClick={scrollToNextSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 1.2,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 flex flex-col items-center text-gray-300 z-10 cursor-pointer group"
      >
        <span className="text-sm mb-2 group-hover:text-white transition">
          Scroll Down
        </span>
        <ChevronDown className="w-6 h-6 group-hover:text-white transition" />
      </motion.div>

      {/* Subtle Animated Gradient Border at Bottom */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "70%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute bottom-0 mx-auto h-[2px] bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full"
      />
    </section>
  );
}
