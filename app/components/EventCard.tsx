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
    bg: "bg-blue-100",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  AN: {
    bg: "bg-purple-100",
    text: "text-purple-700",
    border: "border-purple-200",
  },
  Online: {
    bg: "bg-green-100",
    text: "text-green-700",
    border: "border-green-200",
  },
  "Full Day": {
    bg: "bg-amber-100",
    text: "text-amber-700",
    border: "border-amber-200",
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
      className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:border-[#c6a75e] hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <span
          className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${colors.bg} ${colors.text}`}
        >
          {session}
        </span>
      </div>

      <h3 className="font-serif text-lg font-semibold text-[#1e293b] mb-3 leading-snug">
        {title}
      </h3>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-600">
          <Clock size={14} className="text-[#c6a75e] flex-shrink-0" />
          <span className="text-sm">{time}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={14} className="text-[#c6a75e] flex-shrink-0" />
          <span className="text-sm">{venue}</span>
        </div>
      </div>
    </motion.div>
  );
}
