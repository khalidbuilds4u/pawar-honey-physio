import { PageHeader } from "@/components/ui/PageHeader";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Pawar Honey Physio",
  description: "Find answers to common questions about our physiotherapy treatments, appointments, and what to expect during your visit.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about starting your recovery journey with us."
        imageSrc="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920"
      />
      <FAQSection />
      <ContactSection />
    </>
  );
}
