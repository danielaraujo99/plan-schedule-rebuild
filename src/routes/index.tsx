import { createFileRoute, useNavigate } from "@tanstack/react-router";
import salonHero from "@/assets/salon-hero.jpg";
import { BookingShell } from "@/components/booking/BookingShell";
import { GoldButton } from "@/components/booking/GoldButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Élan Beauty — Agende sua experiência" },
      { name: "description", content: "Reserve seu horário no Maison Élan Beauty. Manicure, alongamento em gel, spa dos pés e mais." },
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
        <div className="flex flex-col items-center pt-6">
          <svg width="18" height="18" viewBox="0 0 14 14" className="mb-2 text-gold" aria-hidden>
            <path d="M7 0 L8 6 L14 7 L8 8 L7 14 L6 8 L0 7 L6 6 Z" fill="currentColor" />
          </svg>
          <div className="font-display text-[20px] leading-none tracking-[0.35em] text-gold">MAISON</div>
          <div className="font-display text-[40px] leading-tight tracking-[0.16em] text-gold italic">ÉLAN</div>
          <div className="font-sans text-[10px] tracking-[0.5em] text-gold/80">BEAUTY</div>
        </div>

        <div className="mt-10">
          <h1 className="font-display text-[34px] leading-[1.05] text-foreground sm:text-[40px]">
            Agende sua <span className="italic text-gold">experiência</span>
          </h1>
          <p className="mt-3 max-w-[280px] text-sm text-muted-foreground">
            Escolha o serviço ideal e reserve seu horário.
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border">
          <img
            src={salonHero}
            alt="Salão Maison Élan Beauty"
            width={800}
            height={800}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="mt-auto pt-8">
          <GoldButton onClick={() => navigate({ to: "/agendamento" })}>
            Começar Agendamento
          </GoldButton>
        </div>
      </div>
    </BookingShell>
  );
}
