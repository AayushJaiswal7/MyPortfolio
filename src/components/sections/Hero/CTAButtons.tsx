import Button from "@/components/ui/Button";

export default function CTAButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary" size="lg">
        Download Resume
      </Button>

      <Button variant="secondary" size="lg">
        Contact Me
      </Button>
    </div>
  );
}