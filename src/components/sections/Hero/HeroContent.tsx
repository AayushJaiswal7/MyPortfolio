// HeroContent.tsx

import { heroData } from "@/constants/hero";

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-8 text-white">
      <p>{heroData.greeting}</p>

      <h1>{heroData.name}</h1>

      <h2>{heroData.role}</h2>

      <p>{heroData.description}</p>
    </div>
  );
}