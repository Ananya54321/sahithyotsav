"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/register", label: "Register" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#f5f0e8]/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(44,24,16,0.08)] border-b border-[#8b6914]/10"
          : "bg-[#f5f0e8]/80 backdrop-blur-md"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link
            href="/"
            className="flex items-center gap-2 font-serif text-xl sm:text-2xl font-semibold text-[#2c1810] hover:text-[#8b6914] transition-colors duration-300"
          >
            <BookOpen size={22} className="text-[#8b6914]" />
            Sahithyotsav
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-[#8b6914]"
                    : "text-[#2c1810]/60 hover:text-[#8b6914]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8b6914] to-[#c6a75e]"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#2c1810] hover:text-[#8b6914] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#f5f0e8]/98 backdrop-blur-xl border-t border-[#8b6914]/10"
          >
            <Container>
              <div className="py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-3 px-4 text-sm font-medium tracking-wide uppercase rounded-lg transition-all duration-300 ${
                        pathname === link.href
                          ? "text-[#8b6914] bg-[#8b6914]/10"
                          : "text-[#2c1810]/60 hover:text-[#8b6914] hover:bg-[#8b6914]/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
