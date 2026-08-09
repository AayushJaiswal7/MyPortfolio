const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "#" },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-400"
        >
          {social.label.slice(0, 2)}
        </a>
      ))}
    </div>
  );
}