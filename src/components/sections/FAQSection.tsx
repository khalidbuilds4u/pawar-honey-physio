"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is physiotherapy painful?",
    answer: "No, physiotherapy is designed to relieve pain, not cause it. You might feel mild soreness after certain exercises or manual therapy, but this is a normal part of the healing process and subsides quickly."
  },
  {
    question: "How many sessions are required?",
    answer: "The number of sessions depends on your specific condition, severity, and how your body responds to treatment. After your initial assessment, Dr. Pawar will provide a personalized treatment plan with an estimated timeline."
  },
  {
    question: "Do you offer home visits?",
    answer: "Yes, we offer home physiotherapy services for patients who have mobility issues, severe pain, or prefer the convenience of treatment in their own space. Please contact us to schedule a home visit."
  },
  {
    question: "What conditions do you treat?",
    answer: "We treat a wide range of musculoskeletal and neurological conditions, including back and neck pain, sports injuries, frozen shoulder, sciatica, arthritis, and provide comprehensive post-surgery rehabilitation."
  },
  {
    question: "What should I wear to my appointment?",
    answer: "Please wear loose, comfortable clothing that allows easy movement and provides access to the area being treated. For example, if you have knee pain, wearing shorts is ideal."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Header */}
        <div>
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-lg mb-8">
            Find answers to common questions about our physiotherapy treatments, appointments, and what to expect during your visit.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={cn(
                "border rounded-2xl overflow-hidden transition-colors duration-300",
                openIndex === idx ? "border-primary bg-white shadow-md" : "border-gray-200 bg-white"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-foreground pr-8">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-muted shrink-0 transition-transform duration-300",
                    openIndex === idx && "rotate-180 text-primary"
                  )} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
