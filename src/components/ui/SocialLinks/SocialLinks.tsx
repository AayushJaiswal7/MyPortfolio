import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Mail } from "lucide-react";
import type { SocialLink } from "@/types";
import { socialLinks } from "@/constants/site";
import { cn } from "@/lib/utils";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
  email: Mail,
};

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
  iconClassName?: string;
}

export default function SocialLinks({
  links = socialLinks,
  className,
  iconClassName,
}: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {links.map((social) => {
        const Icon = iconMap[social.icon];

        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={
              social.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={social.label}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-button border border-white/10 bg-white/5 text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              iconClassName,
            )}
          >
            <Icon size={18} strokeWidth={1.8} />
          </a>
        );
      })}
    </div>
  );
}
