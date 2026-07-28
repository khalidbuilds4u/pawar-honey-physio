import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";

const TrustSection = dynamic(() => import("@/components/sections/TrustSection").then(m => m.TrustSection), { ssr: true });
const WhyChooseUsSection = dynamic(() => import("@/components/sections/WhyChooseUsSection").then(m => m.WhyChooseUsSection), { ssr: true });
const TreatmentProcessSection = dynamic(() => import("@/components/sections/TreatmentProcessSection").then(m => m.TreatmentProcessSection), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection").then(m => m.TestimonialsSection), { ssr: true });
const StatisticsSection = dynamic(() => import("@/components/sections/StatisticsSection").then(m => m.StatisticsSection), { ssr: true });
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
