import {
  ArrowRight,
  ArrowUp,
  ChevronRight,
  Cloud,
  Code2,
  Download,
  Globe,
  Heart,
  Mail,
  Puzzle,
  Star,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/ui/SocialLinks";
import {
  footerData,
  footerQuickLinks,
  footerServices,
} from "@/constants/footer";
import { siteConfig, socialLinks } from "@/constants/site";
import { cn } from "@/lib/utils";

const serviceIcons = {
  code: Code2,
  globe: Globe,
  cloud: Cloud,
  puzzle: Puzzle,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pb-8 pt-16">
      <Container>
        <div className="mb-8 flex flex-col items-center justify-between gap-6 rounded-container border border-white/10 bg-card/50 p-6 backdrop-blur-xl sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Star size={20} />
            </div>
            <div>
              <p className="font-medium text-text">{footerData.resumeCta}</p>
              <p className="text-caption text-text-secondary">
                {footerData.resumeSubtext}
              </p>
            </div>
          </div>

          <Button variant="outline" asChild>
            <a href={siteConfig.resumeUrl} download>
              <Download size={16} />
              {footerData.downloadResume}
            </a>
          </Button>
        </div>

        <div className="rounded-container border border-white/10 bg-card/70 p-8 backdrop-blur-xl lg:p-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="text-2xl font-bold text-text">
                AAYUSH<span className="text-primary">.</span>
              </h2>
              <p className="mt-4 text-caption leading-relaxed text-text-secondary">
                {footerData.description}
              </p>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-button border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/10"
              >
                <Mail size={14} />
                {siteConfig.email}
              </a>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
                • {footerData.quickLinksTitle}
              </h3>
              <ul className="space-y-2">
                {footerQuickLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-1 text-caption text-text-secondary transition-colors hover:text-text"
                    >
                      <ChevronRight size={12} className="text-primary" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
                • {footerData.servicesTitle}
              </h3>
              <ul className="space-y-3">
                {footerServices.map((service) => {
                  const Icon = serviceIcons[service.icon];

                  return (
                    <li
                      key={service.label}
                      className="flex items-center gap-2 text-caption text-text-secondary"
                    >
                      <Icon size={14} className="text-primary" />
                      {service.label}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
                • {footerData.connectTitle}
              </h3>
              <p className="text-caption leading-relaxed text-text-secondary">
                {footerData.connectText}
              </p>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <SocialLinks links={socialLinks} className="mb-6" />

              <Button variant="outline" className="w-full" asChild>
                <a href="#contact">
                  {footerData.ctaButton}
                  <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-caption text-text-secondary sm:flex-row">
          <p>{footerData.copyright}</p>

          <p className="flex items-center gap-1">
            <Heart size={14} className="text-primary" />
            {footerData.builtWith}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className={cn(
              "flex items-center gap-2 transition-colors hover:text-text",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            )}
          >
            Back to Top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </Container>
    </footer>
  );
}
