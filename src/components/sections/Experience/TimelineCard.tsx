import { Calendar, Check, Briefcase, Code2, GraduationCap, Rocket, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { TimelineIcon, TimelineItem } from "./timelineData";
import { timelineColorStyles } from "./timelineData";
import { cn } from "@/lib/utils";

const iconMap: Record<TimelineIcon, LucideIcon> = {
  graduation: GraduationCap,
  briefcase: Briefcase,
  code: Code2,
  rocket: Rocket,
};

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
}

export default function TimelineCard({ item, index }: TimelineCardProps) {
  const Icon = iconMap[item.icon];
  const styles = timelineColorStyles[item.color];
  const isLeft = item.side === "left";

  return (
    <motion.article
      initial={{ opacity: 0, x: isLeft ? -20 : 20, y: 12 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
      className={cn(
        "group relative w-full",
        "lg:w-[calc(100%-2rem)]",
        isLeft ? "lg:ml-auto lg:pr-4" : "lg:mr-auto lg:pl-4",
      )}
    >
      <span
        className={cn(
          "absolute top-1/2 hidden h-px w-8 -translate-y-1/2 lg:block",
          styles.connector,
          isLeft ? "-right-8" : "-left-8",
        )}
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative overflow-hidden rounded-card border bg-card/70 p-6 backdrop-blur-xl",
          "shadow-lg transition-all duration-[250ms]",
          "lg:hover:-translate-y-1.5",
          styles.cardBorder,
          styles.cardBorderHover,
          styles.cardGlow,
          styles.cardGlowHover,
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute h-24 w-24 rounded-full opacity-20 blur-2xl",
            isLeft ? "-left-8 -top-8" : "-right-8 -top-8",
            item.color === "blue" && "bg-blue-500",
            item.color === "green" && "bg-emerald-500",
            item.color === "purple" && "bg-purple-500",
            item.color === "amber" && "bg-amber-500",
          )}
          aria-hidden="true"
        />

        <div className="relative flex gap-4">
          <div
            className={cn(
              "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border",
              styles.icon,
            )}
          >
            <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-text">{item.title}</h3>
            <p className={cn("mt-1 text-sm font-medium", styles.text)}>
              {item.organization}
            </p>

            {item.duration && (
              <div className="mt-3 flex items-center gap-2 text-sm text-text-secondary">
                <Calendar size={14} aria-hidden="true" />
                <time>{item.duration}</time>
              </div>
            )}

            {item.description && (
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            )}

            {item.bullets && (
              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
