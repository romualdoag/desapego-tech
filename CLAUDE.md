# desapego-tech

Site de venda de produtos tech usados. Stack: React + TypeScript + Vite + Tailwind.

## Estrutura

```
frontend/src/data/products.ts   — fonte de verdade de todos os produtos
frontend/public/images/         — imagens servidas pelo frontend (por produto)
raw_pictures/                   — imagens originais brutas (por produto)
frontend/instagram-story.html   — template de story para Instagram
```

## Adicionar produto

1. Criar pasta `raw_pictures/<id>/` com as imagens originais
2. Copiar imagens para `frontend/public/images/<id>/`
3. Adicionar entrada em `frontend/src/data/products.ts` seguindo a interface `Product`

## Interface Product

```ts
{
  id: string           // kebab-case
  name: string
  description: string
  specs: string[]
  includedItems: string[]
  condition: string
  price: string        // "R$ X.XXX" ou "A consultar"
  folder: string       // nome da pasta em public/images/
  images: string[]     // nomes dos arquivos dentro da pasta
}
```

## Git

- Commits e push podem ser feitos **direto na branch `main`** (default branch).
- Não é necessário abrir PR para mudanças de conteúdo/produto.
- Usar PR apenas para mudanças estruturais no frontend.

## Imagens

- Sempre copiar para `frontend/public/images/<produto>/` além de `raw_pictures/<produto>/`
- Imagens de tela (saúde de bateria, "Sobre", etc.) são válidas e agregam valor ao anúncio
- Nomear arquivos descritivamente quando possível (ex: `macbook_air_bateria.jpeg`)
