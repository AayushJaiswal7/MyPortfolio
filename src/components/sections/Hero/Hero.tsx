import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import HeroContent from "./HeroContent";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <HeroContent />
          <HeroCard />
        </div>
      </Container>

      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
    </Section>
  );
}