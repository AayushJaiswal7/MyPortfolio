import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export default function Badge({ children, icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-caption font-medium uppercase tracking-wider text-primary",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
