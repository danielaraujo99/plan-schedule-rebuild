import { formatDuracao, formatPreco, type Service } from "@/lib/services";

type Props = {
  service: Service;
  data: string;
  horario: string;
};

const formatData = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

export function SummaryCard({ service, data, horario }: Props) {
  const rows = [
    ["Data", formatData(data)],
    ["Horário", horario],
    ["Duração", formatDuracao(service.duracaoMin)],
    ["Valor", formatPreco(service.preco)],
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-4 border-b border-border pb-4">
        <img
          src={service.imagem}
          alt={service.nome}
          width={56}
          height={56}
          loading="lazy"
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="min-w-0">
          <div className="text-xs text-muted-foreground">Serviço</div>
          <div className="truncate text-[15px] font-semibold text-foreground">{service.nome}</div>
        </div>
      </div>
      <dl className="mt-4 space-y-3 text-sm">
        {rows.map(([label, val]) => (
          <div key={label} className="grid grid-cols-[80px_1fr] items-center">
            <dt className="text-muted-foreground">{label}</dt>
            <dd className="font-medium text-foreground">{val}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
