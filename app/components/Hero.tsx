"use client";

import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#f8f6f2] to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c6a75e] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e293b] rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[#c6a75e] bg-[#c6a75e]/10 rounded-full"
          >
            March 13-14, 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e293b] mb-6 leading-tight"
          >
            Celebrating Literature.
            <br />
            <span className="text-[#c6a75e]">Voices. Ideas.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            A two-day literary fest bringing together debates, poetry, discussions,
            and stories that inspire and transform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={18} className="text-[#c6a75e]" />
              <span className="text-sm font-medium">13–14 March 2026</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} className="text-[#c6a75e]" />
              <span className="text-sm font-medium">College Name</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/schedule"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#1e293b] text-white font-medium rounded-lg hover:bg-[#0f172a] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View Schedule
            </Link>
            <Link
              href="/register"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#1e293b] font-medium rounded-lg border-2 border-[#1e293b] hover:bg-[#1e293b] hover:text-white transition-all duration-300"
            >
              Register Now
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#1e293b]/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-[#c6a75e] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
