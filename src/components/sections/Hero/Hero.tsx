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
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="absolute bottom-[5%] right-[5%] h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(96 165 250) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <HeroContent />
          <HeroCard />
        </div>
      </Container>
    </Section>
  );
}