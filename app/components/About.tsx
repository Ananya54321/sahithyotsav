"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Sparkles } from "lucide-react";
import Container from "./Container";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[#c6a75e] bg-[#c6a75e]/10 rounded-full">
            About the Fest
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e293b] mb-8">
            Where Words Come Alive
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Our literary fest is a celebration of the written and spoken word—a space
            where young minds gather to debate, discuss, recite, and create. Over two
            transformative days, participants will engage with diverse literary forms,
            from the eloquence of parliamentary debates to the rhythm of poetry, from
            the thrill of literary quizzes to the magic of storytelling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-[#c6a75e]/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-[#c6a75e]" />
              </div>
              <h3 className="font-semibold text-[#1e293b] mb-2">10+ Events</h3>
              <p className="text-gray-500 text-sm">Diverse literary competitions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-[#c6a75e]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#c6a75e]" />
              </div>
              <h3 className="font-semibold text-[#1e293b] mb-2">500+ Participants</h3>
              <p className="text-gray-500 text-sm">From colleges across the region</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-[#c6a75e]/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-[#c6a75e]" />
              </div>
              <h3 className="font-semibold text-[#1e293b] mb-2">2 Days</h3>
              <p className="text-gray-500 text-sm">Of literary excellence</p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
