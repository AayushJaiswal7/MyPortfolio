"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-3 shadow-xl backdrop-blur-xl">
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-white"
        >
          Aayush<span className="text-blue-500">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 md:block"
        >
          Let's Talk
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-slate-950/90 p-3 shadow-xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}