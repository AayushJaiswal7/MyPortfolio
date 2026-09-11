export type TimelineColor = "blue" | "green" | "purple" | "amber";

export type TimelineIcon = "graduation" | "briefcase" | "code" | "rocket";

export interface TimelineItem {
  id: string;
  step: string;
  stepLabel: string;
  title: string;
  organization: string;
  duration?: string;
  description?: string;
  bullets?: string[];
  icon: TimelineIcon;
  color: TimelineColor;
  side: "left" | "right";
}

export const experienceHeader = {
  badge: "MY EXPERIENCE",
  titleBefore: "My",
  titleAccent: "Journey",
  titleAfter: "So Far",
  subtitle:
    "A timeline of my learning, experience and growth as a developer.",
};

export const timelineCTA = {
  text:
    "I'm always learning, always building, and always ready for the next challenge.",
  buttonLabel: "Let's Connect",
  buttonHref: "#contact",
};

export const timelineItems: TimelineItem[] = [
  {
    id: "college",
    step: "01",
    stepLabel: "My Foundation",
    title: "College",
    organization: "Dayananda Sagar College of Engineering",
    duration: "2021 – 2025",
    description:
      "Pursuing B.E. in Computer Science Engineering. Exploring new technologies and building strong foundations.",
    icon: "graduation",
    color: "blue",
    side: "left",
  },
  {
    id: "internship",
    step: "02",
    stepLabel: "Hands-on Experience",
    title: "Web Development Intern",
    organization: "CodSoft Pvt. Ltd.",
    duration: "May 2024 – Jul 2024",
    bullets: [
      "Developed responsive websites and web apps.",
      "Built Portfolio, Landing Page and E-commerce site.",
      "Worked with HTML, CSS, JavaScript, React & Git.",
    ],
    icon: "briefcase",
    color: "green",
    side: "right",
  },
  {
    id: "projects",
    step: "03",
    stepLabel: "Building Solutions",
    title: "Personal Projects",
    organization: "Building • Learning • Innovating",
    description:
      "Built multiple full stack and AI based projects to strengthen my problem solving and development skills.",
    icon: "code",
    color: "purple",
    side: "left",
  },
  {
    id: "future",
    step: "04",
    stepLabel: "The Next Chapter",
    title: "Future Goal",
    organization: "Software Engineer",
    description:
      "Passionate about building scalable products, solving real world problems and contributing to impactful teams.",
    icon: "rocket",
    color: "amber",
    side: "right",
  },
];

export const timelineColorStyles: Record<
  TimelineColor,
  {
    cardBorder: string;
    cardBorderHover: string;
    cardGlow: string;
    cardGlowHover: string;
    icon: string;
    text: string;
    node: string;
    nodeGlow: string;
    connector: string;
    pathStop: string;
  }
> = {
  blue: {
    cardBorder: "border-blue-500/25",
    cardBorderHover: "hover:border-blue-500/45",
    cardGlow: "shadow-blue-500/5",
    cardGlowHover: "hover:shadow-blue-500/15",
    icon: "border-blue-500/40 bg-blue-500/15 text-blue-400",
    text: "text-blue-400",
    node: "border-blue-500 bg-blue-500/20 text-blue-400",
    nodeGlow: "shadow-blue-500/25",
    connector: "bg-blue-500/50",
    pathStop: "#3b82f6",
  },
  green: {
    cardBorder: "border-emerald-500/25",
    cardBorderHover: "hover:border-emerald-500/45",
    cardGlow: "shadow-emerald-500/5",
    cardGlowHover: "hover:shadow-emerald-500/15",
    icon: "border-emerald-500/40 bg-emerald-500/15 text-emerald-400",
    text: "text-emerald-400",
    node: "border-emerald-500 bg-emerald-500/20 text-emerald-400",
    nodeGlow: "shadow-emerald-500/25",
    connector: "bg-emerald-500/50",
    pathStop: "#10b981",
  },
  purple: {
    cardBorder: "border-purple-500/25",
    cardBorderHover: "hover:border-purple-500/45",
    cardGlow: "shadow-purple-500/5",
    cardGlowHover: "hover:shadow-purple-500/15",
    icon: "border-purple-500/40 bg-purple-500/15 text-purple-400",
    text: "text-purple-400",
    node: "border-purple-500 bg-purple-500/20 text-purple-400",
    nodeGlow: "shadow-purple-500/25",
    connector: "bg-purple-500/50",
    pathStop: "#a855f7",
  },
  amber: {
    cardBorder: "border-amber-500/25",
    cardBorderHover: "hover:border-amber-500/45",
    cardGlow: "shadow-amber-500/5",
    cardGlowHover: "hover:shadow-amber-500/15",
    icon: "border-amber-500/40 bg-amber-500/15 text-amber-400",
    text: "text-amber-400",
    node: "border-amber-500 bg-amber-500/20 text-amber-400",
    nodeGlow: "shadow-amber-500/25",
    connector: "bg-amber-500/50",
    pathStop: "#f59e0b",
  },
};
