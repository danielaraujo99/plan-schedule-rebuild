export function StepHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-5">
      <h1 className="font-display text-[24px] leading-tight text-foreground sm:text-[26px]">
        {title}
      </h1>
      <p className="mt-1 text-[13px] text-muted-foreground">{subtitle}</p>
    </div>
  );
}
