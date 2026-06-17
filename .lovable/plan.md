# Sistema de Agendamento — Maison Élan Beauty

Reaplicar o fluxo completo do mockup: experiência luxuosa em preto + dourado (sem neon), totalmente responsiva (mobile-first, desktop centralizado num "card de palco" estilo app preview).

## Identidade visual

- Paleta (tokens em `src/styles.css`):
  - `--background`: preto profundo `oklch(0.13 0.01 60)`
  - `--card`: `oklch(0.16 0.012 60)`
  - `--primary` (gold): `oklch(0.74 0.13 75)` — degradê suave para `oklch(0.66 0.12 70)`
  - `--foreground`: off-white quente `oklch(0.95 0.01 80)`
  - `--muted-foreground`: `oklch(0.65 0.02 75)`
  - `--border`: `oklch(0.22 0.015 70)`
- Tipografia (carregar via `<link>` no `__root.tsx`):
  - Display: **Cormorant Garamond** (titulares "Agende sua experiência", numerais elegantes)
  - Sans: **Inter** (corpo, labels, inputs)
- Detalhes: cantos arredondados `rounded-2xl`, botões gold full-width com seta `→`, ícone "estrela ✦" no topo do logo, micro-fades entre passos.

## Estrutura de rotas

```
src/routes/
  __root.tsx          (fonts + meta)
  index.tsx           (passo 0 — hero "Agende sua experiência")
  agendamento.tsx     (layout com state machine + Outlet OU single page com steps)
```

Decisão: **single route `/agendamento` com state interno** (passos 1–5 + sucesso). Mais simples para gerenciar form state e o botão "voltar ←". Index continua sendo o hero com CTA "Começar Agendamento".

## Componentes

- `BookingShell` — moldura preta arredondada (card de palco), max-w-md no desktop centralizado, full-screen no mobile. Header com seta voltar + logo MAISON ÉLAN.
- `StepHeader` — título numerado ("1. Escolha o serviço") + subtítulo muted.
- `ServiceCard` — avatar redondo + nome + preço + duração + chevron.
- `Calendar` — grid 7 colunas D S T Q Q S S, dia selecionado com pílula gold.
- `TimeSlotGrid` — grid 3 colunas, slot selecionado gold preenchido.
- `GoldButton` — primary CTA full-width com seta.
- `SummaryCard` — resumo final com avatar do serviço + linhas label/valor.
- `SuccessScreen` — faixa final com ✓ em círculo gold, confete sutil, CTA WhatsApp.

## Dados (mockados, sem backend nessa primeira fase)

```ts
// src/lib/services.ts
export const SERVICES = [
  { id, nome, preco, duracaoMin, imagem }
]
```

Serviços iniciais do mockup: Alongamento em Gel (R$160/2h), Manicure Completa (R$70/1h), Banho de Gel (R$90/1h30), Spa dos Pés (R$80/1h15). Imagens geradas via `imagegen` (mãos/unhas, fotografia editorial dourada).

## Fluxo

1. **Hero** (`/`) — logo + "Agende sua experiência" + foto do salão + botão "Começar Agendamento" → `/agendamento`.
2. **Step 1** — busca + lista de serviços.
3. **Step 2** — calendário mês atual, datas passadas desabilitadas.
4. **Step 3** — horários 08–19h em grid.
5. **Step 4** — form: nome*, whatsapp* (máscara), instagram (opcional), checkbox novidades.
6. **Step 5** — resumo + aviso WhatsApp + "Confirmar no WhatsApp".
7. **Sucesso** — tela com ✓ e CTA "Ir para o WhatsApp".

Botão "Confirmar" abre `https://wa.me/<NUMERO>?text=<mensagem-pré-formatada>` com todos os dados, e navega para tela de sucesso.

## Responsividade

- **Mobile (<640px)**: BookingShell ocupa viewport inteiro, padding 20px, botões full-width, grid de horários 3 col mantida.
- **Desktop (≥640px)**: BookingShell = card centralizado max-w-[420px], min-h-[760px], fundo da página em preto com vinheta sutil dourada nos cantos. Mantém proporção do mockup mobile.
- Tipografia escala: display 28px mobile → 32px desktop; corpo 14–15px.
- Imagens com `aspect-ratio` fixo para não quebrar layout.

## Detalhes técnicos

- Estado do form com `useReducer` em `agendamento.tsx`, persistido em `sessionStorage` para sobreviver a refresh.
- Validação inline: nome ≥3 chars, WhatsApp 10–11 dígitos.
- Número WhatsApp da loja: **placeholder configurável** no topo do arquivo (usuário troca depois).
- Animação entre steps: fade + slide curto via classes Tailwind (`transition` + `translate`).
- SEO: title "Maison Élan Beauty — Agendamento", meta pt-BR, og tags.

## Entregáveis

1. Tokens + fontes em `styles.css` / `__root.tsx`.
2. `src/lib/services.ts` + imagens geradas em `src/assets/`.
3. `src/components/booking/*` (Shell, Header, ServiceCard, Calendar, TimeSlotGrid, GoldButton, SummaryCard, SuccessScreen).
4. `src/routes/index.tsx` (hero refeito).
5. `src/routes/agendamento.tsx` (state machine 5 passos + sucesso).
6. Integração WhatsApp via `wa.me` link.

## Fora de escopo nesta fase

- Backend / persistência real de agendamentos (Lovable Cloud pode ser adicionado depois).
- Painel admin.
- Pagamento online.

Confirma que posso seguir assim? Em especial: **número do WhatsApp** — deixo um placeholder `5500000000000` pra você trocar, ou já tem o número?