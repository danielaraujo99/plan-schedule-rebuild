import alongamento from "@/assets/svc-alongamento.jpg";
import manicure from "@/assets/svc-manicure.jpg";
import banho from "@/assets/svc-banho.jpg";
import spa from "@/assets/svc-spa.jpg";

export type Service = {
  id: string;
  nome: string;
  preco: number;
  duracaoMin: number;
  imagem: string;
};

export const SERVICES: Service[] = [
  { id: "alongamento", nome: "Alongamento em Gel", preco: 160, duracaoMin: 120, imagem: alongamento },
  { id: "manicure", nome: "Manicure Completa", preco: 70, duracaoMin: 60, imagem: manicure },
  { id: "banho", nome: "Banho de Gel", preco: 90, duracaoMin: 90, imagem: banho },
  { id: "spa", nome: "Spa dos Pés", preco: 80, duracaoMin: 75, imagem: spa },
];

export const formatPreco = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const formatDuracao = (min: number) => {
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h && m) return `${h}h ${m}m`;
  if (h) return `${h}h`;
  return `${m}m`;
};

// Número do WhatsApp da loja (formato internacional, só dígitos).
export const WHATSAPP_NUMBER = "5527981359051";
