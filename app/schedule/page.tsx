"use client";

import { motion } from "framer-motion";
import Container from "../components/Container";
import ScheduleSection from "../components/ScheduleSection";
import { schedule } from "../data/schedule";

export default function SchedulePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Purple page hero — like Cadbury product pages */}
      <section className="relative bg-[#2d006b] text-white pt-20 pb-24 text-center overflow-hidden">
        {/* Inner radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(80,0,160,0.4) 0%, transparent 70%)",
          }}
        />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow-label">Event Timeline</span>
            <h1 className="heading-display text-[clamp(2.5rem,7vw,6rem)] text-[#cbb386] mt-2 mb-4">
              Festival Schedule
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Two days packed with literary events, competitions, and inspiring
              sessions. Plan your fest experience.
            </p>
          </motion.div>
        </Container>

        {/* Wave down to white */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 70"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-[55px] md:h-[70px]"
          >
            <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* White content */}
      <section className="bg-white grow py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {schedule.map((day, index) => (
              <ScheduleSection
                key={day.day}
                day={day.day}
                events={day.events}
                dayIndex={index}
              />
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-[#6b5f8a] text-sm italic mt-12"
          >
            * Schedule is subject to minor changes. Please check back for updates.
          </motion.p>
        </Container>
      </section>
    </div>
  );
}
