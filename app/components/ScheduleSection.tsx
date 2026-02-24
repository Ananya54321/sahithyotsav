"use client";

import { motion } from "framer-motion";
import { ScheduleEvent } from "../data/schedule";
import EventCard from "./EventCard";

interface ScheduleSectionProps {
  day: string;
  events: ScheduleEvent[];
  dayIndex: number;
}

export default function ScheduleSection({
  day,
  events,
  dayIndex,
}: ScheduleSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: dayIndex * 0.2, duration: 0.6 }}
      className="mb-16 last:mb-0"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-[#c6a75e] to-[#8b6914] rounded-full flex items-center justify-center text-[#0a0e1a] font-bold shadow-[0_0_15px_rgba(198,167,94,0.3)]">
          {dayIndex + 1}
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#e8e4dd]">
          {day}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event, index) => (
          <EventCard
            key={`${event.title}-${event.time}`}
            session={event.session}
            time={event.time}
            title={event.title}
            venue={event.venue}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
}
