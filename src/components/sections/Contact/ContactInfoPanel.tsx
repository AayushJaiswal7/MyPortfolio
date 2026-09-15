import { Calendar, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import SocialLinks from "@/components/ui/SocialLinks";
import { getContactInfo } from "@/constants/contact";
import { cn } from "@/lib/utils";

const infoIcons = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
  calendar: Calendar,
};

export default function ContactInfoPanel() {
  return (
    <div className="space-y-4">
      {getContactInfo().map((info) => {
        const Icon = infoIcons[info.icon];
        const content = (
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-button",
                info.accentColor,
              )}
            >
              <Icon size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-text">{info.label}</p>
              <p className="truncate text-caption text-text-secondary">
                {info.value}
              </p>
            </div>
            {info.href && (
              <ExternalLink
                size={16}
                className="shrink-0 text-text-secondary"
              />
            )}
          </div>
        );

        if (info.href) {
          return (
            <a
              key={info.label}
              href={info.href}
              className="glass-card block p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              {content}
            </a>
          );
        }

        return (
          <div key={info.label} className="glass-card p-4">
            {content}
          </div>
        );
      })}

      <div className="pt-4">
        <p className="mb-3 text-sm text-text-secondary">Connect with me</p>
        <SocialLinks />
      </div>
    </div>
  );
}
