export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Cloud"
  | "Languages"
  | "Tools"
  | "Styling"
  | "Markup"
  | "DevOps";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "instagram" | "email";
}

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techList: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  icon: "graduation" | "home" | "shield" | "plane";
  accentColor: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  href?: string;
  icon: "mail" | "phone" | "map" | "calendar";
  accentColor: string;
}

export interface ServiceItem {
  label: string;
  icon: "code" | "globe" | "cloud" | "puzzle";
}
