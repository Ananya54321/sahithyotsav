"use client";

import { motion } from "framer-motion";
import {
  Scale, PenTool, Mic2, HelpCircle, GraduationCap, Wand2, BookOpen,
} from "lucide-react";
import Container from "./Container";
import HighlightCard from "./HighlightCard";

const highlights = [
  { title: "Youth Parliament", description: "Experience the thrill of parliamentary debate. Argue, persuade, and lead in this simulation of democratic discourse.", icon: Scale },
  { title: "Writers' Hunt", description: "A treasure hunt for the literary mind. Solve clues, decode references, and race against time.", icon: PenTool },
  { title: "Kaavya Manch", description: "A stage for poets to share their verses. Express emotions through the beauty of Hindi and English poetry.", icon: Mic2 },
  { title: "Quiz Competition", description: "Test your knowledge of literature, history, and culture in this fast-paced quiz showdown.", icon: HelpCircle },
  { title: "Alumni Talk", description: "Gain insights from distinguished alumni who have made their mark in the literary and professional world.", icon: GraduationCap },
  { title: "Harry Potter Declamation", description: "Step into the wizarding world. Deliver iconic speeches from the beloved series with passion and flair.", icon: Wand2 },
];

export default function Highlights() {
  return (
    <section className="relative bg-[#2d006b] text-white py-24 pb-32 overflow-hidden">
      {/* Subtle decorative icon */}
      <div className="absolute right-10 bottom-10 opacity-[0.04] pointer-events-none">
        <BookOpen className="w-64 h-64 text-white" strokeWidth={0.5} />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="eyebrow-label">Featured Events</span>
          <h2
            className="heading-section text-[clamp(2rem,5vw,3.5rem)] text-white mt-1"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            EVENT HIGHLIGHTS
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4 text-base">
            Discover the diverse range of events that make our literary fest a
            unique celebration of words and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={highlight.title}
              title={highlight.title}
              description={highlight.description}
              icon={highlight.icon}
              index={index}
            />
          ))}
        </div>
      </Container>

      {/* Wave down to footer — stays purple (no white section between them) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 70"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[55px] md:h-[70px]"
        >
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#1a0040" />
        </svg>
      </div>
    </section>
  );
}
