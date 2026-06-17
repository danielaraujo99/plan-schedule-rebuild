import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  icon?: ReactNode;
  hideArrow?: boolean;
};

export function GoldButton({ children, icon, hideArrow, className = "", ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`group relative flex h-14 w-full items-center justify-center gap-3 rounded-2xl gold-gradient text-[15px] font-semibold tracking-wide shadow-[var(--shadow-gold)] transition active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      <span className="flex items-center gap-2">
        {icon}
        {children}
      </span>
      {!hideArrow && (
        <ArrowRight className="absolute right-5 h-5 w-5 transition group-hover:translate-x-0.5" />
      )}
    </button>
  );
}
