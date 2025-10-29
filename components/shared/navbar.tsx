"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://instagram.com/",
    icon: Instagram,
    label: "Instagram",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          TechFrame.io
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Nav Links */}
          <div className="flex gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={pathname === link.href ? "default" : "ghost"}
                  className="text-base"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Animated Social Icons */}
          <motion.div
            className="flex items-center gap-3 ml-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delayChildren: 0.3, staggerChildren: 0.15 },
              },
            }}
          >
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <motion.div
                key={href}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                >
                  <Icon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-accent transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border shadow-md"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center"
                >
                  <Button
                    variant={pathname === link.href ? "default" : "ghost"}
                    className="w-3/4 text-base"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}

              {/* Divider */}
              <div className="w-3/4 h-px bg-border/50 my-2"></div>

              {/* Mobile Social Links with Motion */}
              <motion.div
                className="flex gap-5 mt-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delayChildren: 0.2, staggerChildren: 0.1 },
                  },
                }}
              >
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <motion.div
                    key={href}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-2 rounded-full hover:bg-accent transition"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
