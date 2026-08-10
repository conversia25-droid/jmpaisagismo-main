# JM Paisagismo & Conservação

Site institucional em React para apresentação dos serviços da JM Paisagismo & Conservação em Belo Horizonte e região.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Vitest

## Rodar localmente

```sh
npm install
npm run dev
```

## Validar produção

```sh
npm run build
npm run preview
```

## Conteúdo principal

- Home com chamada para orçamento
- Serviços
- Portfólio com filtros e lightbox
- Sobre
- Contato com envio direto para WhatsApp

## Observações

Os dados de contato ficam centralizados em `src/lib/company.ts`. Para alterar telefone, e-mail, cidade ou domínio, ajuste esse arquivo primeiro.
