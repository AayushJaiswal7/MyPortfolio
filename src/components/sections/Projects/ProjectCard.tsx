import {
  ExternalLink,
  GraduationCap,
  Home,
  Plane,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const iconMap = {
  graduation: GraduationCap,
  home: Home,
  shield: Shield,
  plane: Plane,
};

const accentBg: Record<string, string> = {
  "text-purple-400": "bg-purple-500/20",
  "text-emerald-400": "bg-emerald-500/20",
  "text-rose-400": "bg-rose-500/20",
  "text-blue-400": "bg-blue-500/20",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = iconMap[project.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-card border border-white/10 bg-card/80 transition-all duration-300",
        "hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
      )}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute left-4 top-4 text-caption text-text-secondary">
          {String(index + 1).padStart(2, "0")}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} live demo`}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-button border border-white/10 bg-white/5 text-text-secondary transition-colors hover:text-primary"
        >
          <ExternalLink size={14} />
        </a>

        <div
          className={cn(
            "absolute -bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10",
            accentBg[project.accentColor],
            project.accentColor,
          )}
        >
          <Icon size={20} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-card-title font-semibold text-text">
          {project.title}
        </h3>
        <p className="mt-1 text-caption text-primary">{project.techList}</p>
        <p className="mt-3 flex-1 text-caption leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary transition-colors hover:text-primary-hover"
          >
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-text"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
