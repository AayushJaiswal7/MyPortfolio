import { heroData } from "@/constants/hero";
import CTAButtons from "./CTAButtons";

export default function HeroContent() {
  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <p className="text-base text-gray-400">
        {heroData.greeting}
      </p>

      <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
        {heroData.name}
      </h1>

      <h2 className="text-xl font-medium text-blue-400 md:text-2xl">
        {heroData.role}
      </h2>

      <p className="max-w-xl leading-relaxed text-gray-400">
        {heroData.description}
      </p>

      <CTAButtons />
    </div>
  );
}