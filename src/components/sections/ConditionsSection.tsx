"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Activity, Bone, Brain, BriefcaseMedical, CircleOff, Footprints, Heart, ShieldAlert, Accessibility, Move } from "lucide-react";

export function ConditionsSection() {
  const conditions = [
    { icon: CircleOff, title: "Neck Pain", desc: "Relieve stiffness, tension, and chronic neck discomfort." },
    { icon: Accessibility, title: "Back Pain", desc: "Expert care for lower back pain, sciatica, and slip disc." },
    { icon: Footprints, title: "Knee Pain", desc: "Rehabilitation for arthritis, ligament tears, and joint pain." },
    { icon: Activity, title: "Frozen Shoulder", desc: "Restore mobility and reduce pain in your shoulder joints." },
    { icon: Move, title: "Sports Injury", desc: "Fast recovery plans tailored for athletes and active individuals." },
    { icon: Heart, title: "Post-Surgery Rehab", desc: "Safe and effective therapy to regain strength after surgery." },
  ];

  return (
    <Section id="conditions" className="bg-background">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block"
        >
          Expert Care For You
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4"
        >
          Conditions We Treat
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted text-lg"
        >
          Comprehensive physiotherapy solutions designed to address the root cause of your pain.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {conditions.map((condition, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-primary mb-6">
              <condition.icon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold font-heading text-foreground mb-3">{condition.title}</h3>
            <p className="text-muted leading-relaxed">{condition.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
