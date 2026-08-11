import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SocialLinks from "./SocialLinks";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex max-w-2xl flex-col"
    >
      {/* Intro badges */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-blue-500/50 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
          👋 Hello, I'm
        </span>

        <span className="rounded-full border border-blue-400/40 bg-white/5 px-5 py-2 text-sm font-medium text-blue-200 backdrop-blur-md">
          Product-minded full-stack engineer
        </span>
      </div>

      {/* Name */}
      <h1 className="text-6xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
        Aayush <span className="text-blue-500">Kumar</span>
      </h1>

      {/* Role */}
      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-lg font-medium sm:text-xl">
        <span className="text-slate-200">
          Computer Science Engineer
        </span>

        <span className="hidden text-blue-500 sm:block">|</span>

        <span className="text-blue-400">
          Full Stack Developer
        </span>
      </div>

      {/* Description */}
      <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
        I build modern web applications with clean architecture,
        thoughtful interfaces, and reliable user experiences.
      </p>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap gap-4">
        <Button variant="primary" size="lg">
          Download Resume
        </Button>

        <Button variant="secondary" size="lg">
          Contact Me
        </Button>
      </div>

      {/* Social Links */}
      <div className="mt-8">
        <p className="mb-3 text-sm text-slate-400">
          Connect with me
        </p>

        <SocialLinks />
      </div>
    </motion.div>
  );
}