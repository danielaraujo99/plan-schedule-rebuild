import { ChevronRight, Clock } from "lucide-react";
import { formatDuracao, formatPreco, type Service } from "@/lib/services";

type Props = {
  service: Service;
  selected?: boolean;
  onClick?: () => void;
};

export function ServiceCard({ service, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-2xl border bg-card p-3 text-left transition hover:border-gold ${
        selected ? "border-gold ring-1 ring-gold" : "border-border"
      }`}
    >
      <img
        src={service.imagem}
        alt={service.nome}
        width={56}
        height={56}
        loading="lazy"
        className="h-14 w-14 shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="truncate text-[15px] font-semibold text-foreground">{service.nome}</div>
        <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="font-medium text-gold">{formatPreco(service.preco)}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {formatDuracao(service.duracaoMin)}
          </span>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-gold" />
    </button>
  );
}
