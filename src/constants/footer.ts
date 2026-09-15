import type { ServiceItem } from "@/types";
import { navLinks } from "./nav";
import { siteConfig } from "./site";

export const footerData = {
  description:
    "Computer Science Engineer and Full Stack Developer passionate about building scalable, impactful and user-friendly solutions.",
  quickLinksTitle: "Quick Links",
  servicesTitle: "What I Do",
  connectTitle: "Let's Connect",
  connectText:
    "I'm always open to discussing new opportunities, collaborations or just having a tech chat!",
  ctaButton: "Let's Work Together",
  resumeCta: "Thanks for visiting my portfolio!",
  resumeSubtext: "Let's build something amazing together.",
  downloadResume: "Download Resume",
  copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
  builtWith: "Built with passion and lots of coffee",
};

export const footerQuickLinks = [
  ...navLinks,
  { label: "Education", href: "#about" },
];

export const footerServices: ServiceItem[] = [
  { label: "Full Stack Development", icon: "code" },
  { label: "Web Applications", icon: "globe" },
  { label: "Cloud Computing", icon: "cloud" },
  { label: "Problem Solving", icon: "puzzle" },
  { label: "Open Source", icon: "code" },
];
