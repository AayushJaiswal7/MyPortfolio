import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
    </section>
  );
}