import Button from "@/components/ui/Button";
import SocialLinks from "./SocialLinks";

export default function HeroContent() {
  return (
    <div className="flex max-w-2xl flex-col">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-blue-500/50 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
          👋 Hello, I'm
        </span>

        <span className="rounded-full border border-blue-400/40 bg-white/5 px-5 py-2 text-sm font-medium text-blue-200 backdrop-blur-md">
          Product-minded full-stack engineer
        </span>
      </div>

      <h1 className="text-6xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
        Aayush <span className="text-blue-500">Kumar</span>
      </h1>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-xl font-semibold md:text-2xl">
        <span className="text-white">Computer Science Engineer</span>
        <span className="hidden text-blue-400 md:block">|</span>
        <span className="text-blue-500">Full Stack Developer</span>
      </div>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
        I craft polished, reliable web products with clean architecture,
        sharp interfaces, and thoughtful interaction details.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button variant="primary" size="lg">
          Download Resume
        </Button>

        <Button variant="secondary" size="lg">
          Contact Me
        </Button>
      </div>

      <div className="mt-8">
        <p className="mb-3 text-sm text-slate-400">Connect with me</p>
        <SocialLinks />
      </div>
    </div>
  );
}