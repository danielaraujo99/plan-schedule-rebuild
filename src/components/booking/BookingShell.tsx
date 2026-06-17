import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Logo } from "./Logo";
import heroNails from "@/assets/hero-nails.jpg.asset.json";

type Props = {
  children: ReactNode;
  onBack?: () => void;
  showHeader?: boolean;
};

export function BookingShell({ children, onBack, showHeader = true }: Props) {
  return (
    <div className="min-h-dvh w-full bg-background">
      {/* MOBILE — single card */}
      <div className="relative mx-auto flex min-h-dvh w-full max-w-[440px] flex-col px-5 pb-6 pt-5 md:hidden">
        {showHeader && (
          <header className="relative mb-7 flex items-center justify-center">
            {onBack && (
              <button
                type="button"
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

      {/* DESKTOP — two-column: brand + form card */}
      <div className="hidden md:flex min-h-dvh items-center justify-center px-10 py-10">
        <div className="grid w-full max-w-[1080px] grid-cols-[1.05fr_1fr] items-stretch gap-10 lg:gap-14">
          {/* Brand panel */}
          <aside className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={heroNails.url}
              alt="Manicure delicada Maison Élan"
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/55 to-background/90" />
            <div className="relative flex h-full min-h-[640px] flex-col justify-between p-10">
              <Logo />
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                  Estúdio · Cachoeiro
                </p>
                <h2 className="mt-4 font-display text-[40px] leading-[1.05] text-foreground lg:text-[44px]">
                  Reserve seu
                  <br />
                  <span className="italic text-gold">horário</span>
                </h2>
                <p className="mt-4 max-w-[320px] text-[13.5px] leading-relaxed text-muted-foreground">
                  Atendimento atencioso, higiene rigorosa e acabamento delicado
                  em cada detalhe.
                </p>
              </div>
            </div>
          </aside>

          {/* Form card */}
          <section className="relative flex w-full flex-col rounded-2xl border border-border bg-card px-8 py-8 shadow-[var(--shadow-card)] lg:px-10">
            {showHeader && (
              <header className="relative mb-6 flex items-center">
                {onBack && (
                  <button
                    type="button"
                    onClick={onBack}
                    aria-label="Voltar"
                    className="-ml-2 inline-flex items-center gap-2 rounded-full p-2 text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Voltar</span>
                  </button>
                )}
              </header>
            )}
            <div className="flex min-h-[560px] flex-1 flex-col">{children}</div>
          </section>
        </div>
      </div>
    </div>
  );
}
