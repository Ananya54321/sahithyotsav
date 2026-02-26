"use client";

import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

interface EventCardProps {
  session: "FN" | "AN" | "Online" | "Full Day";
  time: string;
  title: string;
  venue: string;
  index: number;
}

const sessionColors = {
  FN: {
    bg: "bg-amber-50",
    text: "text-amber-800",
  },
  AN: {
    bg: "bg-orange-50",
    text: "text-orange-800",
  },
  Online: {
    bg: "bg-green-50",
    text: "text-green-800",
  },
  "Full Day": {
    bg: "bg-yellow-50",
    text: "text-yellow-800",
  },
};

export default function EventCard({
  session,
  time,
  title,
  venue,
  index,
}: EventCardProps) {
  const colors = sessionColors[session];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -3 }}
      className="group rounded-xl p-5 vintage-card transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <span
          className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${colors.bg} ${colors.text}`}
        >
          {session}
        </span>
      </div>

      <h3 className="font-serif text-lg font-semibold text-[#2c1810] mb-3 leading-snug group-hover:text-[#8b6914] transition-colors duration-300">
        {title}
      </h3>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[#7a6b5d]">
          <Clock size={14} className="text-[#8b6914] flex-shrink-0" />
          <span className="text-sm">{time}</span>
        </div>
        <div className="flex items-center gap-2 text-[#7a6b5d]">
          <MapPin size={14} className="text-[#8b6914] flex-shrink-0" />
          <span className="text-sm">{venue}</span>
        </div>
      </div>
    </motion.div>
  );
}
