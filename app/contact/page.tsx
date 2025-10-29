"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, User, MessageSquare, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative overflow-hidden flex flex-col">
      {/* 🌌 Hero Section */}
      <section className="relative py-28 text-center overflow-hidden bg-gradient-to-b from-primary/95 to-primary">
        <motion.div
          style={{
            background:
              "radial-gradient(circle at 20% 40%, rgba(255,255,255,0.15), transparent 70%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.08), transparent 80%)",
          }}
          className="absolute inset-0 will-change-transform"
        />

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
                Get in Touch
              </span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Contact Us
          </h1>

          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            We’d love to hear from you. Whether you have a project in mind, a
            question, or just want to say hi — reach out and let’s connect.
          </p>
        </motion.div>

        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </section>

      {/* 🌊 Wave Divider */}
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

      {/* ✉️ Contact Form Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-background via-muted/50 to-background overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card/70 backdrop-blur-sm border border-border/40 shadow-lg rounded-2xl p-8 space-y-6 hover:shadow-primary/10 transition"
          >
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <User className="w-4 h-4 text-primary" /> Your Name
              </label>
              <Input
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
                className="h-12 bg-background/50 focus-visible:ring-primary/60 transition"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> Email Address
              </label>
              <Input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="h-12 bg-background/50 focus-visible:ring-primary/60 transition"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" /> Message
              </label>
              <Textarea
                name="message"
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
                required
                className="min-h-[150px] bg-background/50 focus-visible:ring-primary/60 transition"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                className="w-full h-12 text-base font-semibold shadow-lg bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90 hover:shadow-primary/30 transition-all"
              >
                Send Message
              </Button>
            </div>
          </motion.form>
        </motion.div>
      </section>
    </div>
  );
}
