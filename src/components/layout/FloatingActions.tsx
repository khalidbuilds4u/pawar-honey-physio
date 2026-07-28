"use client";

import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { motion } from "framer-motion";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        href="tel:+1234567890"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-primary text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
        aria-label="Call Us"
      >
        <Phone className="h-6 w-6 fill-current" />
      </motion.a>
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-[#25D366]/90 transition-colors"
        aria-label="WhatsApp Us"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </motion.a>
    </div>
  );
}
