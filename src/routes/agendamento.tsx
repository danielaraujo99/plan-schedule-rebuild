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
    const horaFormatada = horario.replace(":", "h") + "0";
    const linhas = [
      "Olá! Acabei de fazer meu agendamento pelo site da Maison Élan.",
      "",
      "Segue o resumo:",
      "",
      `*Serviço:* ${service.nome}`,
      `*Data:* ${dataBR}`,
      `*Horário:* ${horaFormatada}`,
      `*Duração:* ${formatDuracao(service.duracaoMin)}`,
      `*Valor:* ${formatPreco(service.preco)}`,
      "",
      `*Nome:* ${nome}`,
      `*WhatsApp:* ${whats}`,
      insta ? `*Instagram:* ${insta}` : "",
      "",
      "Aguardo a confirmação, por favor.",
      "Obrigada!",
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(linhas)}`;
    window.open(url, "_blank");
    setStep(6);
  };

  if (step === 6) {
    return (
      <BookingShell showHeader={false}>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/60">
            <Check className="h-7 w-7 text-gold" strokeWidth={2} />
          </div>
          <h1 className="font-display text-[28px] text-foreground">Agendamento enviado</h1>
          <p className="mt-3 max-w-[300px] text-sm text-muted-foreground">
            Você será redirecionada para o WhatsApp para concluir seu atendimento.
          </p>
          <div className="mt-10 w-full">
            <GoldButton onClick={confirmar} icon={<WhatsIcon />}>
              Abrir WhatsApp
            </GoldButton>
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              className="mt-4 w-full text-xs text-muted-foreground hover:text-foreground"
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
      <StepProgress current={step} total={5} />

      {step === 1 && (
        <>
          <StepHeader title="Escolha o serviço" subtitle="Selecione o que deseja agendar" />
          <div className="relative mb-4">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Buscar serviço"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input-field pl-11 focus:[border-color:var(--gold)]"
            />
          </div>
          <div className="flex flex-col gap-2.5">
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
              Continuar
            </GoldButton>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <StepHeader title="Escolha a data" subtitle="Selecione o melhor dia" />
          <MonthCalendar value={data} onChange={setData} />
          <div className="mt-auto pt-6">
            <GoldButton disabled={!data} onClick={() => setStep(3)}>
              Continuar
            </GoldButton>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <StepHeader title="Escolha o horário" subtitle="Selecione o melhor horário" />
          <TimeSlotGrid value={horario} onChange={setHorario} />
          <div className="mt-auto pt-6">
            <GoldButton disabled={!horario} onClick={() => setStep(4)}>
              Continuar
            </GoldButton>
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <StepHeader title="Seus dados" subtitle="Preencha para concluir" />
          <div className="flex flex-col gap-4">
            <Field label="Nome completo">
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Como devemos te chamar"
                className="input-field focus:[border-color:var(--gold)]"
              />
            </Field>
            <Field label="WhatsApp">
              <input
                value={whats}
                onChange={(e) => setWhats(maskPhone(e.target.value))}
                placeholder="(28) 99999-0000"
                inputMode="tel"
                className="input-field focus:[border-color:var(--gold)]"
              />
            </Field>
            <Field label="Instagram" optional>
              <input
                value={insta}
                onChange={(e) => setInsta(e.target.value)}
                placeholder="@seuinstagram"
                className="input-field focus:[border-color:var(--gold)]"
              />
            </Field>
            <label className="mt-2 flex cursor-pointer items-start gap-3 text-sm">
              <input
                type="checkbox"
                checked={novidades}
                onChange={(e) => setNovidades(e.target.checked)}
                className="sr-only"
              />
              <span
                aria-hidden
                className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded border transition ${
                  novidades ? "border-gold bg-gold" : "border-border bg-input"
                }`}
              >
                {novidades && <Check className="h-3 w-3 text-[color:var(--primary-foreground)]" strokeWidth={3} />}
              </span>
              <span className="text-muted-foreground">
                Quero receber novidades e promoções da Maison Élan
              </span>
            </label>
          </div>
          <div className="mt-auto pt-6">
            <GoldButton disabled={!nomeValido || !whatsValido} onClick={() => setStep(5)}>
              Continuar
            </GoldButton>
          </div>
        </>
      )}

      {step === 5 && service && data && horario && (
        <>
          <StepHeader title="Confirme seu agendamento" subtitle="Revise os detalhes antes de enviar" />
          <SummaryCard service={service} data={data} horario={horario} />
          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
            Ao confirmar, você será direcionada ao WhatsApp para finalizar.
          </p>
          <div className="mt-auto pt-6">
            <GoldButton onClick={confirmar} icon={<WhatsIcon />}>
              Confirmar no WhatsApp
            </GoldButton>
          </div>
        </>
      )}
    </BookingShell>
  );
}

function StepProgress({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-5 flex items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => i + 1).map((i) => (
        <div
          key={i}
          className={`h-[2px] flex-1 rounded-full transition ${
            i <= current ? "bg-gold" : "bg-border"
          }`}
        />
      ))}
    </div>
  );
}

function Field({ label, optional, children }: { label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-wider text-muted-foreground">
        {label} {optional && <span className="normal-case tracking-normal">(opcional)</span>}
      </span>
      {children}
    </label>
  );
}

function WhatsIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 3.2 17l-1.2 4.4 4.5-1.2A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.7.7.7-2.6-.2-.3A9 9 0 1 1 12 20.5Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.7-3.2-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.3s1 2.7 1.1 2.9c.2.2 2 3.1 5 4.2 1.9.7 2.6.7 3.5.6.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}
