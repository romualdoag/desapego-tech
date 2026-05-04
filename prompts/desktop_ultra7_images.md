# Prompt: Baixar imagens do Desktop Ultra 7 e criar anúncio

## Contexto

Novo produto a adicionar: PC Desktop montado com Intel Core Ultra 7 265K.
Pastas já criadas:
- `raw_pictures/desktop_ultra_7/`
- `frontend/public/images/desktop_ultra_7/`

## Tarefa

Baixar imagens dos componentes abaixo e salvar em ambas as pastas acima.
Depois adicionar o produto em `frontend/src/data/products.ts`.

## Componentes e links Amazon

| Componente | Amazon |
|---|---|
| Thermalright FW 240 SE ARGB (watercooler) | https://www.amazon.com/dp/B0DS256KQP |
| Intel Core Ultra 7 265K | https://www.amazon.com/dp/B0DFK2MH2D |
| GIGABYTE RTX 5060 Ti GAMING OC | https://www.amazon.com/dp/B0FFQ8P2HK |
| GIGABYTE Z890 AORUS Elite WIFI7 | https://www.amazon.com/dp/B0DJP95MGB |

Para cada produto tente:
1. Buscar imagem diretamente nos sites dos fabricantes (Gigabyte, Intel, Samsung, Corsair, Thermalright)
2. Alternativamente buscar via WebSearch por `<produto> product image -site:amazon.com`
3. Baixar com curl e salvar como `<componente>.jpg` (ex: `cpu.jpg`, `gpu.jpg`, `motherboard.jpg`, `watercooler.jpg`, `ram.jpg`, `ssd.jpg`, `psu.jpg`)

Componentes sem link Amazon (buscar imagem via WebSearch):
- Samsung SSD 990 PRO 1TB
- Corsair Vengeance 64GB DDR5 6400 (CMK64GX5M2B6400C42)
- Fonte Rise Mode Zeus 850W Modular (RM-PSU-01-PA-850)

## Specs do produto (para products.ts)

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
    "Refrigeração: Thermalright FW 240 SE ARGB (Watercooler)",
    "Fonte: Rise Mode Zeus 850W Modular 80+ PFC Ativo"
  ],
  includedItems: ["Todos os componentes montados e testados"],
  condition: "Adquirido novo. Todos os componentes novos, montados e funcionando.",
  price: "A consultar",
  folder: "desktop_ultra_7",
  images: [] // preencher com os nomes dos arquivos baixados
}
```

## Após baixar imagens

Commit e push direto na `main`:
```bash
git add frontend/src/data/products.ts frontend/public/images/desktop_ultra_7/ raw_pictures/desktop_ultra_7/
git commit -m "feat: adiciona anúncio Desktop Intel Core Ultra 7 265K"
git push origin main
```
