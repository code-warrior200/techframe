"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative max-w-3xl mx-auto px-6 py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-3">Let’s Connect</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Have a question or proposal? Fill out the form below, and we’ll get
          back to you soon.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card border border-border shadow-sm rounded-2xl p-8 space-y-6"
      >
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
            className="h-12"
          />
        </div>

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
            className="h-12"
          />
        </div>

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
            className="min-h-[150px]"
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold"
          >
            Send Message
          </Button>
        </div>
      </motion.form>
    </section>
  );
}
