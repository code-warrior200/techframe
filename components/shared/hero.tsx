"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-24 bg-gradient-to-b from-background to-muted">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4"
      >
        Empower Your Business with Modern Solutions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
      >
        We help businesses grow with strategy, design, and technology.
      </motion.p>
      <div className="flex justify-center gap-4">
        <Link href="/services"><Button>Explore Services</Button></Link>
        <Link href="/contact"><Button variant="outline">Contact Us</Button></Link>
      </div>
    </section>
  );
}
