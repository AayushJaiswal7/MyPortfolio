import type { ContactInfo } from "@/types";
import { siteConfig } from "./site";

export const contactData = {
  badge: "Get In Touch",
  title: "Let's",
  accent: "Work",
  titleSuffix: "Together",
  subtitle:
    "I'm always open to discussing new opportunities, interesting projects or just connecting with fellow developers.",
  formTitle: "Send Me a Message",
  formSubtitle:
    "Fill out the form below and I'll get back to you as soon as possible.",
  successTitle: "Message Ready!",
  successMessage:
    "Your email client should open shortly. If it doesn't, feel free to email me directly.",
};

export function getContactInfo(): ContactInfo[] {
  return [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: "mail",
      accentColor: "bg-blue-500/20 text-blue-400",
    },
    {
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
      icon: "phone",
      accentColor: "bg-emerald-500/20 text-emerald-400",
    },
    {
      label: "Location",
      value: siteConfig.location,
      icon: "map",
      accentColor: "bg-purple-500/20 text-purple-400",
    },
    {
      label: "Availability",
      value: siteConfig.availability,
      icon: "calendar",
      accentColor: "bg-sky-500/20 text-sky-400",
    },
  ];
}
