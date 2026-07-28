import { PageHeader } from "@/components/ui/PageHeader";
import { TreatmentProcessSection } from "@/components/sections/TreatmentProcessSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Treatment Process | Pawar Honey Physio",
  description: "Learn about our systematic, evidence-based approach to ensure your complete recovery.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHeader 
        title="Treatment Process" 
        subtitle="A step-by-step journey from initial consultation to a pain-free life."
        imageSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920"
      />
      <TreatmentProcessSection />
      <AppointmentSection />
    </>
  );
}
