import { PageHeader } from "@/components/ui/PageHeader";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Reviews | Pawar Honey Physio",
  description: "Read real stories from our patients who have successfully recovered from pain and injuries.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader 
        title="Patient Stories" 
        subtitle="Don't just take our word for it. Hear from the people whose lives we've helped transform."
        imageSrc="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1920"
      />
      <TestimonialsSection />
      <StatisticsSection />
      <AppointmentSection />
    </>
  );
}
