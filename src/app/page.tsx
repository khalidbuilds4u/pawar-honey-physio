import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { TreatmentProcessSection } from "@/components/sections/TreatmentProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <WhyChooseUsSection />
      <TreatmentProcessSection />
      <StatisticsSection />
      <TestimonialsSection />
      <AppointmentSection />
      <ContactSection />
    </>
  );
}
