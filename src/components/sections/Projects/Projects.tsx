import { Code2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects, projectsData } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" className="relative">
      <div className="section-glow">
        <div className="absolute left-[15%] top-[20%] h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-[10%] bottom-[10%] h-72 w-72 rounded-full bg-primary/10 blur-[130px]" />
      </div>

      <Container>
        <SectionTitle
          badge={projectsData.badge}
          badgeIcon={<Code2 size={14} />}
          title={projectsData.title}
          accent={projectsData.accent}
          subtitle={projectsData.subtitle}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <p className="mt-12 text-center text-caption text-text-secondary">
          Hover over a card to see{" "}
          <span className="text-primary">more details</span>
        </p>
      </Container>
    </Section>
  );
}
