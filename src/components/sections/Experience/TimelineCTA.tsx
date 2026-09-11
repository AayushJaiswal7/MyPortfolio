import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { timelineCTA } from "./timelineData";

export default function TimelineCTA() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="mt-16 flex flex-col items-center justify-between gap-6 rounded-card border border-white/10 bg-card/60 p-6 backdrop-blur-xl sm:flex-row"
      aria-label="Call to action"
    >
      <div className="flex items-center gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/20 text-primary shadow-lg shadow-primary/20"
          aria-hidden="true"
        >
          <Star size={20} />
        </div>
        <p className="max-w-md text-sm leading-relaxed text-text-secondary">
          {timelineCTA.text}
        </p>
      </div>

      <Button variant="primary" asChild>
        <a href={timelineCTA.buttonHref} aria-label="Let's Connect">
          {timelineCTA.buttonLabel}
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </Button>
    </motion.aside>
  );
}
