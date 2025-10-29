"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  Globe,
  BarChart,
  Code,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    desc: "Tailored strategies that help you optimize operations and scale effectively.",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Responsive, high-performance websites crafted with modern frameworks and UX best practices.",
  },
  {
    icon: BarChart,
    title: "Digital Marketing",
    desc: "Data-driven campaigns that enhance brand visibility and drive measurable growth.",
  },
  {
    icon: Code,
    title: "Custom Software",
    desc: "Build robust software solutions that fit your unique business requirements.",
  },
  {
    icon: Users,
    title: "Brand Strategy",
    desc: "Craft an authentic brand identity that resonates with your audience and builds loyalty.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Protect your digital assets with enterprise-grade security solutions and audits.",
  },
];

export default function ServicesPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const cardVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: isMobile ? i * 0.05 : i * 0.1,
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1], // use a cubic bezier easing array
      },
    }),
  };

  return (
    <div ref={ref} className="relative overflow-hidden flex flex-col">
      {/* 🌌 Gradient Hero Section (Matches Hero Component Style) */}
      <section className="relative min-h-[75vh] flex flex-col justify-center text-center overflow-hidden">
        {/* Cinematic Parallax Background */}
        <motion.div
          style={{
            y,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80')",
          }}
          className="absolute inset-0 bg-cover bg-center will-change-transform scale-105"
        />

        {/* Layered Gradient Overlays (From Hero) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_70%)]" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-white"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 text-white/80">
              <Sparkles className="w-5 h-5" />
              <span className="uppercase tracking-wide text-sm">
                What We Offer
              </span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Our Services
          </h1>

          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Empowering businesses through innovation, strategy, and technology
            — delivering digital solutions that make an impact.
          </p>
        </motion.div>

        {/* Glow Accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </section>

      {/* 🌊 Gradient Wave Divider */}
      <div className="w-full overflow-hidden leading-none rotate-180 -mt-px">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-24 text-background"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.52,168.19-17.24,250.45-.39C823.78,26.09,906.67,57.46,985,81.69c70.57,21.53,136.9,35.25,215,38.31V0H0V27.35C69.09,52.11,140.39,70.09,213.61,73.35,267.71,75.84,319.59,60.17,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 💼 Services Grid */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-background via-muted/40 to-background overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
            Elevate Your Digital Presence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore our suite of professional services designed to transform
            your brand, streamline operations, and accelerate growth.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="group relative overflow-hidden border border-border/40 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-card/70 backdrop-blur-sm rounded-2xl">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 transition-opacity duration-300" />

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500/10 to-pink-500/10 group-hover:from-indigo-500/20 group-hover:to-pink-500/20 transition">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 🚀 CTA Section (with unified gradient theme) */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-center text-white">
        <motion.div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')",
          }}
          className="absolute inset-0 bg-cover bg-center opacity-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
            Ready to Elevate Your Business?
          </h2>

          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Let’s collaborate to unlock your brand’s potential with tailored
            digital solutions that drive measurable results.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold shadow-lg bg-white text-primary hover:bg-gray-100 transition-all hover:shadow-xl"
            >
              Get a Free Quote
            </Button>
          </Link>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </section>
    </div>
  );
}
