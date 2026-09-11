import { useId } from "react";
import { motion } from "framer-motion";
import { timelineItems, timelineColorStyles } from "./timelineData";
import TimelineCard from "./TimelineCard";
import TimelineNode from "./TimelineNode";
import { cn } from "@/lib/utils";

const TIMELINE_PATH =
  "M50 0 C50 60, 72 100, 50 160 C28 220, 50 260, 50 320 C50 380, 72 420, 50 480 C28 540, 50 580, 50 640 C50 700, 72 740, 50 800";

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Timeline() {
  const gradientId = useId();
  const isLast = (index: number) => index === timelineItems.length - 1;

  return (
    <div className="relative mx-auto max-w-5xl">
      <svg
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-28 -translate-x-1/2 lg:block"
        viewBox="0 0 100 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            {timelineItems.map((item, index) => (
              <stop
                key={item.id}
                offset={`${(index / (timelineItems.length - 1)) * 100}%`}
                stopColor={timelineColorStyles[item.color].pathStop}
              />
            ))}
          </linearGradient>
        </defs>
        <motion.path
          d={TIMELINE_PATH}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeOpacity="0.55"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </svg>

      <motion.ol
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-12 lg:gap-20"
        aria-label="Career timeline"
      >
        {timelineItems.map((item, index) => {
          const isLeft = item.side === "left";

          return (
            <motion.li
              key={item.id}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="relative"
            >
              {/* Mobile layout */}
              <div className="relative pl-12 lg:hidden">
                {!isLast(index) && (
                  <span
                    className={cn(
                      "absolute left-6 top-16 bottom-0 w-px -translate-x-1/2",
                      timelineColorStyles[item.color].connector,
                    )}
                    aria-hidden="true"
                  />
                )}

                <div className="absolute left-6 top-8 z-10 -translate-x-1/2">
                  <TimelineNode item={item} index={index} />
                </div>

                <div className="pt-32">
                  <TimelineCard item={item} index={index} />
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden items-center lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
                <div className={cn("w-full", !isLeft && "invisible")}>
                  {isLeft && <TimelineCard item={item} index={index} />}
                </div>

                <div className="flex justify-center">
                  <TimelineNode item={item} index={index} />
                </div>

                <div className={cn("w-full", isLeft && "invisible")}>
                  {!isLeft && <TimelineCard item={item} index={index} />}
                </div>
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
    </div>
  );
}
