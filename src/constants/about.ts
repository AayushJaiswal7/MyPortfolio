export type AboutCardTheme = "blue" | "green" | "pink";

export interface AboutCard {
  title: string;
  icon: "graduation" | "target" | "heart";
  theme: AboutCardTheme;
  items: string[];
  footerBadge: string;
}

export const aboutData = {
  badge: "About Me",
  title: "Getting to know",
  accent: "me!",
  bio:
    "I am a final year Computer Science Engineering student at Dayananda Sagar College of Engineering, Bengaluru. I enjoy building full stack applications and exploring cloud technologies.",
  cards: [
    {
      title: "Education",
      icon: "graduation" as const,
      theme: "blue" as const,
      items: [
        "B.E. in Computer Science",
        "Dayananda Sagar College of Engineering",
        "2021 - 2025",
      ],
      footerBadge: "2021-2025 / CS Major",
    },
    {
      title: "Focus",
      icon: "target" as const,
      theme: "green" as const,
      items: [
        "Full Stack Development",
        "Cloud Computing",
        "Problem Solving",
      ],
      footerBadge: "Product + cloud focus",
    },
    {
      title: "Interests",
      icon: "heart" as const,
      theme: "pink" as const,
      items: [
        "Web Development",
        "Cloud Technologies",
        "Open Source",
      ],
      footerBadge: "Open-source mindset",
    },
  ],
};
