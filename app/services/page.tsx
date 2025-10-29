"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Globe,
  BarChart,
  Code,
  Users,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  return (
    <>

      {/* 🚀 CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-primary/90 to-primary text-center text-white">
        {/* Decorative image overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />

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
            Let’s discuss your goals and create a tailored strategy that drives
            measurable success.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-primary font-semibold px-8 py-6 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Get a Free Quote
            </Button>
          </Link>
        </motion.div>

        {/* Soft glow accents */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </section>

      {/* 🌟 Services Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-background to-muted/50">
        {/* Decorative gradient circles */}
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Empower your business with our full suite of professional services —
            from digital transformation to brand growth.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-card/70 backdrop-blur-sm">
                  {/* Hover Accent */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-transparent transition-opacity duration-300" />

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
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

        {/* 🌊 Animated Curved SVG Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-28 text-primary animate-wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" gradientTransform="rotate(45)">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.52,168.19-17.24,250.45-.39C823.78,26.09,906.67,57.46,985,81.69c70.57,21.53,136.9,35.25,215,38.31V0H0V27.35C69.09,52.11,140.39,70.09,213.61,73.35,267.71,75.84,319.59,60.17,321.39,56.44Z"
              fill="url(#waveGradient)"
            />
          </svg>
        </div>

      </section>
    </>
  );
}
