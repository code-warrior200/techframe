"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Workflow, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const coreValues = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "To empower businesses through creative technology solutions that inspire growth, efficiency, and innovation.",
    },
    {
      icon: Users,
      title: "Our Vision",
      desc: "To be a global leader in digital transformation — where innovation meets human-centered design.",
    },
    {
      icon: Heart,
      title: "Our Values",
      desc: "Integrity, collaboration, and excellence guide everything we do. We believe in making a meaningful impact.",
    },
  ];

  const processSteps = [
    {
      icon: Lightbulb,
      title: "1. Discovery",
      desc: "We start by deeply understanding your goals, audience, and challenges through workshops and strategy sessions.",
    },
    {
      icon: Workflow,
      title: "2. Design & Build",
      desc: "Our team designs user-centric solutions and develops them with cutting-edge technologies for long-term scalability.",
    },
    {
      icon: Rocket,
      title: "3. Launch & Grow",
      desc: "We deploy with confidence and continuously optimize your solution to ensure sustained growth and success.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    {
      name: "Emily Chen",
      role: "Product Designer",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
    },
  ];

  return (
    <div ref={ref} className="flex flex-col overflow-hidden">
      {/* 🌌 Hero Section */}
      <section className="relative py-28 text-center overflow-hidden bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526401485004-2aa7e3b5f9a9?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />

        <motion.div style={{ y }} className="absolute inset-0 will-change-transform" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            About <span className="text-white">TechFrame.io</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            We’re a creative technology studio helping brands thrive through
            strategy, innovation, and experience-driven design.
          </p>
        </motion.div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </section>

      {/* 🌟 Our Journey */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-background to-muted/50">
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Our <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            From humble beginnings to a global impact — TechFrame.io has evolved
            into a hub of innovation, creativity, and technology excellence.
            Our passion for digital craftsmanship fuels everything we build.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80"
              alt="Our Team Collaboration"
              width={1600}
              height={900}
              className="object-cover w-full h-[400px]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ⚙️ How We Work Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-muted/40 to-background overflow-hidden">
        <div className="absolute -top-32 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            How <span className="text-primary">We Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Our collaborative process ensures every project is grounded in
            clarity, creativity, and measurable success.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-card/70 backdrop-blur-sm rounded-2xl">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-transparent transition-opacity duration-300" />
                  <CardContent className="p-10 text-center flex flex-col items-center space-y-4">
                    <step.icon className="w-10 h-10 text-primary" />
                    <h3 className="text-xl font-semibold group-hover:text-primary transition">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 💠 Core Values */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            What <span className="text-primary">Drives Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
            Every decision we make is powered by our principles — innovation,
            integrity, and impact.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-card/70 backdrop-blur-sm">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-transparent transition-opacity duration-300" />
                  <CardContent className="p-10 text-center flex flex-col items-center space-y-4">
                    <value.icon className="w-10 h-10 text-primary" />
                    <h3 className="text-xl font-semibold group-hover:text-primary transition">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 👥 Meet the Team */}
      <section className="relative py-24 px-6 overflow-hidden bg-muted/20">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-12">
            Meet the <span className="text-primary">Team</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-primary/40 transition-transform group-hover:scale-105">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ✨ Closing CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-semibold mb-6"
        >
          Shaping the Future Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8"
        >
          At TechFrame.io, we believe technology should serve people — not the
          other way around. Together, let’s design solutions that move the
          world forward.
        </motion.p>

        <Link href="/contact">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-500 text-white font-semibold px-8 py-6 hover:opacity-90 transition-all shadow-lg hover:shadow-primary/30"
          >
            Let’s Collaborate
          </Button>
        </Link>
      </section>
    </div>
  );
}
