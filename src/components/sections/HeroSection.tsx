"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, Activity, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary to-accent blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-20">
        <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-secondary to-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Activity className="h-4 w-4" />
              <span>Premium Physiotherapy Care</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
              Live Pain-Free with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Expert Physiotherapy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted mb-8 leading-relaxed">
              Personalized treatment plans that help you recover faster, move better, and live without pain. Experience world-class care designed just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="gap-2" asChild>
                <a href="#appointment">
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>1000+ Happy Patients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>5+ Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Images & Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex justify-center lg:justify-end"
          >
            {/* Main Doctor Image Placeholder */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                alt="Physiotherapist with patient"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Review Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white p-4 rounded-2xl shadow-xl max-w-[240px] backdrop-blur-sm bg-white/90"
            >
              <div className="flex gap-1 mb-2 text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="text-sm font-medium text-foreground mb-1">"Completely cured my back pain in just 3 weeks!"</p>
              <p className="text-xs text-muted">- Sarah Jenkins</p>
            </motion.div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
