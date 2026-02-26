"use client";

import { motion } from "framer-motion";
import {
  Scale,
  PenTool,
  Mic2,
  HelpCircle,
  GraduationCap,
  Wand2,
  Feather,
  BookOpen,
} from "lucide-react";
import Container from "./Container";
import HighlightCard from "./HighlightCard";
import FloatingParticles from "./FloatingParticles";

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
    <section className="relative py-24 paper-texture overflow-hidden page-edge">
      {/* Scattered background icons for old book feel */}
      <Feather className="absolute top-8 left-6 w-16 h-16 text-[#8b6914]/[0.06] rotate-[-15deg]" />
      <BookOpen className="absolute bottom-12 right-8 w-20 h-20 text-[#8b6914]/[0.05] rotate-[10deg]" />
      <Feather className="absolute top-1/3 right-[5%] w-12 h-12 text-[#8b6914]/[0.04] rotate-[25deg]" />

      {/* Golden dust particles */}
      <FloatingParticles count={10} />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-5 py-2 mb-6 text-sm font-medium text-[#8b6914] glass rounded-full tracking-wider uppercase">
            Featured Events
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4">
            Event <span className="text-gold-gradient">Highlights</span>
          </h2>
          <p className="text-[#7a6b5d] max-w-2xl mx-auto">
            Discover the diverse range of events that make our literary fest a
            unique celebration of words and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
