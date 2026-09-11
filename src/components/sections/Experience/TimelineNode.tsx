import {
  Briefcase,
  Code2,
  GraduationCap,
  Rocket,
  type LucideIcon,
} from "lucide-react";
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

interface TimelineNodeProps {
  item: TimelineItem;
  index: number;
}

export default function TimelineNode({ item, index }: TimelineNodeProps) {
  const Icon = iconMap[item.icon];
  const styles = timelineColorStyles[item.color];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
      className="relative z-10 flex flex-col items-center"
    >
      <div className="mb-3 text-center">
        <p className="text-xs font-semibold tracking-wide text-text">
          {item.step}
        </p>
        <p className="mt-0.5 max-w-[108px] text-xs leading-snug text-text-secondary sm:max-w-[128px]">
          {item.stepLabel}
        </p>
      </div>

      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.25 }}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-lg transition-shadow duration-250 hover:shadow-xl",
          styles.node,
          styles.nodeGlow,
        )}
      >
        <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
      </motion.div>
    </motion.div>
  );
}
