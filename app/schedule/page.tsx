"use client";

import { motion } from "framer-motion";
import Container from "../components/Container";
import ScheduleSection from "../components/ScheduleSection";
import { schedule } from "../data/schedule";
import FloatingParticles from "../components/FloatingParticles";
import { OrnamentalDivider } from "../components/DecorativeSVGs";

export default function SchedulePage() {
  return (
    <div className="relative min-h-screen bg-[#0a0e1a] py-16 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c6a75e]/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1e293b]/20 rounded-full blur-[120px]" />

      <FloatingParticles count={10} />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 mb-6 text-sm font-medium text-[#c6a75e] glass rounded-full tracking-wider uppercase">
            Event Timeline
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#e8e4dd] mb-4">
            Festival <span className="text-gold-gradient">Schedule</span>
          </h1>
          <OrnamentalDivider className="my-6" />
          <p className="text-[#e8e4dd]/50 text-lg max-w-2xl mx-auto">
            Two days packed with literary events, competitions, and inspiring
            sessions. Plan your fest experience with our detailed schedule.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#c6a75e]/40 via-[#c6a75e]/20 to-transparent hidden md:block" />

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
          <p className="text-[#e8e4dd]/30 text-sm">
            * Schedule is subject to minor changes. Please check back for
            updates.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
