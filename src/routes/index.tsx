import { createFileRoute, useNavigate } from "@tanstack/react-router";
import salonHero from "@/assets/salon-hero.jpg";
import { BookingShell } from "@/components/booking/BookingShell";
import { GoldButton } from "@/components/booking/GoldButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Élan Beauty — Agende sua experiência" },
      {
        name: "description",
        content:
          "Reserve seu horário no Maison Élan Beauty. Manicure, alongamento em gel, spa dos pés e mais.",
      },
      { property: "og:title", content: "Maison Élan Beauty" },
      { property: "og:description", content: "Agende sua experiência de beleza." },
    ],
  }),
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  return (
    <BookingShell showHeader={false}>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-col items-center pt-4">
          <div className="font-display text-[14px] leading-none tracking-[0.42em] text-muted-foreground">
            MAISON
          </div>
          <div className="font-display text-[40px] leading-tight tracking-[0.18em] italic text-gold">
            ÉLAN
          </div>
          <div className="font-sans text-[10px] tracking-[0.55em] mt-1 text-muted-foreground">
            BEAUTY
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <img
            src={salonHero}
            alt="Salão Maison Élan Beauty"
            width={800}
            height={600}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="mt-8">
          <h1 className="font-display text-[30px] leading-[1.1] text-foreground sm:text-[34px]">
            Agende sua <span className="italic text-gold">experiência</span>
          </h1>
          <p className="mt-3 max-w-[300px] text-sm leading-relaxed text-muted-foreground">
            Escolha o serviço ideal e reserve seu horário em poucos passos.
          </p>
        </div>

        <div className="mt-auto pt-8">
          <GoldButton onClick={() => navigate({ to: "/agendamento" })}>
            Começar agendamento
          </GoldButton>
        </div>
      </div>
    </BookingShell>
  );
}
