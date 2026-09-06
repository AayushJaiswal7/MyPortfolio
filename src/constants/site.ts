import type { SocialLink } from "@/types";

export const siteConfig = {
  name: "Aayush Kumar",
  title: "Aayush Kumar | Full Stack Developer",
  description:
    "Computer Science Engineer and Full Stack Developer building modern, scalable web applications with React, TypeScript, and Node.js.",
  email: "aayushkr799@gmail.com",
  phone: "+91 9508940799",
  location: "Bengaluru, India",
  availability: "Available for freelance & new opportunities",
  resumeUrl: "/resume.pdf",
  url: "https://aayushkumar.dev",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/AayushJaiswal7",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/im-aayushkumar",
    icon: "linkedin",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/AayushJaiswal7",
    icon: "leetcode",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: "email",
  },
];
