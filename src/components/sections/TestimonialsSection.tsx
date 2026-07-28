"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    review: "I had severe back pain for years. Dr. Pawar diagnosed the root cause in the first session itself. After just 2 weeks of therapy, I am completely pain-free. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "Priya Sharma",
    review: "The clinic is very modern and hygienic. I went for post-surgery rehab for my knee. The personalized care and attention I received helped me walk normally much faster than I expected.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    name: "Amit Patel",
    review: "Best physiotherapist in town! The advanced equipment and techniques they use are truly world-class. My sports injury healed perfectly, and I'm back on the field.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="testimonials" className="bg-blue-50/50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
          Patient Stories
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
          Trusted by 1000+ Patients
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="overflow-hidden">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 relative"
          >
            <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-50 -z-0" />
            <div className="relative z-10">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-foreground font-medium italic leading-relaxed mb-8">
                "{testimonials[activeIndex].review}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonials[activeIndex].name}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
                    <span>Google Review</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "bg-primary w-8" : "bg-primary/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
