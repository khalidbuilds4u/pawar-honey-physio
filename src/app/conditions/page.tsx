import { PageHeader } from "@/components/ui/PageHeader";
import { ConditionsSection } from "@/components/sections/ConditionsSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions We Treat | Pawar Honey Physio",
  description: "Comprehensive physiotherapy solutions for neck pain, back pain, knee pain, sports injuries, and post-surgery rehabilitation.",
};

export default function ConditionsPage() {
  return (
    <>
      <PageHeader 
        title="Conditions We Treat" 
        subtitle="Expert diagnosis and targeted therapy for a wide range of physical ailments."
        imageSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1920"
      />
      <ConditionsSection />
      <AppointmentSection />
    </>
  );
}
