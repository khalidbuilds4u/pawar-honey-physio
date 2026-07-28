"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Stethoscope, ShieldCheck, Dumbbell, HeartHandshake, IndianRupee, Sparkles } from "lucide-react";

export function TrustSection() {
  const trustIndicators = [
    { icon: Stethoscope, title: "Experienced Therapist" },
    { icon: ShieldCheck, title: "Evidence-Based" },
    { icon: Dumbbell, title: "Modern Equipment" },
    { icon: HeartHandshake, title: "Personalized Care" },
    { icon: IndianRupee, title: "Affordable Consultation" },
    { icon: Sparkles, title: "Safe & Hygienic" },
  ];

  return (
    <Section className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {trustIndicators.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center gap-3 group"
          >
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
