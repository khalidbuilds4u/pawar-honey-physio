"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

export function GallerySection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800", alt: "Modern Clinic Reception", className: "md:col-span-2 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800", alt: "Treatment Room" },
    { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800", alt: "Physiotherapy Equipment" },
    { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", alt: "Rehabilitation Exercises", className: "md:col-span-2" },
  ];

  return (
    <Section className="bg-white">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
          Our Facilities
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
          Take a Tour of Our Clinic
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.className || ''}`}
            onClick={() => setSelectedImg(img.src)}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img 
            src={selectedImg} 
            alt="Gallery preview" 
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Section>
  );
}
