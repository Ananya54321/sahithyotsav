"use client";

import Link from "next/link";
import { Calendar, MapPin, Feather, BookOpen, ScrollText, PenLine } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";
import FloatingParticles from "./FloatingParticles";
import { FloatingFeather, FloatingBook } from "./DecorativeSVGs";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.05,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const title = "Sahithyotsav";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden paper-texture page-edge">
      {/* Vignette edges for old book feel */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 50%, rgba(44, 24, 16, 0.06) 100%)"
      }} />

      {/* Subtle aged paper stain marks */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] right-[15%] w-[250px] h-[250px] bg-[#8b6914]/[0.04] rounded-full blur-[80px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[200px] bg-[#c6a75e]/[0.05] rounded-full blur-[100px]" />
      </div>

      {/* Floating particles (golden dust motes) */}
      <FloatingParticles count={20} />

      {/* Decorative lucide-react icons as background elements */}
      <FloatingFeather className="absolute top-20 right-8 w-28 h-28 sm:w-36 sm:h-36" />
      <FloatingBook className="absolute bottom-28 left-6 w-28 h-24 sm:w-40 sm:h-32" />

      {/* Scattered small icons for old book feel */}
      <PenLine className="absolute top-[35%] left-[8%] w-10 h-10 text-[#8b6914]/[0.07] rotate-[-20deg]" />
      <ScrollText className="absolute top-[25%] right-[12%] w-12 h-12 text-[#8b6914]/[0.06] rotate-[15deg]" />
      <Feather className="absolute bottom-[35%] right-[8%] w-8 h-8 text-[#8b6914]/[0.08] rotate-[30deg]" />
      <BookOpen className="absolute bottom-[15%] right-[25%] w-10 h-10 text-[#8b6914]/[0.05] rotate-[-10deg]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Tagline badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-5 py-2 mb-8 text-sm font-medium text-[#8b6914] glass rounded-full tracking-wider uppercase"
          >
            March 13 – 14, 2026
          </motion.span>

          {/* Main title with character-by-character reveal */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-[1.1]">
            <span className="flex flex-wrap justify-center">
              {title.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-gold-gradient inline-block"
                  style={{ minWidth: char === " " ? "0.3em" : "auto" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="font-serif text-xl sm:text-2xl md:text-3xl text-[#8b6914]/60 mb-4 italic"
          >
            A Celebration of Literature
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-base sm:text-lg text-[#7a6b5d] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            A two-day literary fest bringing together debates, poetry,
            discussions, and stories that inspire and transform.
          </motion.p>

          {/* Info badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10"
          >
            <div className="flex items-center gap-2 text-[#7a6b5d]">
              <Calendar size={18} className="text-[#8b6914]" />
              <span className="text-sm font-medium">13–14 March 2026</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-[#8b6914]/40 rounded-full" />
            <div className="flex items-center gap-2 text-[#7a6b5d]">
              <MapPin size={18} className="text-[#8b6914]" />
              <span className="text-sm font-medium">College Name</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/schedule"
              className="group relative w-full sm:w-auto px-8 py-4 overflow-hidden rounded-xl font-medium text-[#fffdf7] transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2c1810] to-[#4a3020] transition-all duration-500 group-hover:from-[#1a0f08] group-hover:to-[#2c1810]" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Schedule
              </span>
            </Link>
            <Link
              href="/register"
              className="group w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-[#2c1810] border-2 border-[#2c1810] hover:bg-[#2c1810] hover:text-[#fffdf7] transition-all duration-300 text-center"
            >
              Register Now
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#2c1810]/20 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-3 bg-gradient-to-b from-[#8b6914] to-[#6b4f10] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
