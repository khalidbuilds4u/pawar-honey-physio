"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ClipboardList, Search, FileHeart, Activity, Smile } from "lucide-react";

export function TreatmentProcessSection() {
  const steps = [
    { icon: ClipboardList, title: "Consultation", desc: "Detailed discussion of your medical history and symptoms." },
    { icon: Search, title: "Assessment", desc: "Comprehensive physical examination to identify the root cause." },
    { icon: FileHeart, title: "Treatment Plan", desc: "A personalized recovery program tailored to your goals." },
    { icon: Activity, title: "Recovery", desc: "Active physiotherapy sessions using advanced techniques." },
    { icon: Smile, title: "Pain-Free Life", desc: "Long-term wellness strategies and preventative care." }
  ];

  return (
    <Section id="process" className="bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] -z-10 hidden lg:block" />
      
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
          How We Work
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
          Our Treatment Process
        </h2>
        <p className="text-muted text-lg">
          A systematic, evidence-based approach to ensure your complete recovery.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-lg border-4 border-background flex items-center justify-center text-primary mb-6 transition-transform hover:scale-110 duration-300">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-2">Step {idx + 1}</h3>
              <h4 className="font-semibold text-primary mb-2">{step.title}</h4>
              <p className="text-sm text-muted">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
