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
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  AN: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
  },
  Online: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    border: "border-green-500/20",
  },
  "Full Day": {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
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
      className="group glass rounded-xl p-5 hover:bg-white/[0.06] transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <span
          className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${colors.bg} ${colors.text}`}
        >
          {session}
        </span>
      </div>

      <h3 className="font-serif text-lg font-semibold text-[#e8e4dd] mb-3 leading-snug group-hover:text-[#c6a75e] transition-colors duration-300">
        {title}
      </h3>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[#e8e4dd]/50">
          <Clock size={14} className="text-[#c6a75e]/60 flex-shrink-0" />
          <span className="text-sm">{time}</span>
        </div>
        <div className="flex items-center gap-2 text-[#e8e4dd]/50">
          <MapPin size={14} className="text-[#c6a75e]/60 flex-shrink-0" />
          <span className="text-sm">{venue}</span>
        </div>
      </div>
    </motion.div>
  );
}
