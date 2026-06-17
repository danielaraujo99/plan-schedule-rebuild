import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const MESES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];
const DIAS = ["D", "S", "T", "Q", "Q", "S", "S"];

type Props = {
  value: string | null;
  onChange: (iso: string) => void;
};

export function MonthCalendar({ value, onChange }: Props) {
  // Today is computed on client only to avoid SSR/CSR hydration mismatch.
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    setToday(d);
  }, []);

  const initial = useMemo(() => {
    const base = value ? new Date(value + "T00:00:00") : new Date();
    return new Date(base.getFullYear(), base.getMonth(), 1);
  }, [value]);
  const [cursor, setCursor] = useState(initial);

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const toIso = (d: number) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  const isPast = (d: number) => (today ? new Date(year, month, d) < today : false);
  const canGoPrev = today
    ? new Date(year, month, 1) > new Date(today.getFullYear(), today.getMonth(), 1)
    : true;

  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => canGoPrev && setCursor(new Date(year, month - 1, 1))}
          disabled={!canGoPrev}
          className="rounded-full p-1.5 text-muted-foreground transition hover:text-foreground disabled:opacity-30"
          aria-label="Mês anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="font-display text-base text-foreground">
          {MESES[month]} <span className="text-muted-foreground">{year}</span>
        </div>
        <button
          type="button"
          onClick={() => setCursor(new Date(year, month + 1, 1))}
          className="rounded-full p-1.5 text-muted-foreground transition hover:text-foreground"
          aria-label="Próximo mês"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-2 text-center text-[11px] uppercase tracking-wider text-muted-foreground">
        {DIAS.map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-y-1">
        {cells.map((d, i) => {
          if (d === null) return <div key={i} />;
          const iso = toIso(d);
          const past = isPast(d);
          const selected = value === iso;
          return (
            <div key={i} className="flex items-center justify-center py-1">
              <button
                type="button"
                disabled={past}
                onClick={() => onChange(iso)}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm transition ${
                  selected
                    ? "bg-gold font-semibold"
                    : past
                      ? "cursor-not-allowed text-muted-foreground/30"
                      : "text-foreground hover:bg-accent"
                }`}
              >
                {d}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
