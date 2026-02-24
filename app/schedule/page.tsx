"use client";

import { motion } from "framer-motion";
import Container from "../components/Container";
import ScheduleSection from "../components/ScheduleSection";
import { schedule } from "../data/schedule";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-[#f8f6f2] py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[#c6a75e] bg-[#c6a75e]/10 rounded-full">
            Event Timeline
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1e293b] mb-6">
            Festival Schedule
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Two days packed with literary events, competitions, and inspiring sessions.
            Plan your fest experience with our detailed schedule.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c6a75e] via-[#c6a75e]/50 to-transparent hidden md:block" />
          
          <div className="md:pl-16">
            {schedule.map((day, index) => (
              <ScheduleSection
                key={day.day}
                day={day.day}
                events={day.events}
                dayIndex={index}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            * Schedule is subject to minor changes. Please check back for updates.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
