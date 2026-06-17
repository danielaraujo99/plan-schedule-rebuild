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
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-xl border bg-card p-3 text-left transition ${
        selected ? "border-gold" : "border-border hover:border-gold/40"
      }`}
    >
      <img
        src={service.imagem}
        alt={service.nome}
        width={52}
        height={52}
        loading="lazy"
        className="h-13 w-13 shrink-0 rounded-lg object-cover"
        style={{ height: 52, width: 52 }}
      />
      <div className="min-w-0 flex-1">
        <div className="truncate text-[14px] font-medium text-foreground">{service.nome}</div>
        <div className="mt-1 flex items-center gap-3 text-[12px] text-muted-foreground">
          <span className="text-gold">{formatPreco(service.preco)}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {formatDuracao(service.duracaoMin)}
          </span>
        </div>
      </div>
      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
    </button>
  );
}
