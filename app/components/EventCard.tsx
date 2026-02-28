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

const sessionBadges = {
  FN: { label: "Forenoon", classes: "badge-purple" },
  AN: { label: "Afternoon", classes: "badge-gold" },
  Online: { label: "Online", classes: "badge-purple" },
  "Full Day": { label: "Full Day", classes: "badge-gold" },
};

export default function EventCard({ session, time, title, venue, index }: EventCardProps) {
  const badge = sessionBadges[session];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#2d006b]/10 shadow-[0_2px_12px_rgba(45,0,107,0.06)] hover:shadow-[0_8px_30px_rgba(45,0,107,0.14)] transition-all duration-300"
    >
      {/* Purple top bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#2d006b] to-[#5a00c8] group-hover:from-[#f1cd76] group-hover:to-[#d0a651] transition-all duration-500" />

      <div className="p-5">
        <div className="mb-3">
          <span className={badge.classes}>{badge.label}</span>
        </div>

        <h3
          className="font-black uppercase text-sm tracking-wide text-[#1a0040] mb-3 leading-snug group-hover:text-[#2d006b] transition-colors duration-300"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {title}
        </h3>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-[#6b5f8a] text-sm">
            <Clock size={13} className="text-[#cbb386] flex-shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-[#6b5f8a] text-sm">
            <MapPin size={13} className="text-[#cbb386] flex-shrink-0" />
            <span>{venue}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
