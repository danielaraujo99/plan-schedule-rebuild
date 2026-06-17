# Deploy na Vercel

Este projeto é TanStack Start (SSR) com Nitro `vercel` e saída no formato Build Output API v3.

## Configuração correta

- Framework Preset: `TanStack Start`
- Install Command: `bun install`
- Build Command: `bun run build:vercel`
- Output Directory: `.vercel/output`

O script `build:vercel` remove variáveis do sandbox, força o preset Vercel, gera `.vercel/output` e também copia a mesma saída para `output` como fallback caso o painel da Vercel ainda esteja com configuração antiga salva.

## Imagens

As imagens usadas pela interface ficam como arquivos locais em `src/assets`, entram no bundle do Vite e são publicadas em `.vercel/output/static/assets` com hash e cache longo. O deploy não depende de URLs internas do preview para carregar imagens.

## Passo a passo

1. Importe o repositório em https://vercel.com/new
2. Confirme em **Project Settings → General**:
   - Framework Preset: `TanStack Start`
   - Build Command: `bun run build:vercel`
   - Output Directory: `.vercel/output`
3. Se o painel estiver preso em `output`, o build também gera essa pasta como compatibilidade.
4. Configure variáveis de ambiente em **Settings → Environment Variables**, se houver.
5. Faça um novo deploy limpo.
