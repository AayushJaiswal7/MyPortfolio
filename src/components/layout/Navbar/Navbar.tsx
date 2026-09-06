import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/nav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const activeSection = useActiveSection();

  const isActive = (href: string) => activeSection === href.replace("#", "");

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-container border px-5 py-3 transition-all duration-300",
          scrolled
            ? "border-white/10 bg-bg/70 shadow-xl backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="font-bold tracking-tight text-text"
        >
          AAYUSH<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-1 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-button px-4 py-2 text-sm transition-all duration-200",
                isActive(link.href)
                  ? "bg-primary/15 text-primary"
                  : "text-text-secondary hover:bg-white/5 hover:text-text",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" asChild>
            <a href="#contact">Let&apos;s Talk</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-button border border-white/10 bg-white/5 text-text lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div
          className="mx-4 mt-2 rounded-container border border-white/10 bg-bg/95 p-3 shadow-xl backdrop-blur-xl lg:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-button px-4 py-3 text-sm transition-colors",
                  isActive(link.href)
                    ? "bg-primary/15 text-primary"
                    : "text-text-secondary hover:bg-white/5 hover:text-text",
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-button border border-primary/50 px-4 py-3 text-center text-sm font-medium text-primary"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
