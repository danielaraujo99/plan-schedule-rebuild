# Deploy na Vercel

Este projeto é TanStack Start (SSR) e suporta deploy direto na Vercel via Nitro preset `vercel` (Build Output API v3).

## Como funciona

O `vite.config.ts` define `nitro: { preset: "vercel" }`, que instrui o Nitro a gerar o output no formato nativo da Vercel (`.vercel/output/`). Isso acontece automaticamente durante o build — não é preciso configurar `outputDirectory` manualmente.

## Passo a passo

1. Importe o repositório em https://vercel.com/new
2. Em **Framework Preset** selecione **Other** (não Vite). O `vercel.json` já cuida do resto.
3. Não altere Build Command nem Output Directory.
4. Configure as variáveis de ambiente que o app usa em **Settings → Environment Variables**.
5. Deploy.

## Observações

- O wrapper SSR (`src/server.ts`) e o tratamento de erros continuam funcionando — o preset `vercel` do Nitro empacota o mesmo handler para Vercel Functions.
- Não é preciso `wrangler` na Vercel; aquele fluxo é só para Cloudflare.
- Roteamento SPA/SSR funciona sem `rewrites` adicionais: o Build Output API gera as rotas certas.
