const SLOTS = ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"];

type Props = {
  value: string | null;
  onChange: (slot: string) => void;
};

export function TimeSlotGrid({ value, onChange }: Props) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {SLOTS.map((s) => {
        const selected = value === s;
        return (
          <button
            key={s}
            onClick={() => onChange(s)}
            className={`flex h-14 items-center justify-center rounded-2xl border text-[15px] font-medium transition ${
              selected
                ? "border-transparent gold-gradient shadow-[var(--shadow-gold)]"
                : "border-border bg-card text-foreground hover:border-gold"
            }`}
          >
            {s}
          </button>
        );
      })}
    </div>
  );
}
