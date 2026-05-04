# Prompt: Pesquisar preços e criar anúncio Desktop Ultra 7

## Contexto

Novo produto a adicionar: PC Desktop montado com Intel Core Ultra 7 265K.
Pastas já criadas:
- `raw_pictures/desktop_ultra_7/`
- `frontend/public/images/desktop_ultra_7/`

O dono precisa estimar o preço de venda do conjunto. Para isso, pesquisar
preço de cada componente (novo e usado) no Mercado Livre e OLX Brasil.

---

## Etapa 1 — Pesquisa de preços

Para **cada componente** da lista abaixo, buscar via WebSearch e WebFetch:

1. Preço novo no Mercado Livre (`site:mercadolivre.com.br`)
2. Preço usado no Mercado Livre (filtro "usado")
3. Preço usado na OLX (`site:olx.com.br`)

Montar tabela ao final:

| Componente | Novo (ML) | Usado (ML) | Usado (OLX) |
|---|---|---|---|
| Intel Core Ultra 7 265K | | | |
| GIGABYTE RTX 5060 Ti GAMING OC | | | |
| Gigabyte Z890 AORUS Elite WIFI7 | | | |
| Corsair Vengeance 64GB DDR5 6400 (2x32GB) | | | |
| Samsung SSD 990 PRO 1TB | | | |
| Thermalright FW 240 SE ARGB (240mm) | | | |
| Fonte Rise Mode Zeus 850W Modular | | | |

Após montar a tabela:
- Somar coluna "Novo (ML)" → custo de reposição total
- Somar coluna "Usado (ML/OLX)" → referência de mercado para conjunto usado
- Sugerir faixa de preço de venda para o conjunto montado (com desconto de ~15-25% sobre soma novo, ou ~10% acima da soma usado)

---

## Etapa 2 — Baixar imagens dos componentes

Para cada componente, tentar obter imagem de produto (PNG/JPG fundo branco ou transparente):

1. Buscar via WebSearch: `<componente> product image filetype:png OR filetype:jpg`
2. Tentar fabricante diretamente: gigabyte.com, intel.com, samsung.com, corsair.com, thermalright.com
3. Baixar com curl e salvar em **ambas** as pastas:
   - `raw_pictures/desktop_ultra_7/<nome>.jpg`
   - `frontend/public/images/desktop_ultra_7/<nome>.jpg`

Nomes de arquivo alvo:
- `cpu.jpg` — Intel Core Ultra 7 265K
- `gpu.jpg` — GIGABYTE RTX 5060 Ti
- `motherboard.jpg` — Gigabyte Z890 AORUS Elite WIFI7
- `ram.jpg` — Corsair Vengeance DDR5 64GB
- `ssd.jpg` — Samsung 990 PRO 1TB
- `watercooler.jpg` — Thermalright FW 240 SE ARGB
- `psu.jpg` — Fonte Rise Mode Zeus 850W

### Links Amazon dos componentes (referência de modelo exato)

| Componente | Amazon |
|---|---|
| Thermalright FW 240 SE ARGB | https://www.amazon.com/dp/B0DS256KQP |
| Intel Core Ultra 7 265K | https://www.amazon.com/dp/B0DFK2MH2D |
| GIGABYTE RTX 5060 Ti GAMING OC | https://www.amazon.com/dp/B0FFQ8P2HK |
| GIGABYTE Z890 AORUS Elite WIFI7 | https://www.amazon.com/dp/B0DJP95MGB |

---

## Etapa 3 — Adicionar produto em products.ts

Após pesquisa de preços, preencher o `price` com o valor decidido e adicionar em
`frontend/src/data/products.ts`:

```ts
{
  id: "desktop-ultra-7",
  name: "Desktop Intel Core Ultra 7 265K",
  description: "PC Desktop de alta performance montado com componentes de última geração. CPU Arrow Lake, GPU RTX 5060 Ti e 64GB DDR5.",
  specs: [
    "CPU: Intel Core Ultra 7 265K (Arrow Lake)",
    "GPU: GIGABYTE GeForce RTX 5060 Ti GAMING OC",
    "RAM: 64GB DDR5 Corsair Vengeance 6400MT/s (2x32GB)",
    "SSD: Samsung 990 PRO 1TB NVMe Gen4",
    "Placa-Mãe: Gigabyte Z890 AORUS Elite WIFI7",
    "Refrigeração: Thermalright FW 240 SE ARGB (Watercooler 240mm)",
    "Fonte: Rise Mode Zeus 850W Modular 80+ PFC Ativo"
  ],
  includedItems: ["Todos os componentes montados e testados"],
  condition: "Adquirido novo. Todos os componentes novos, montados e funcionando.",
  price: "A consultar", // substituir pelo valor estimado na Etapa 1
  folder: "desktop_ultra_7",
  images: [] // preencher com nomes dos arquivos baixados na Etapa 2
}
```

---

## Etapa 4 — Commit e push

```bash
git add frontend/src/data/products.ts frontend/public/images/desktop_ultra_7/ raw_pictures/desktop_ultra_7/
git commit -m "feat: adiciona anúncio Desktop Intel Core Ultra 7 265K com preço estimado"
git push origin main
```
