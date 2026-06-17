export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center text-foreground ${className}`}>
      <div className="font-display text-[13px] leading-none tracking-[0.4em] text-muted-foreground">
        MAISON
      </div>
      <div className="font-display text-[22px] leading-tight tracking-[0.2em] italic text-gold">
        ÉLAN
      </div>
      <div className="font-sans text-[9px] tracking-[0.5em] mt-1 text-muted-foreground">
        BEAUTY
      </div>
    </div>
  );
}
