"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Users, SmilePlus, ActivitySquare, Star } from "lucide-react";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasInView, setHasInView] = useState(false);

  useEffect(() => {
    if (!hasInView) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [hasInView, end, duration]);

  return (
    <motion.div
      onViewportEnter={() => setHasInView(true)}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold font-heading text-white mb-2"
    >
      {count}{suffix}
    </motion.div>
  );
}

export function StatisticsSection() {
  const stats = [
    { icon: Users, value: 1000, suffix: "+", label: "Patients Treated" },
    { icon: SmilePlus, value: 95, suffix: "%", label: "Recovery Satisfaction" },
    { icon: ActivitySquare, value: 500, suffix: "+", label: "Rehab Programs" },
    { icon: Star, value: 5, suffix: "★", label: "Patient Rating" },
  ];

  return (
    <Section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-4">
              <stat.icon className="w-8 h-8" />
            </div>
            <Counter end={stat.value} suffix={stat.suffix} />
            <p className="text-white/80 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
