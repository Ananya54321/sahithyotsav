"use client";

import { motion } from "framer-motion";
import { ScheduleEvent } from "../data/schedule";
import EventCard from "./EventCard";

interface ScheduleSectionProps {
  day: string;
  events: ScheduleEvent[];
  dayIndex: number;
}

export default function ScheduleSection({ day, events, dayIndex }: ScheduleSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: dayIndex * 0.2, duration: 0.6 }}
      className="mb-14 last:mb-0"
    >
      {/* Day header — Cadbury split card style */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-shrink-0">
          <span className="badge-gold text-base px-5 py-2.5 rounded-full font-black">
            Day {dayIndex + 1}
          </span>
        </div>
        <h2
          className="heading-section text-xl sm:text-2xl text-[#1a0040]"
        >
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
