import { createFileRoute, useNavigate } from "@tanstack/react-router";
import heroNails from "@/assets/hero-nails.jpg.asset.json";
import { GoldButton } from "@/components/booking/GoldButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Élan Beauty — Agende sua experiência" },
      {
        name: "description",
        content:
          "Estúdio de manicure, alongamento em gel e spa dos pés em Cachoeiro. Agende seu horário pelo WhatsApp.",
      },
      { property: "og:title", content: "Maison Élan Beauty" },
      { property: "og:description", content: "Agende sua experiência de beleza." },
    ],
  }),
  component: Index,
});

function Wordmark({ size = "sm" }: { size?: "sm" | "lg" }) {
  const isLg = size === "lg";
  return (
    <div className="flex flex-col items-center text-foreground">
      <div
        className="font-display leading-none text-muted-foreground"
        style={{ fontSize: isLg ? 16 : 14, letterSpacing: "0.42em" }}
      >
        MAISON
      </div>
      <div
        className="font-display italic text-gold leading-tight"
        style={{ fontSize: isLg ? 56 : 40, letterSpacing: "0.18em" }}
      >
        ÉLAN
      </div>
      <div
        className="font-sans mt-1 text-muted-foreground"
        style={{ fontSize: isLg ? 11 : 10, letterSpacing: "0.55em" }}
      >
        BEAUTY
      </div>
    </div>
  );
}

function Index() {
  const navigate = useNavigate();
  const go = () => navigate({ to: "/agendamento" });

  return (
    <div className="min-h-dvh w-full bg-background">
      {/* MOBILE */}
      <div className="mx-auto flex min-h-dvh w-full max-w-[440px] flex-col px-5 pb-6 pt-8 md:hidden">
        <div className="flex flex-col items-center">
          <Wordmark />
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <img
            src={heroNails.url}
            alt="Manicure delicada feita no Maison Élan Beauty"
            className="aspect-[3/4] w-full object-cover"
          />
        </div>

        <div className="mt-8">
          <h1 className="font-display text-[30px] leading-[1.1] text-foreground">
            Agende sua <span className="italic text-gold">experiência</span>
          </h1>
          <p className="mt-3 max-w-[320px] text-sm leading-relaxed text-muted-foreground">
            Manicure, alongamento em gel e spa dos pés com acabamento delicado e
            atendimento atencioso.
          </p>
        </div>

        <div className="mt-auto pt-8">
          <GoldButton onClick={go}>Começar agendamento</GoldButton>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex min-h-dvh items-center justify-center px-10 py-12">
        <div className="grid w-full max-w-[1180px] grid-cols-2 items-stretch gap-10 lg:gap-16">
          <div className="flex flex-col justify-between py-8">
            <div className="flex justify-start">
              <Wordmark size="lg" />
            </div>

            <div className="mt-12">
              <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                Estúdio de Beleza · Cachoeiro
              </p>
              <h1 className="mt-5 font-display text-[58px] leading-[1.02] text-foreground lg:text-[68px]">
                Agende sua
                <br />
                <span className="italic text-gold">experiência</span>
              </h1>
              <p className="mt-6 max-w-[440px] text-[15px] leading-relaxed text-muted-foreground">
                Estúdio dedicado ao cuidado das suas unhas. Manicure detalhada,
                alongamento em gel e spa dos pés feitos com calma, higiene
                rigorosa e acabamento delicado.
              </p>

              <div className="mt-9 flex items-center gap-5">
                <div className="w-[220px]">
                  <GoldButton onClick={go}>Começar agendamento</GoldButton>
                </div>
                <div className="hidden lg:block text-xs leading-relaxed text-muted-foreground">
                  Confirmação rápida
                  <br />
                  <span className="text-foreground">via WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center border-t border-border pt-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              <span>Nails, sobrancelhas e cuidados faciais</span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
              <img
                src={heroNails.url}
                alt="Manicure delicada feita no Maison Élan Beauty"
                className="h-full max-h-[640px] w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-3 -right-3 h-24 w-24 rounded-tl-2xl border-b border-r border-gold/40" />
            <div className="pointer-events-none absolute -top-3 -left-3 h-24 w-24 rounded-br-2xl border-t border-l border-gold/40" />
          </div>
        </div>
      </div>
    </div>
  );
}
