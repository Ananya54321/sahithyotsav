"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Sparkles } from "lucide-react";
import Container from "./Container";
import { OrnamentalDivider } from "./DecorativeSVGs";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: BookOpen,
    value: 10,
    suffix: "+",
    label: "Events",
    description: "Diverse literary competitions",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Participants",
    description: "From colleges across the region",
  },
  {
    icon: Sparkles,
    value: 2,
    suffix: "",
    label: "Days",
    description: "Of literary excellence",
  },
];

export default function About() {
  return (
    <section className="relative py-24 bg-[#0f1320] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c6a75e]/[0.04] rounded-full blur-[150px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-5 py-2 mb-6 text-sm font-medium text-[#c6a75e] glass rounded-full tracking-wider uppercase">
            About the Fest
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#e8e4dd] mb-4">
            Where Words Come{" "}
            <span className="text-gold-gradient">Alive</span>
          </h2>

          <OrnamentalDivider className="my-6" />

          <p className="text-[#e8e4dd]/60 text-lg leading-relaxed mb-16">
            Our literary fest is a celebration of the written and spoken word—a
            space where young minds gather to debate, discuss, recite, and
            create. Over two transformative days, participants will engage with
            diverse literary forms, from the eloquence of parliamentary debates
            to the rhythm of poetry, from the thrill of literary quizzes to the
            magic of storytelling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="group flex flex-col items-center p-6 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c6a75e]/20 to-[#c6a75e]/5 flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all duration-500">
                    <Icon className="w-7 h-7 text-[#c6a75e]" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#c6a75e] mb-1">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </h3>
                  <p className="text-[#e8e4dd]/80 font-medium text-sm mb-1">
                    {stat.label}
                  </p>
                  <p className="text-[#e8e4dd]/40 text-xs">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
