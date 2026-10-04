import type { ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "bg-primary-soft text-secondary hover:bg-primary/20",
  inverted: "bg-secondary text-white hover:bg-secondary/85",
  outlined:
    "border border-secondary text-secondary hover:bg-secondary hover:text-white",
} as const;

export type ButtonVariant = keyof typeof variants;

export function buttonStyles(
  variant: ButtonVariant = "primary",
  className = "",
) {
  return `${base} ${variants[variant]} ${className}`.trim();
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={buttonStyles(variant, className)}
      {...props}
    />
  );
}
