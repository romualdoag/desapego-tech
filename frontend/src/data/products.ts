export interface Product {
  id: string;
  name: string;
  description: string;
  specs: string[];
  includedItems: string[];
  condition: string;
  price: string;
  folder: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    description: "Smartphone Apple potente com excelente conjunto de câmeras.",
    specs: [
      "Capacidade: 256GB",
      "Saúde da Bateria: 81%",
      "Cor: Titânio Azul"
    ],
    includedItems: ["Caixa original", "Cabo USB-C"],
    condition: "Adquirido novo, único dono.",
    price: "A definir",
    folder: "iphone_15_pro_max_256",
    images: ["IMG_0235.JPEG", "IMG_9928.JPEG", "IMG_9929.JPEG", "IMG_9931.JPEG", "IMG_9932.JPEG"]
  },
  {
    id: "mac-mini-m4",
    name: "Mac Mini M4",
    description: "Computador desktop ultra-compacto e potente.",
    specs: [
      "Chip M4 (10 CPUs / 10 GPUs)",
      "Memória RAM: 16GB",
      "Armazenamento: 512GB Interno",
      "Expansão: +512GB no Dock Ugreen (Total 1TB)"
    ],
    includedItems: ["Cabo de energia", "Dock Ugreen com SSD 512GB"],
    condition: "Adquirido novo.",
    price: "A definir",
    folder: "mac_mini_m4",
    images: ["IMG_2011.JPEG", "IMG_2012.JPEG", "IMG_2013.JPEG", "IMG_2014.JPEG", "IMG_2015.JPEG", "IMG_2016.JPEG", "IMG_2017.JPEG", "IMG_2018.JPEG"]
  },
  {
    id: "olympus-em10-mark-iv",
    name: "Olympus E-M10 Mark IV",
    description: "Câmera Mirrorless compacta e leve, ideal para viagens e fotografia do dia a dia. Possui sensor de 20MP e estabilização de 5 eixos no corpo.",
    specs: [
      "Sensor Live MOS de 20MP",
      "Estabilização de imagem de 5 eixos no corpo",
      "Gravação de vídeo em 4K",
      "Tela touch articulável para selfies",
      "Inclui Lente Pancake 14-42mm"
    ],
    includedItems: ["Lente Pancake 14-42mm", "Alça", "Bateria", "Carregador"],
    condition: "Adquirido novo. OBS: Não acompanha cartão de memória.",
    price: "R$ 5.700",
    folder: "olympus_em10_mark_iv",
    images: ["IMG_2491.JPEG", "IMG_2492.JPEG", "IMG_2493.JPEG", "IMG_2494.JPEG", "IMG_2495.JPEG", "IMG_2496.JPEG"]
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2ª Geração) USB-C",
    description: "Fones de ouvido premium com cancelamento de ruído ativo avançado e áudio espacial personalizado.",
    specs: [
      "Chip H2",
      "Cancelamento Ativo de Ruído (ANC) 2x mais potente",
      "Modo Transparência Adaptável",
      "Áudio Espacial com rastreamento dinâmico",
      "Estojo MagSafe (USB-C) com alto-falante para busca"
    ],
    includedItems: ["Caixa original", "Cabo USB-C (nunca usado)"],
    condition: "Adquirido novo.",
    price: "R$ 1.100",
    folder: "airpods_pro_2",
    images: ["IMG_0237.JPEG", "IMG_0236.JPEG", "IMG_0238.PNG", "IMG_0239.JPEG", "IMG_2502.JPEG", "IMG_2503.JPEG", "IMG_2504.JPEG", "IMG_2505.JPEG", "IMG_2506.JPEG", "IMG_2507.JPEG"]
  },
  {
    id: "google-chromecast",
    name: "Google Chromecast",
    description: "Dispositivo de streaming para TV com Google TV integrado.",
    specs: [
      "Suporte a 4K HDR",
      "Google TV com controle remoto por voz"
    ],
    includedItems: [
      "Caixa original",
      "Cabo",
      "Pilha OEM para controle",
      "Adaptador de energia US (nunca usado)"
    ],
    condition: "Adquirido novo.",
    price: "A definir",
    folder: "google_chromecast",
    images: ["IMG_0243.JPEG", "IMG_0240.JPEG", "IMG_0241.JPEG", "IMG_0242.JPEG", "IMG_0244.JPEG"]
  },
  {
    id: "dell-dockstation-wd19",
    name: "Dell Dock Station WD19",
    description: "Estação de acoplamento USB-C versátil projetada para aumentar a produtividade com múltiplas opções de conectividade.",
    specs: [
      "Conexão USB-C",
      "Suporte para até dois monitores Full HD ou um monitor 4K",
      "Múltiplas portas USB",
      "Porta Gigabit Ethernet"
    ],
    includedItems: ["Fonte original Dell de 180W"],
    condition: "Adquirido novo.",
    price: "R$ 550",
    folder: "dell_dockstation_wd19",
    images: ["IMG_2209.JPEG", "IMG_2210.JPEG", "IMG_2211.JPEG", "IMG_2212.JPEG", "IMG_2213.JPEG", "IMG_2214.JPEG", "IMG_2215.JPEG"]
  },
  {
    id: "airpods-max",
    name: "AirPods Max (USB-C)",
    description: "Fones de ouvido Over-ear premium da Apple com áudio de alta fidelidade e design icônico, agora com carregamento USB-C.",
    specs: [
      "Driver dinâmico projetado pela Apple",
      "Cancelamento Ativo de Ruído",
      "Modo Transparência",
      "Áudio Espacial com rastreamento dinâmico",
      "Até 20 horas de bateria"
    ],
    includedItems: ["Smart Case", "Cabo USB-C"],
    condition: "Adquirido novo (Cor: Midnight - a confirmar pelas fotos).",
    price: "R$ 3.700",
    folder: "airpods_max",
    images: ["IMG_2480.JPEG", "IMG_2481.JPEG", "IMG_2482.JPEG", "IMG_2483.JPEG", "IMG_2484.JPEG", "IMG_2485.JPEG", "IMG_2486.JPEG"]
  }
];
