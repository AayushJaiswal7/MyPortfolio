import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import HeroContent from "./HeroContent";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <Section id="hero" className="relative overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <HeroContent />
          <HeroCard />
        </div>
      </Container>
    </Section>
  );
}