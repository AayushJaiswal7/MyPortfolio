import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-xl",
    "font-medium",
    "transition-all",
    "duration-300",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-blue-500",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-blue-500 text-white hover:bg-blue-400 shadow-lg shadow-blue-500/20",

        secondary:
          "border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/10",

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