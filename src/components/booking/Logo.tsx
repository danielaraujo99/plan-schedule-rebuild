export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center text-gold ${className}`}>
      <svg width="14" height="14" viewBox="0 0 14 14" className="mb-1 opacity-80" aria-hidden>
        <path d="M7 0 L8 6 L14 7 L8 8 L7 14 L6 8 L0 7 L6 6 Z" fill="currentColor" />
      </svg>
      <div className="font-display text-[15px] leading-none tracking-[0.35em]">MAISON</div>
      <div className="font-display text-[22px] leading-tight tracking-[0.18em] italic">ÉLAN</div>
      <div className="font-sans text-[8px] tracking-[0.45em] mt-0.5 opacity-80">BEAUTY</div>
    </div>
  );
}
