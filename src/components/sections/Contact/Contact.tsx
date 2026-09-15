import { Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { contactData } from "@/constants/contact";
import ContactForm from "./ContactForm";
import ContactInfoPanel from "./ContactInfoPanel";

export default function Contact() {
  return (
    <Section id="contact" className="relative">
      <div className="section-glow">
        <div className="absolute left-[20%] top-[10%] h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-[15%] bottom-[20%] h-72 w-72 rounded-full bg-primary/10 blur-[130px]" />
      </div>

      <Container>
        <SectionTitle
          badge={contactData.badge}
          badgeIcon={<Mail size={14} />}
          title={contactData.title}
          accent={contactData.accent}
          titleSuffix={contactData.titleSuffix}
          subtitle={contactData.subtitle}
        />

        <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
          <ContactInfoPanel />
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
