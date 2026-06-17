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
      <div className="relative mx-auto flex min-h-dvh w-full max-w-[440px] flex-col px-5 pb-6 pt-5 sm:my-8 sm:min-h-[720px] sm:rounded-2xl sm:border sm:border-border sm:bg-card sm:px-7 sm:pt-7 sm:shadow-[var(--shadow-card)]">
        {showHeader && (
          <header className="relative mb-7 flex items-center justify-center">
            {onBack && (
              <button
                onClick={onBack}
                aria-label="Voltar"
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-2 text-muted-foreground transition hover:text-foreground"
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
