"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function ContactSection() {
  return (
    <Section className="bg-background border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-8">
            We're Here to Help You Recover
          </h2>
          
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">Clinic Address</h4>
                <p className="text-muted leading-relaxed">
                  123 Wellness Avenue, Health City<br />
                  HC 40001, Landmark Building
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">Clinic Hours</h4>
                <p className="text-muted leading-relaxed">
                  Monday - Saturday: 9:00 AM - 8:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">Contact Details</h4>
                <p className="text-muted leading-relaxed">
                  <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a><br />
                  <a href="mailto:hello@pawarhoneyphysio.com" className="hover:text-primary transition-colors">hello@pawarhoneyphysio.com</a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">WhatsApp Consult</h4>
                <p className="text-muted leading-relaxed">
                  Message us anytime for quick queries or bookings.
                </p>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-medium hover:underline inline-block mt-1">
                  Chat with us →
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200"
        >
          {/* In a real app, embed a Google iframe here. Using an image for now. */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
            alt="Map location"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-bold text-foreground">Pawar Honey Physio</span>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
