import { socialLinks } from "@/constants/site";
import SocialLinks from "@/components/ui/SocialLinks";

const heroIcons = ["github", "linkedin", "email"] as const;

export default function HeroSocialLinks() {
  const links = socialLinks.filter((link) =>
    heroIcons.includes(link.icon as (typeof heroIcons)[number]),
  );

  return (
    <SocialLinks
      links={links}
      iconClassName="rounded-xl text-slate-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-400"
    />
  );
}
