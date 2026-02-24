"use client";

import { motion } from "framer-motion";

export function QuillPen({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <defs>
        <linearGradient id="quillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c6a75e" />
          <stop offset="100%" stopColor="#8b6914" />
        </linearGradient>
      </defs>
      <path
        d="M75 10 C70 25, 55 40, 35 60 C30 65, 25 75, 22 85 L20 90 L25 88 C28 85, 32 80, 40 70 C55 50, 65 35, 80 15 Z"
        fill="url(#quillGrad)"
        opacity="0.3"
      />
      <path
        d="M35 60 L22 85 L25 88 L40 70"
        fill="none"
        stroke="#c6a75e"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <line
        x1="22"
        y1="85"
        x2="15"
        y2="95"
        stroke="#c6a75e"
        strokeWidth="0.8"
        opacity="0.3"
      />
    </motion.svg>
  );
}

export function OpenBook({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 120 80"
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    >
      <defs>
        <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c6a75e" />
          <stop offset="100%" stopColor="#d4b96e" />
        </linearGradient>
      </defs>
      <path
        d="M60 15 C45 10, 15 8, 5 12 L5 65 C15 61, 45 63, 60 68 Z"
        fill="none"
        stroke="url(#bookGrad)"
        strokeWidth="1"
        opacity="0.25"
      />
      <path
        d="M60 15 C75 10, 105 8, 115 12 L115 65 C105 61, 75 63, 60 68 Z"
        fill="none"
        stroke="url(#bookGrad)"
        strokeWidth="1"
        opacity="0.25"
      />
      <line
        x1="60"
        y1="15"
        x2="60"
        y2="68"
        stroke="#c6a75e"
        strokeWidth="0.5"
        opacity="0.2"
      />
      {[22, 30, 38, 46].map((y) => (
        <line
          key={`left-${y}`}
          x1="15"
          y1={y}
          x2="50"
          y2={y + 2}
          stroke="#c6a75e"
          strokeWidth="0.3"
          opacity="0.15"
        />
      ))}
      {[22, 30, 38, 46].map((y) => (
        <line
          key={`right-${y}`}
          x1="70"
          y1={y + 2}
          x2="105"
          y2={y}
          stroke="#c6a75e"
          strokeWidth="0.3"
          opacity="0.15"
        />
      ))}
    </motion.svg>
  );
}

export function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <motion.div
        className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#c6a75e]/50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.svg
        viewBox="0 0 24 24"
        className="w-5 h-5 text-[#c6a75e]/40"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <path
          d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8Z"
          fill="currentColor"
        />
      </motion.svg>
      <motion.div
        className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#c6a75e]/50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}

export function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <path
        d="M5 95 C5 50, 15 25, 50 5 C35 30, 25 55, 20 80 C15 60, 30 35, 60 15 C40 40, 30 65, 25 85"
        fill="none"
        stroke="#c6a75e"
        strokeWidth="0.8"
        opacity="0.2"
      />
      <circle cx="50" cy="5" r="2" fill="#c6a75e" opacity="0.3" />
      <circle cx="5" cy="95" r="2" fill="#c6a75e" opacity="0.3" />
    </svg>
  );
}

export function InkSplatter({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <circle cx="50" cy="50" r="15" fill="#c6a75e" opacity="0.06" />
      <circle cx="35" cy="40" r="8" fill="#c6a75e" opacity="0.04" />
      <circle cx="65" cy="35" r="6" fill="#c6a75e" opacity="0.05" />
      <circle cx="55" cy="65" r="10" fill="#c6a75e" opacity="0.04" />
      <circle cx="40" cy="60" r="5" fill="#c6a75e" opacity="0.03" />
      <circle cx="70" cy="55" r="4" fill="#c6a75e" opacity="0.05" />
      <circle cx="30" cy="55" r="3" fill="#c6a75e" opacity="0.04" />
    </motion.svg>
  );
}
