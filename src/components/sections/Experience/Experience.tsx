import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Timeline from "./Timeline";
import TimelineCTA from "./TimelineCTA";
import { experienceHeader } from "./timelineData";

export default function Experience() {
  return (
    <Section id="experience" className="relative overflow-hidden">
      <div className="section-glow" aria-hidden="true">
        <div className="absolute left-[8%] top-[8%] h-24 w-24 dot-grid opacity-40" />
        <div className="absolute right-[8%] top-[8%] h-24 w-24 dot-grid opacity-40" />
        <div className="absolute left-1/2 top-[20%] h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <Container>
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="mb-6 flex justify-center">
              <Badge icon={<Briefcase size={14} className="shrink-0" />}>
                {experienceHeader.badge}
              </Badge>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
              {experienceHeader.titleBefore}{" "}
              <span className="text-gradient-primary">
                {experienceHeader.titleAccent}
              </span>{" "}
              {experienceHeader.titleAfter}
            </h2>

            <p className="mt-4 text-base leading-7 text-text-secondary sm:text-lg">
              {experienceHeader.subtitle}
            </p>
          </motion.div>
        </header>

        <Timeline />
        <TimelineCTA />
      </Container>
    </Section>
  );
}
