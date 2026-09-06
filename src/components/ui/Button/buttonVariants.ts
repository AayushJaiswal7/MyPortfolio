import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-button",
    "font-medium",
    "transition-all",
    "duration-300",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "cursor-pointer",
    "active:translate-y-px",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-primary/30",

        secondary:
          "border border-white/10 bg-white/5 text-white backdrop-blur-md hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10",

        outline:
          "border border-primary/50 bg-transparent text-primary hover:-translate-y-0.5 hover:bg-primary/10",

        ghost:
          "bg-transparent text-white hover:bg-white/5",
      },

      size: {
        sm: "h-9 px-4 text-sm",

        md: "h-11 px-6 text-base",

        lg: "h-12 px-8 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);