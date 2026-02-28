"use client";

import Link from "next/link";
import { Calendar, MapPin, BookOpen, Feather, Mic2, PenTool } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] bg-[#1e0050] text-white flex flex-col justify-center overflow-hidden">
      {/* ===== LAYERED BACKGROUND GRADIENTS ===== */}
      {/* Deep base layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% -10%, #4a009e 0%, #2d006b 40%, #1a003d 100%)",
        }}
      />
      {/* Warm gold center glow — mimics Cadbury's product spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(203,179,134,0.09) 0%, transparent 70%)",
        }}
      />
      {/* Left edge violet bleed */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 70% at -5% 50%, rgba(100,0,180,0.25) 0%, transparent 60%)",
        }}
      />
      {/* Right edge violet bleed */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 70% at 105% 50%, rgba(100,0,180,0.18) 0%, transparent 60%)",
        }}
      />

      {/* ===== DECORATIVE FLOATING ICONS ===== */}
      {/* Large BookOpen — top-right, Cadbury-style product silhouette */}
      <div
        className="absolute right-[-40px] top-[8%] w-[420px] h-[420px] pointer-events-none select-none animate-float"
        style={{ opacity: 0.055 }}
      >
        <BookOpen className="w-full h-full text-[#cbb386]" strokeWidth={0.4} />
      </div>
      {/* Feather — bottom-left */}
      <div
        className="absolute left-[-20px] bottom-[18%] w-[260px] h-[260px] pointer-events-none select-none"
        style={{ opacity: 0.045, transform: "rotate(-20deg)" }}
      >
        <Feather className="w-full h-full text-[#cbb386]" strokeWidth={0.5} />
      </div>
      {/* Mic2 — lower-right corner */}
      <div
        className="absolute right-[8%] bottom-[12%] w-[130px] h-[130px] pointer-events-none select-none"
        style={{ opacity: 0.065, transform: "rotate(14deg)" }}
      >
        <Mic2 className="w-full h-full text-white" strokeWidth={0.6} />
      </div>
      {/* PenTool — upper-left */}
      <div
        className="absolute left-[6%] top-[18%] w-[90px] h-[90px] pointer-events-none select-none"
        style={{ opacity: 0.055, transform: "rotate(-10deg)" }}
      >
        <PenTool className="w-full h-full text-white" strokeWidth={0.6} />
      </div>

      {/* ===== HERO CONTENT — centered like Cadbury ===== */}
      <Container className="relative z-10 py-24 md:py-0 flex flex-col items-center text-center">
        {/* Eyebrow badge — Cadbury-style gold pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-[0.18em] uppercase"
            style={{
              fontFamily: "var(--font-display)",
              background: "linear-gradient(90deg, #f1cd76 0%, #d0a651 100%)",
              color: "#2d006b",
              boxShadow: "0 2px 18px rgba(209,166,81,0.35)",
            }}
          >
            <Calendar size={11} />
            March 13 – 14, 2026
          </span>
        </motion.div>

        {/* Main heading — massive ALL-CAPS gold gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display mb-6 leading-[0.92]"
          style={{
            fontSize: "clamp(3.5rem, 11vw, 9rem)",
            background: "linear-gradient(135deg, #f8e4a0 10%, #cbb386 45%, #e8c56a 65%, #cbb386 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            hyphens: "none",
            wordBreak: "keep-all",
          }}
        >
          SAHITHYOTSAV
        </motion.h1>

        {/* Gold rule divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="mb-7"
          style={{
            width: "120px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #cbb386, transparent)",
            borderRadius: "2px",
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-white/90 mb-3 leading-snug font-semibold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            letterSpacing: "0.04em",
          }}
        >
          A Celebration of Literature
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-white/55 text-base max-w-md mb-2 leading-relaxed"
        >
          A two-day literary fest bringing together debates, poetry,
          discussions, and stories that inspire and transform.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, duration: 0.6 }}
          className="flex items-center gap-2 text-white/45 text-sm mb-10"
        >
          <MapPin size={13} className="text-[#cbb386]" />
          <span>CVR College Of Engineering</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/register" className="btn-gold animate-pulse-glow">
            Register Now
          </Link>
          <Link href="/schedule" className="btn-white-outline">
            View Schedule
          </Link>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase font-semibold"
            style={{ fontFamily: "var(--font-display)" }}>
            Scroll
          </span>
          <div
            className="w-[1px] animate-float"
            style={{
              height: "40px",
              background: "linear-gradient(to bottom, rgba(203,179,134,0.5), transparent)",
            }}
          />
        </motion.div>
      </Container>

      {/* ===== WAVE SEPARATOR ===== */}
      <div className="wave-bottom-white">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[80px]"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#f5f5f5"
          />
        </svg>
      </div>
    </section>
  );
}
