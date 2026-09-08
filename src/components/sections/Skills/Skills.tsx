import { Code2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { skills, skillsData } from "@/constants/skills";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <Section id="skills" className="relative">
      <div className="section-glow">
        <div className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute bottom-[10%] right-[5%] h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <Container>
        <SectionTitle
          badge={skillsData.badge}
          title={skillsData.title}
          accent={skillsData.accent}
          subtitle={skillsData.subtitle}
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Badge icon={<Code2 size={14} />}>{skillsData.footerChip}</Badge>
        </div>
      </Container>
    </Section>
  );
}
