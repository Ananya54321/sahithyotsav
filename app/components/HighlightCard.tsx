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
      whileHover={{ y: -5, scale: 1.02 }}
      className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-[#c6a75e] hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 bg-[#c6a75e]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#c6a75e]/20 transition-colors">
        <Icon className="w-6 h-6 text-[#c6a75e]" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-[#1e293b] mb-2 group-hover:text-[#c6a75e] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
