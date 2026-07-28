"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Award, GraduationCap, Clock } from "lucide-react";

export function AboutDoctorSection() {
  return (
    <Section id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 lg:pt-8"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
            About the Doctor
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
            Dr. Hemlata
          </h2>
          <h3 className="text-xl text-secondary font-medium mb-6">
            Lead Physiotherapist
          </h3>
          
          <p className="text-muted leading-relaxed mb-6">
            With over 5 years of clinical experience, Dr. Hemlata has dedicated her career to helping patients overcome pain and mobility issues. Her evidence-based approach and personalized care plans have successfully treated over 1,000+ patients.
          </p>
          <p className="text-muted leading-relaxed mb-8">
            "My mission is to empower individuals to take control of their health. We believe in providing treatments that are not only effective but also compassionate and tailored to each patient's unique lifestyle."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h4 className="font-bold text-foreground">BPTh, MPTh</h4>
              <p className="text-sm text-muted">Qualifications</p>
            </div>
            <div className="flex flex-col gap-2">
              <Clock className="w-8 h-8 text-primary" />
              <h4 className="font-bold text-foreground">5+ Years</h4>
              <p className="text-sm text-muted">Experience</p>
            </div>
            <div className="flex flex-col gap-2">
              <Award className="w-8 h-8 text-primary" />
              <h4 className="font-bold text-foreground">Certified</h4>
              <p className="text-sm text-muted">Manual Therapist</p>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-blue-900">
            <img 
              src="/doctor.jpg" 
              alt="Dr. Hemlata"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white z-10">
              <h4 className="text-2xl font-bold font-heading mb-1">Dr. Hemlata</h4>
              <p className="text-white/90">Lead Physiotherapist</p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -z-10 top-8 -right-8 w-full h-full border-2 border-primary/20 rounded-3xl" />
        </motion.div>
      </div>
    </Section>
  );
}
