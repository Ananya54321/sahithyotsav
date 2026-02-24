"use client";

import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";
import FloatingParticles from "./FloatingParticles";
import { QuillPen, OpenBook } from "./DecorativeSVGs";

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
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#0a0e1a]">
      {/* Animated radial gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c6a75e]/[0.06] rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#1e293b]/40 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c6a75e]/[0.03] rounded-full blur-[200px]" />
      </div>

      {/* Floating particles */}
      <FloatingParticles count={25} />

      {/* Decorative SVGs */}
      <QuillPen className="absolute top-16 right-8 w-28 h-28 sm:w-40 sm:h-40 opacity-40 animate-float" />
      <OpenBook className="absolute bottom-24 left-6 w-32 h-24 sm:w-48 sm:h-36 opacity-30" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(198,167,94,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(198,167,94,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

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
            className="inline-block px-5 py-2 mb-8 text-sm font-medium text-[#c6a75e] glass rounded-full tracking-wider uppercase"
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
            className="font-serif text-xl sm:text-2xl md:text-3xl text-[#c6a75e]/70 mb-4 italic"
          >
            A Celebration of Literature
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-base sm:text-lg text-[#e8e4dd]/60 mb-10 max-w-2xl mx-auto leading-relaxed"
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
            <div className="flex items-center gap-2 text-[#e8e4dd]/60">
              <Calendar size={18} className="text-[#c6a75e]" />
              <span className="text-sm font-medium">13–14 March 2026</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-[#c6a75e]/40 rounded-full" />
            <div className="flex items-center gap-2 text-[#e8e4dd]/60">
              <MapPin size={18} className="text-[#c6a75e]" />
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
              className="group relative w-full sm:w-auto px-8 py-4 overflow-hidden rounded-xl font-medium text-[#0a0e1a] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#c6a75e] to-[#d4b96e] transition-all duration-500 group-hover:from-[#d4b96e] group-hover:to-[#c6a75e]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-gold-strong" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Schedule
              </span>
            </Link>
            <Link
              href="/register"
              className="group w-full sm:w-auto px-8 py-4 glass rounded-xl font-medium text-[#c6a75e] hover:bg-[#c6a75e]/10 transition-all duration-300 text-center"
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
        <div className="w-6 h-10 border-2 border-[#c6a75e]/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-3 bg-gradient-to-b from-[#c6a75e] to-[#8b6914] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
