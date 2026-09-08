import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import type { Skill } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  python: SiPython,
  api: Code2,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  firebase: SiFirebase,
  docker: SiDocker,
  gcloud: SiGooglecloud,
  git: SiGit,
  github: SiGithub,
  vscode: Code2,
};

const iconColors: Record<string, string> = {
  react: "text-cyan-400",
  nextjs: "text-white",
  typescript: "text-blue-400",
  tailwind: "text-sky-400",
  html5: "text-orange-400",
  css3: "text-blue-400",
  nodejs: "text-green-400",
  express: "text-white",
  python: "text-yellow-400",
  api: "text-primary",
  mongodb: "text-green-500",
  postgresql: "text-blue-300",
  firebase: "text-amber-400",
  docker: "text-blue-400",
  gcloud: "text-blue-400",
  git: "text-orange-400",
  github: "text-white",
  vscode: "text-blue-400",
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = iconMap[skill.icon] ?? Code2;
  const color = iconColors[skill.icon] ?? "text-primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      className={cn(
        "group relative flex flex-col items-center rounded-card border border-white/10 bg-card/80 p-6 text-center transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10",
      )}
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <Icon className={cn("mb-4 text-3xl", color)} />

      <h3 className="text-base font-semibold text-text">{skill.name}</h3>
      <p className="mt-1 text-caption text-text-secondary">{skill.category}</p>
    </motion.div>
  );
}
