import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, Search } from "lucide-react";
import { BookingShell } from "@/components/booking/BookingShell";
import { StepHeader } from "@/components/booking/StepHeader";
import { ServiceCard } from "@/components/booking/ServiceCard";
import { MonthCalendar } from "@/components/booking/MonthCalendar";
import { TimeSlotGrid } from "@/components/booking/TimeSlotGrid";
import { GoldButton } from "@/components/booking/GoldButton";
import { SummaryCard } from "@/components/booking/SummaryCard";
import { SERVICES, WHATSAPP_NUMBER, formatPreco } from "@/lib/services";

export const Route = createFileRoute("/agendamento")({
  head: () => ({
    meta: [
      { title: "Agendamento — Maison Élan Beauty" },
      { name: "description", content: "Reserve seu horário em poucos passos." },
    ],
  }),
  component: Agendamento,
});

type Step = 1 | 2 | 3 | 4 | 5 | 6;

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function Agendamento() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(1);
  const [query, setQuery] = useState("");
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [data, setData] = useState<string | null>(null);
  const [horario, setHorario] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");
  const [insta, setInsta] = useState("");
  const [novidades, setNovidades] = useState(true);

  const service = useMemo(() => SERVICES.find((s) => s.id === serviceId) ?? null, [serviceId]);
  const filtered = useMemo(
    () => SERVICES.filter((s) => s.nome.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const dataBR = data ? data.split("-").reverse().join("/") : "";
  const nomeValido = nome.trim().length >= 3;
  const whatsValido = whats.replace(/\D/g, "").length >= 10;

  const back = () => {
    if (step === 1) navigate({ to: "/" });
    else setStep((s) => (s - 1) as Step);
  };

  const confirmar = () => {
    if (!service || !data || !horario) return;
    const linhas = [
      "Olá! Gostaria de confirmar meu agendamento na Maison Élan Beauty:",
      "",
      `*Serviço:* ${service.nome}`,
      `*Data:* ${dataBR}`,
      `*Horário:* ${horario}`,
      `*Valor:* ${formatPreco(service.preco)}`,
      "",
      `*Nome:* ${nome}`,
      `*WhatsApp:* ${whats}`,
      insta ? `*Instagram:* ${insta}` : "",
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(linhas)}`;
    window.open(url, "_blank");
    setStep(6);
  };

  if (step === 6) {
    return (
      <BookingShell showHeader={false}>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold">
            <Check className="h-10 w-10 text-gold" strokeWidth={2.5} />
          </div>
          <h1 className="font-display text-[32px] text-foreground">Agendamento enviado!</h1>
          <p className="mt-3 max-w-[300px] text-sm text-muted-foreground">
            Você será redirecionada para o WhatsApp para concluir seu agendamento.
          </p>
          <div className="mt-10 w-full">
            <GoldButton hideArrow onClick={confirmar} icon={<WhatsIcon />}>
              Ir para o WhatsApp
            </GoldButton>
            <button
              onClick={() => navigate({ to: "/" })}
              className="mt-4 w-full text-xs text-muted-foreground hover:text-gold"
            >
              Voltar ao início
            </button>
          </div>
        </div>
      </BookingShell>
    );
  }

  return (
    <BookingShell onBack={back}>
      {step === 1 && (
        <>
          <StepHeader title="1. Escolha o serviço" subtitle="Selecione o serviço desejado" />
          <div className="relative mb-4">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Buscar serviço"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 w-full rounded-2xl border border-border bg-input pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            {filtered.map((s) => (
              <ServiceCard
                key={s.id}
                service={s}
                selected={serviceId === s.id}
                onClick={() => setServiceId(s.id)}
              />
            ))}
          </div>
          <div className="mt-auto pt-6">
            <GoldButton disabled={!serviceId} onClick={() => setStep(2)}>
              Próximo
            </GoldButton>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <StepHeader title="2. Escolha a data" subtitle="Selecione o dia desejado" />
          <MonthCalendar value={data} onChange={setData} />
          <div className="mt-auto pt-6">
            <GoldButton disabled={!data} onClick={() => setStep(3)}>
              Próximo
            </GoldButton>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <StepHeader title="3. Escolha o horário" subtitle="Selecione o melhor horário" />
          <TimeSlotGrid value={horario} onChange={setHorario} />
          <div className="mt-auto pt-6">
            <GoldButton disabled={!horario} onClick={() => setStep(4)}>
              Próximo
            </GoldButton>
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <StepHeader title="4. Seus dados" subtitle="Preencha seus dados para continuar" />
          <div className="flex flex-col gap-4">
            <Field label="Nome completo">
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
                className="input-field"
              />
            </Field>
            <Field label="WhatsApp">
              <input
                value={whats}
                onChange={(e) => setWhats(maskPhone(e.target.value))}
                placeholder="(28) 99913-0124"
                inputMode="tel"
                className="input-field"
              />
            </Field>
            <Field label="Instagram" optional>
              <input
                value={insta}
                onChange={(e) => setInsta(e.target.value)}
                placeholder="@seuinstagram"
                className="input-field"
              />
            </Field>
            <label className="mt-2 flex cursor-pointer items-start gap-3 text-sm">
              <span
                onClick={() => setNovidades((v) => !v)}
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
                  novidades ? "border-transparent gold-gradient" : "border-border bg-input"
                }`}
              >
                {novidades && <Check className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={3} />}
              </span>
              <input
                type="checkbox"
                checked={novidades}
                onChange={(e) => setNovidades(e.target.checked)}
                className="sr-only"
              />
              <span className="text-muted-foreground">
                Quero receber novidades e promoções da Maison Élan Beauty
              </span>
            </label>
          </div>
          <div className="mt-auto pt-6">
            <GoldButton disabled={!nomeValido || !whatsValido} onClick={() => setStep(5)}>
              Próximo
            </GoldButton>
          </div>
        </>
      )}

      {step === 5 && service && data && horario && (
        <>
          <StepHeader title="5. Confirme seu agendamento" subtitle="Confira os detalhes do seu agendamento" />
          <SummaryCard service={service} data={data} horario={horario} />
          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-border bg-card/50 p-4">
            <WhatsIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <p className="text-xs text-muted-foreground">
              Ao confirmar, você será direcionada para o WhatsApp para finalizar seu agendamento.
            </p>
          </div>
          <div className="mt-auto pt-6">
            <GoldButton hideArrow onClick={confirmar} icon={<WhatsIcon />}>
              Confirmar no WhatsApp
            </GoldButton>
          </div>
        </>
      )}

      {/* shared input styles via @utility-ish inline */}
      <style>{`
        .input-field {
          height: 48px;
          width: 100%;
          border-radius: 14px;
          background: var(--input);
          border: 1px solid var(--border);
          padding: 0 14px;
          font-size: 14px;
          color: var(--foreground);
          outline: none;
          transition: border-color .15s;
        }
        .input-field::placeholder { color: var(--muted-foreground); }
        .input-field:focus { border-color: var(--gold); }
      `}</style>
    </BookingShell>
  );
}

function Field({ label, optional, children }: { label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-foreground">
        {label} {optional && <span className="text-muted-foreground font-normal">(opcional)</span>}
      </span>
      {children}
    </label>
  );
}

function WhatsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 3.2 17l-1.2 4.4 4.5-1.2A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.7.7.7-2.6-.2-.3A9 9 0 1 1 12 20.5Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.7-3.2-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.3s1 2.7 1.1 2.9c.2.2 2 3.1 5 4.2 1.9.7 2.6.7 3.5.6.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}
