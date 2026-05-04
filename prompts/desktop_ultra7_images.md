# Prompt: Desktop Intel Core Ultra 7 265K — preços + imagens + anúncio

## Overview do Produto

PC Desktop montado com componentes novos de alta performance (Arrow Lake + RTX 5060 Ti 16GB).

| Componente | Modelo exato |
|---|---|
| CPU | Intel Core Ultra 7 265K (Arrow Lake, LGA1851, 20 cores, 5.5GHz boost) |
| GPU | GIGABYTE GeForce RTX 5060 Ti GAMING OC 16GB |
| Placa-Mãe | Gigabyte Z890 AORUS Elite WIFI7 (LGA1851, DDR5, PCIe 5.0) |
| RAM | Corsair Vengeance 64GB DDR5 6400MT/s (2x32GB) |
| SSD | Samsung 990 PRO 1TB NVMe Gen4 |
| Watercooler | Thermalright FW 240 SE ARGB (240mm) |
| Fonte | Rise Mode Zeus 850W Modular 80+ PFC Ativo |

---

## Estado atual

| O que | Status |
|---|---|
| Pastas `raw_pictures/desktop_ultra_7/` e `frontend/public/images/desktop_ultra_7/` | ✅ criadas (vazias) |
| Pesquisa de preços ML/OLX | ⏳ pendente |
| Download de imagens dos componentes | ⏳ pendente |
| Entrada em `products.ts` | ⏳ pendente |
| Commit e push | ⏳ pendente |

---

## Aprendizados de iterações anteriores

- Pastas já existem — não recriar, não usar `mkdir -p` desnecessariamente.
- Baixar imagens com `curl -L -o <destino>` (não wget).
- Salvar em **ambas** as pastas simultaneamente (raw_pictures + frontend/public/images).
- Se imagem da Amazon redirecionar para login, tentar diretamente no site do fabricante.
- Links Amazon abaixo são para identificar modelo exato, não para download direto de imagem.
- Rise Mode Zeus 850W: site do fabricante é `risemode.com.br` — verificar lá se Amazon falhar.
- Quando WebSearch retornar preço de produto no ML, preferir itens "Fulfillment" ou vendidos por loja oficial para preço "novo".
- Preço sugerido de venda: calcular ~20% abaixo da soma dos novos (desconto por conjunto já montado + testado).

---

## Etapa 1 — Pesquisa de preços

Para **cada componente**, buscar via WebSearch:
1. Preço novo no Mercado Livre (`site:mercadolivre.com.br`)
2. Preço usado no Mercado Livre (filtro "usado")
3. Preço usado na OLX (`site:olx.com.br`)

Montar tabela:

| Componente | Novo (ML) | Usado (ML) | Usado (OLX) |
|---|---|---|---|
| Intel Core Ultra 7 265K | | | |
| GIGABYTE RTX 5060 Ti GAMING OC 16GB | | | |
| Gigabyte Z890 AORUS Elite WIFI7 | | | |
| Corsair Vengeance 64GB DDR5 6400 (2x32GB) | | | |
| Samsung SSD 990 PRO 1TB | | | |
| Thermalright FW 240 SE ARGB (240mm) | | | |
| Fonte Rise Mode Zeus 850W Modular | | | |
| **TOTAL** | | | |

Após montar a tabela:
- Somar coluna "Novo (ML)" → custo de reposição total
- Somar coluna "Usado" → referência de mercado
- Sugerir faixa de venda (~20% abaixo da soma novo para conjunto montado e testado)

---

## Etapa 2 — Baixar imagens dos componentes

Para cada componente, obter imagem (PNG/JPG fundo branco ou transparente).

### Estratégia (em ordem de preferência)

1. Site do fabricante direto (URLs abaixo)
2. Amazon como referência de modelo exato
3. WebSearch: `<componente> product image site:<fabricante>.com`

### Referências Amazon (modelo exato)

| Componente | Amazon |
|---|---|
| Thermalright FW 240 SE ARGB | https://www.amazon.com/dp/B0DS256KQP |
| Intel Core Ultra 7 265K | https://www.amazon.com/dp/B0DFK2MH2D |
| GIGABYTE RTX 5060 Ti GAMING OC 16GB | https://www.amazon.com/dp/B0FFQ8P2HK |
| GIGABYTE Z890 AORUS Elite WIFI7 | https://www.amazon.com/dp/B0DJP95MGB |

### Fabricantes para imagens

| Componente | Site fabricante |
|---|---|
| CPU | intel.com |
| GPU + Placa-Mãe | gigabyte.com |
| RAM | corsair.com |
| SSD | samsung.com/semiconductor |
| Watercooler | thermalright.com |
| Fonte | risemode.com.br |

### Nomes de arquivo alvo

| Arquivo | Componente |
|---|---|
| `cpu.jpg` | Intel Core Ultra 7 265K |
| `gpu.jpg` | GIGABYTE RTX 5060 Ti 16GB |
| `motherboard.jpg` | Gigabyte Z890 AORUS Elite WIFI7 |
| `ram.jpg` | Corsair Vengeance DDR5 64GB |
| `ssd.jpg` | Samsung 990 PRO 1TB |
| `watercooler.jpg` | Thermalright FW 240 SE ARGB |
| `psu.jpg` | Fonte Rise Mode Zeus 850W |

### Destinos (salvar em AMBOS)

```
/Users/romualdo.geraldi/romualdoag/desapego-tech/raw_pictures/desktop_ultra_7/<nome>.jpg
/Users/romualdo.geraldi/romualdoag/desapego-tech/frontend/public/images/desktop_ultra_7/<nome>.jpg
```

Baixar com:
```bash
curl -L -o "<destino>" "<url>"
```

Se não achar imagem de qualidade, pular e registrar qual falhou.

---

## Etapa 3 — Adicionar produto em products.ts

Arquivo: `/Users/romualdo.geraldi/romualdoag/desapego-tech/frontend/src/data/products.ts`

Adicionar na lista `products`:

```ts
{
  id: "desktop-ultra-7",
  name: "Desktop Intel Core Ultra 7 265K",
  description: "PC Desktop de alta performance montado com componentes de última geração. CPU Arrow Lake, GPU RTX 5060 Ti 16GB e 64GB DDR5.",
  specs: [
    "CPU: Intel Core Ultra 7 265K (Arrow Lake)",
    "GPU: GIGABYTE GeForce RTX 5060 Ti GAMING OC 16GB",
    "RAM: 64GB DDR5 Corsair Vengeance 6400MT/s (2x32GB)",
    "SSD: Samsung 990 PRO 1TB NVMe Gen4",
    "Placa-Mãe: Gigabyte Z890 AORUS Elite WIFI7",
    "Refrigeração: Thermalright FW 240 SE ARGB (Watercooler 240mm)",
    "Fonte: Rise Mode Zeus 850W Modular 80+ PFC Ativo"
  ],
  includedItems: ["Todos os componentes montados e testados"],
  condition: "Adquirido novo. Todos os componentes novos, montados e funcionando.",
  price: "R$ X.XXX",  // substituir pelo valor estimado na Etapa 1
  folder: "desktop_ultra_7",
  images: []  // preencher com nomes dos arquivos baixados na Etapa 2
}
```

---

## Etapa 4 — Commit e push

```bash
git add frontend/src/data/products.ts frontend/public/images/desktop_ultra_7/ raw_pictures/desktop_ultra_7/
git commit -m "feat: adiciona anúncio Desktop Intel Core Ultra 7 265K com preço estimado"
git push origin main
```
