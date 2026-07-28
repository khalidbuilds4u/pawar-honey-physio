"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUsSection() {
  const reasons = [
    "Experienced & Certified Therapists",
    "Latest Techniques & Equipment",
    "Patient-Focused Care",
    "Customized Exercise Programs",
    "Home Visits Available",
    "Fast & Sustainable Recovery Plans"
  ];

  return (
    <Section className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000" 
            alt="Modern Physiotherapy Clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
            World-Class Care in a Comfortable Environment
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-8">
            At Pawar Honey Physio, we combine advanced medical knowledge with a compassionate approach. Our goal is to not just treat your symptoms, but to uncover the root cause and ensure long-term wellness.
          </p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-foreground font-medium">{reason}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
