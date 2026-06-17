import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Logo } from "./Logo";

type Props = {
  children: ReactNode;
  onBack?: () => void;
  showHeader?: boolean;
};

export function BookingShell({ children, onBack, showHeader = true }: Props) {
  return (
    <div className="min-h-dvh w-full bg-background">
      {/* vignette glow */}
      <div className="pointer-events-none fixed inset-0 opacity-60 [background:radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_70%),radial-gradient(40%_40%_at_50%_100%,color-mix(in_oklab,var(--gold)_8%,transparent),transparent_70%)]" />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-[440px] flex-col px-5 pb-6 pt-6 sm:my-6 sm:min-h-[760px] sm:rounded-[28px] sm:border sm:border-border sm:bg-card sm:px-6 sm:pt-7 sm:shadow-[var(--shadow-card)]">
        {showHeader && (
          <header className="relative mb-6 flex items-center justify-center">
            {onBack && (
              <button
                onClick={onBack}
                aria-label="Voltar"
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-2 text-gold transition hover:bg-accent"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <Logo />
          </header>
        )}
        <div className="flex flex-1 flex-col">{children}</div>
      </div>
    </div>
  );
}
