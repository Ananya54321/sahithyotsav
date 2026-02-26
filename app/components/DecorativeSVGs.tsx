"use client";

import { motion } from "framer-motion";
import { Feather, BookOpen, Sparkles } from "lucide-react";

/* Ornamental divider using a Sparkles icon as the center flourish */
export function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`chapter-rule ${className}`}>
      <Sparkles size={16} className="text-[#8b6914]/40" />
    </div>
  );
}

/* Decorative floating icon — sized large, positioned absolutely */
export function FloatingFeather({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      <Feather className="w-full h-full text-[#8b6914]/15" strokeWidth={1} />
    </motion.div>
  );
}

/* Decorative floating icon — open book */
export function FloatingBook({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      <BookOpen className="w-full h-full text-[#8b6914]/12" strokeWidth={1} />
    </motion.div>
  );
}
