import { GraduationCap, Heart, Target } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { aboutData } from "@/constants/about";
import type { AboutCardTheme } from "@/constants/about";
import { cn } from "@/lib/utils";

const cardIcons = {
  graduation: GraduationCap,
  target: Target,
  heart: Heart,
};

const themeStyles: Record<
  AboutCardTheme,
  {
    card: string;
    icon: string;
    badge: string;
  }
> = {
  blue: {
    card: "border-blue-500/30 shadow-blue-500/10 hover:border-blue-500/50 hover:shadow-blue-500/20",
    icon: "border-blue-500/40 bg-blue-500/10 text-blue-400",
    badge: "border-blue-500/30 text-blue-300",
  },
  green: {
    card: "border-emerald-500/30 shadow-emerald-500/10 hover:border-emerald-500/50 hover:shadow-emerald-500/20",
    icon: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
    badge: "border-emerald-500/30 text-emerald-300",
  },
  pink: {
    card: "border-pink-500/30 shadow-pink-500/10 hover:border-pink-500/50 hover:shadow-pink-500/20",
    icon: "border-pink-500/40 bg-pink-500/10 text-pink-400",
    badge: "border-pink-500/30 text-pink-300",
  },
};

export default function About() {
  return (
    <Section id="about" className="relative">
      <div className="section-glow">
        <div className="absolute right-[10%] top-[20%] h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="max-w-xl"
          >
            <Badge className="mb-6 normal-case tracking-normal">
              {aboutData.badge}
            </Badge>

            <h2 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
              {aboutData.title}{" "}
              <span className="text-primary">{aboutData.accent}</span>
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
              {aboutData.bio}
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutData.cards.map((card, index) => {
              const Icon = cardIcons[card.icon];
              const styles = themeStyles[card.theme];

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className={cn(
                    "flex min-h-[280px] flex-col rounded-[20px] border bg-slate-950/60 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 sm:p-6",
                    styles.card,
                  )}
                >
                  <div
                    className={cn(
                      "mb-5 flex h-10 w-10 items-center justify-center rounded-full border",
                      styles.icon,
                    )}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-lg font-semibold text-text">
                    {card.title}
                  </h3>

                  <ul className="mt-4 flex-1 space-y-2">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-slate-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex justify-center">
                    <span
                      className={cn(
                        "rounded-full border bg-slate-950/80 px-4 py-1.5 text-xs font-medium",
                        styles.badge,
                      )}
                    >
                      {card.footerBadge}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
