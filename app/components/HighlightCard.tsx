"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface HighlightCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function HighlightCard({
  title,
  description,
  icon: Icon,
  index,
}: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="cadbury-card p-7 cursor-default group"
    >
      {/* Gold icon circle — larger for visibility on dark bg */}
      <div
        className="mb-5 group-hover:animate-pulse-glow transition-all duration-300 shrink-0"
        style={{
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #f1cd76, #d0a651)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(209, 166, 81, 0.35)",
        }}
      >
        <Icon className="w-8 h-8 text-[#2d006b]" />
      </div>

      <h3
        className="text-sm font-black uppercase tracking-wider text-white mb-3"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">
        {description}
      </p>

      {/* Gold bottom accent line on hover */}
      <div className="mt-5 h-[2px] w-0 group-hover:w-full bg-linear-to-r from-[#f1cd76] to-[#d0a651] transition-all duration-500 rounded-full" />
    </motion.div>
  );
}
