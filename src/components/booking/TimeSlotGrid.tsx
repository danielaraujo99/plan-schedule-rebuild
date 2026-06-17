const SLOTS = ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"];

type Props = {
  value: string | null;
  onChange: (slot: string) => void;
};

export function TimeSlotGrid({ value, onChange }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {SLOTS.map((s) => {
        const selected = value === s;
        return (
          <button
            key={s}
            type="button"
            onClick={() => onChange(s)}
            className={`flex h-12 items-center justify-center rounded-xl border text-[14px] font-medium transition ${
              selected
                ? "border-gold bg-gold"
                : "border-border bg-card text-foreground hover:border-gold/60"
            }`}
          >
            {s}
          </button>
        );
      })}
    </div>
  );
}
