import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  accent?: string;
  titleSuffix?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  badge,
  badgeIcon,
  title,
  accent,
  titleSuffix,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "mb-16",
        isCenter ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {badge && (
        <div className={cn("mb-6", isCenter && "flex justify-center")}>
          <Badge icon={badgeIcon}>{badge}</Badge>
        </div>
      )}

      <h2 className="text-h2 font-bold text-text sm:text-h1">
        {title}{" "}
        {accent && <span className="text-primary">{accent}</span>}
        {titleSuffix && ` ${titleSuffix}`}
      </h2>

      {subtitle && (
        <p className="mt-4 text-body-lg text-text-secondary">{subtitle}</p>
      )}
    </motion.div>
  );
}
