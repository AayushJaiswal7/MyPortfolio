import { Award, FolderGit2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "10+",
    label: "Projects",
    icon: FolderGit2,
  },
  {
    value: "5+",
    label: "Certifications",
    icon: Award,
  },
  {
    value: "2+",
    label: "Years Learning",
    icon: Sparkles,
  },
];

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="absolute -inset-10 rounded-[3rem] bg-blue-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/30 bg-slate-950/60 p-7 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative flex flex-col items-center">
          <div className="relative mt-5 flex h-64 w-64 items-center justify-center rounded-full border border-blue-300/60 bg-gradient-to-br from-slate-600 to-slate-950 shadow-[0_0_80px_rgba(59,130,246,0.16)]">
            <div className="absolute -inset-6 rounded-full border border-blue-400/20" />
            <div className="absolute -inset-12 rounded-full border border-blue-500/10" />

            <div className="text-center">
              <p className="text-6xl font-bold tracking-tight text-white">
                AK
              </p>

              <p className="mt-2 text-sm font-medium text-blue-200">
                Full Stack Developer
              </p>
            </div>
          </div>

          <div className="relative z-10 -mt-3 flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-950/95 px-5 py-2.5 text-sm text-emerald-300 shadow-lg backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </div>

          <div className="mt-10 grid w-full grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center px-3 text-center"
                >
                  <Icon
                    size={17}
                    className="mb-2 text-blue-400"
                    strokeWidth={1.8}
                  />

                  <p className="text-2xl font-bold text-blue-400">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}