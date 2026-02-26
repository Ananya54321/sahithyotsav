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
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative rounded-2xl p-6 vintage-card corner-bracket transition-all duration-500 cursor-default"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#8b6914]/[0.04] to-transparent" />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8b6914]/15 to-[#8b6914]/5 flex items-center justify-center mb-5 group-hover:animate-pulse-glow transition-all duration-500">
          <Icon className="w-6 h-6 text-[#8b6914]" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-[#2c1810] mb-3 group-hover:text-[#8b6914] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#7a6b5d] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
