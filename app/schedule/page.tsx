"use client";

import { motion } from "framer-motion";
import { Feather } from "lucide-react";
import Container from "../components/Container";
import ScheduleSection from "../components/ScheduleSection";
import { schedule } from "../data/schedule";
import FloatingParticles from "../components/FloatingParticles";
import { OrnamentalDivider } from "../components/DecorativeSVGs";

export default function SchedulePage() {
  return (
    <div className="relative min-h-screen paper-texture py-16 overflow-hidden page-edge">
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 50%, rgba(44, 24, 16, 0.05) 100%)"
      }} />

      {/* Scattered background icons */}
      <Feather className="absolute top-24 right-8 w-20 h-20 text-[#8b6914]/[0.05] rotate-[15deg]" />
      <Feather className="absolute bottom-20 left-6 w-14 h-14 text-[#8b6914]/[0.04] rotate-[-20deg]" />

      <FloatingParticles count={8} />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 mb-6 text-sm font-medium text-[#8b6914] glass rounded-full tracking-wider uppercase">
            Event Timeline
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-4">
            Festival <span className="text-gold-gradient">Schedule</span>
          </h1>
          <OrnamentalDivider className="my-6" />
          <p className="text-[#7a6b5d] text-lg max-w-2xl mx-auto">
            Two days packed with literary events, competitions, and inspiring
            sessions. Plan your fest experience with our detailed schedule.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8b6914]/40 via-[#8b6914]/15 to-transparent hidden md:block" />

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
          <p className="text-[#7a6b5d] text-sm italic">
            * Schedule is subject to minor changes. Please check back for
            updates.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
