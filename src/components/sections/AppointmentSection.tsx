"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function AppointmentSection() {
  return (
    <Section id="appointment" className="py-20 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-blue-50 to-white -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Book Your Appointment
          </h2>
          <p className="text-muted text-lg">
            Take the first step towards a pain-free life. Fill out the form below and we will contact you to confirm your slot.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50/50"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50/50"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50/50"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="text-sm font-medium text-foreground">Preferred Date</label>
              <input 
                type="date" 
                id="date" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50/50"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="condition" className="text-sm font-medium text-foreground">Condition / Pain Area</label>
              <select 
                id="condition" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50/50"
              >
                <option value="">Select an option</option>
                <option value="neck">Neck Pain</option>
                <option value="back">Back Pain</option>
                <option value="knee">Knee Pain</option>
                <option value="shoulder">Shoulder Pain</option>
                <option value="sports">Sports Injury</option>
                <option value="post-surgery">Post-Surgery</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Additional Message (Optional)</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50/50 resize-none"
                placeholder="Briefly describe your symptoms or any specific requirements..."
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <Button size="lg" className="w-full text-base h-14">
                Confirm Appointment Request
              </Button>
              <p className="text-center text-sm text-muted mt-4">
                We respect your privacy. Your information is secure.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
