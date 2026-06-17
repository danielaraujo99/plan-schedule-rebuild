# Deploy na Vercel

Este projeto é TanStack Start (SSR) e suporta deploy direto na Vercel via Nitro preset `vercel` (Build Output API v3).

## Como funciona

O `vite.config.ts` define `nitro: { preset: "vercel", output: { dir: ".vercel/output" } }`, e o `vercel.json` aponta `outputDirectory` para `.vercel/output`. Assim a Vercel encontra exatamente o diretório gerado pelo build.

## Passo a passo

1. Importe o repositório em https://vercel.com/new
2. O `vercel.json` define o preset `tanstack-start`, o comando `bun run build:vercel` e o Output Directory `.vercel/output`.
3. Se a Vercel tiver configuração antiga salva no painel, deixe o Output Directory como `.vercel/output`.
4. Configure as variáveis de ambiente que o app usa em **Settings → Environment Variables**.
5. Deploy.

## Observações

- O wrapper SSR (`src/server.ts`) e o tratamento de erros continuam funcionando — o preset `vercel` do Nitro empacota o mesmo handler para Vercel Functions.
- Não é preciso `wrangler` na Vercel; aquele fluxo é só para Cloudflare.
- Roteamento SPA/SSR funciona sem `rewrites` adicionais: o Build Output API gera as rotas certas.
