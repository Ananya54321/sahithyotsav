"use client";

import { motion } from "framer-motion";
import {
  Scale,
  PenTool,
  Mic2,
  HelpCircle,
  GraduationCap,
  Wand2,
} from "lucide-react";
import Container from "./Container";
import HighlightCard from "./HighlightCard";

const highlights = [
  {
    title: "Youth Parliament",
    description:
      "Experience the thrill of parliamentary debate. Argue, persuade, and lead in this simulation of democratic discourse.",
    icon: Scale,
  },
  {
    title: "Writers' Hunt",
    description:
      "A treasure hunt for the literary mind. Solve clues, decode references, and race against time.",
    icon: PenTool,
  },
  {
    title: "Kaavya Manch",
    description:
      "A stage for poets to share their verses. Express emotions through the beauty of Hindi and English poetry.",
    icon: Mic2,
  },
  {
    title: "Quiz Competition",
    description:
      "Test your knowledge of literature, history, and culture in this fast-paced quiz showdown.",
    icon: HelpCircle,
  },
  {
    title: "Alumni Talk",
    description:
      "Gain insights from distinguished alumni who have made their mark in the literary and professional world.",
    icon: GraduationCap,
  },
  {
    title: "Harry Potter Declamation",
    description:
      "Step into the wizarding world. Deliver iconic speeches from the beloved series with passion and flair.",
    icon: Wand2,
  },
];

export default function Highlights() {
  return (
    <section className="py-20 bg-[#f8f6f2]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[#c6a75e] bg-[#c6a75e]/10 rounded-full">
            Featured Events
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            Event Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the diverse range of events that make our literary fest a
            unique celebration of words and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
}
