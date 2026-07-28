import { PageHeader } from "@/components/ui/PageHeader";
import { AboutDoctorSection } from "@/components/sections/AboutDoctorSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TrustSection } from "@/components/sections/TrustSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pawar Honey Physio",
  description: "Learn more about Dr. Pawar Honey, our modern facilities, and our commitment to premium physiotherapy care.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Our Clinic" 
        subtitle="Meet our lead physiotherapist and take a tour of our world-class facilities."
        imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920"
      />
      <AboutDoctorSection />
      <GallerySection />
      <TrustSection />
      <AppointmentSection />
    </>
  );
}
