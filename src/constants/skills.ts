import type { Skill } from "@/types";

export const skillsData = {
  badge: "My Skills",
  title: "Technologies I",
  accent: "Work With",
  subtitle:
    "A toolkit of technologies and tools I use to build scalable, efficient and modern web applications.",
  footerChip: "Always Learning, Always Building",
};

export const skills: Skill[] = [
  { name: "React", category: "Frontend", icon: "react" },
  { name: "Next.js", category: "Frontend", icon: "nextjs" },
  { name: "TypeScript", category: "Languages", icon: "typescript" },
  { name: "Tailwind CSS", category: "Styling", icon: "tailwind" },
  { name: "HTML5", category: "Markup", icon: "html5" },
  { name: "CSS3", category: "Styling", icon: "css3" },
  { name: "Node.js", category: "Backend", icon: "nodejs" },
  { name: "Express.js", category: "Backend", icon: "express" },
  { name: "Python", category: "Languages", icon: "python" },
  { name: "REST APIs", category: "Backend", icon: "api" },
  { name: "MongoDB", category: "Database", icon: "mongodb" },
  { name: "PostgreSQL", category: "Database", icon: "postgresql" },
  { name: "Firebase", category: "Backend", icon: "firebase" },
  { name: "Docker", category: "DevOps", icon: "docker" },
  { name: "Google Cloud", category: "Cloud", icon: "gcloud" },
  { name: "Git", category: "Tools", icon: "git" },
  { name: "GitHub", category: "Tools", icon: "github" },
  { name: "VS Code", category: "Tools", icon: "vscode" },
];
