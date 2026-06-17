import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "ghost";
};

export function GoldButton({ children, icon, variant = "primary", className = "", ...rest }: Props) {
  const base =
    "flex h-12 w-full items-center justify-center gap-2 rounded-xl text-[14px] font-medium tracking-wide transition active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40";
  const styles =
    variant === "primary"
      ? "bg-gold hover:opacity-90"
      : "border border-border bg-transparent text-foreground hover:border-gold";
  return (
    <button {...rest} className={`${base} ${styles} ${className}`}>
      {icon}
      {children}
    </button>
  );
}
