import type { Project } from "@/types";

export const projectsData = {
  badge: "My Projects",
  title: "Projects I'm",
  accent: "Proud Of",
  subtitle:
    "A collection of projects that showcase my skills, passion for building and problem solving.",
};

export const projects: Project[] = [
  {
    id: "e-learning",
    title: "E-Learning Platform",
    description:
      "A secure e-learning platform using Hyperledger Fabric, Moodle LMS integration and NFT-based certifications.",
    techList: "Blockchain | Moodle | NFT",
    tags: ["Hyperledger", "Node.js", "React"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    icon: "graduation",
    accentColor: "text-purple-400",
  },
  {
    id: "home-hive",
    title: "Home Hive",
    description:
      "An Airbnb clone web application with user authentication, property search, booking management and secure payments.",
    techList: "MERN Stack",
    tags: ["MongoDB", "Express.js", "React"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    icon: "home",
    accentColor: "text-emerald-400",
  },
  {
    id: "secureher",
    title: "SecureHer",
    description:
      "Women safety mobile app with real-time location tracking, emergency alerts, shake-to-send-location and tap-to-call features.",
    techList: "Flutter | Firebase | Maps",
    tags: ["Flutter", "Firebase", "Google Maps"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    icon: "shield",
    accentColor: "text-rose-400",
  },
  {
    id: "wayweather",
    title: "WayWeather",
    description:
      "A Telegram bot that provides real-time weather updates using Google APIs and processes data efficiently with PySpark.",
    techList: "Telegram Bot | PySpark | API",
    tags: ["Python", "PySpark", "Google API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    icon: "plane",
    accentColor: "text-blue-400",
  },
];
