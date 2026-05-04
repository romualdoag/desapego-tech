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
    description: "Smartphone Apple potente com excelente conjunto de câmeras. Modelo Americano (exclusivo eSIM).",
    specs: [
      "Capacidade: 256GB",
      "Saúde da Bateria: 81%",
      "Cor: Titânio Azul",
      "Modelo: Americano (MU663LL/A - Apenas eSIM)",
      "Tela Super Retina XDR de 6.7\""
    ],
    includedItems: ["Caixa original", "Cabo USB-C original"],
    condition: "Adquirido novo, único dono. Corpo e tela em estado impecável.",
    price: "R$ 4.900",
    folder: "iphone_15_pro_max_256",
    images: ["IMG_0235.JPEG", "IMG_9928.JPEG", "IMG_9929.JPEG", "IMG_9931.JPEG", "IMG_9932.JPEG"]
  },
  {
    id: "mac-mini-m4",
    name: "Mac Mini M4",
    description: "Computador desktop ultra-compacto e potente. Disponível em duas configurações: apenas o Mac Mini ou kit completo com Dock Ugreen e expansão de SSD.",
    specs: [
      "Chip M4 (10 CPUs / 10 GPUs)",
      "Memória RAM: 16GB",
      "Armazenamento: 512GB Interno",
      "Opcional: +512GB no Dock Ugreen (Total 1TB)",
      "3 Portas Thunderbolt, Ethernet e HDMI"
    ],
    includedItems: ["Cabo de energia original", "Opcional: Dock Ugreen com SSD 512GB"],
    condition: "Adquirido novo. Acabamento em alumínio sem detalhes ou riscos.",
    price: "R$ 8.200 (ou R$ 9.000 com Dock)",
    folder: "mac_mini_m4",
    images: ["IMG_2011.JPEG", "IMG_2012.JPEG", "IMG_2013.JPEG", "IMG_2014.JPEG", "IMG_2015.JPEG", "IMG_2016.JPEG", "IMG_2017.JPEG", "IMG_2018.JPEG"]
  },
  {
    id: "olympus-em10-mark-iv",
    name: "Olympus E-M10 Mark IV",
    description: "Câmera Mirrorless compacta e leve, ideal para viagens e fotografia do dia a dia. Design retrô clássico em prata e preto.",
    specs: [
      "Sensor Live MOS de 20MP",
      "Estabilização de imagem de 5 eixos no corpo",
      "Lente M.Zuiko 14-42mm f/3.5-5.6 EZ (Electronic Zoom)",
      "Gravação de vídeo em 4K",
      "Tela touch articulável para selfies"
    ],
    includedItems: ["Lente Pancake 14-42mm EZ", "Alça", "Bateria", "Carregador"],
    condition: "Adquirido novo. Corpo e dials preservados. OBS: Não acompanha cartão de memória.",
    price: "R$ 5.200",
    folder: "olympus_em10_mark_iv",
    images: ["IMG_2491.JPEG", "IMG_2492.JPEG", "IMG_2493.JPEG", "IMG_2494.JPEG", "IMG_2495.JPEG", "IMG_2496.JPEG"]
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2ª Geração) Lightning",
    description: "Fones de ouvido premium com cancelamento de ruído ativo avançado e áudio espacial personalizado.",
    specs: [
      "Chip H2",
      "Cancelamento Ativo de Ruído (ANC) 2x mais potente",
      "Modo Transparência Adaptável",
      "Áudio Espacial com rastreamento dinâmico",
      "Estojo MagSafe (Lightning) com alto-falante para busca"
    ],
    includedItems: ["Caixa original", "Cabo Lightning (nunca usado)"],
    condition: "Adquirido novo. Em excelente estado de conservação.",
    price: "R$ 900",
    folder: "airpods_pro_2",
    images: ["IMG_0237.JPEG", "IMG_0236.JPEG", "IMG_0238.PNG", "IMG_0239.JPEG", "IMG_2502.JPEG", "IMG_2503.JPEG", "IMG_2504.JPEG", "IMG_2505.JPEG", "IMG_2506.JPEG", "IMG_2507.JPEG"]
  },
  {
    id: "google-chromecast",
    name: "Google Chromecast 4K",
    description: "Dispositivo de streaming para TV com Google TV integrado. Modelo Snow (Branco).",
    specs: [
      "Suporte a 4K HDR",
      "Google TV com controle remoto por voz",
      "Controle com atalhos para YouTube e Netflix"
    ],
    includedItems: [
      "Caixa original",
      "Cabo original",
      "Pilha OEM para controle",
      "Adaptador de energia US (nunca usado)"
    ],
    condition: "Adquirido novo. Completo e funcionando perfeitamente.",
    price: "R$ 450",
    folder: "google_chromecast",
    images: ["IMG_0243.JPEG", "IMG_0240.JPEG", "IMG_0241.JPEG", "IMG_0242.JPEG", "IMG_0244.JPEG"]
  },
  {
    id: "dell-dockstation-wd19",
    name: "Dell Dock Station WD19",
    description: "Estação de acoplamento USB-C versátil projetada para aumentar a produtividade. Service Tag disponível para consulta.",
    specs: [
      "Conexão USB-C",
      "Suporte para até dois monitores Full HD ou um monitor 4K",
      "Service Tag: G9D5N03",
      "Múltiplas portas USB e Gigabit Ethernet"
    ],
    includedItems: ["Fonte original Dell de 180W"],
    condition: "Adquirido novo. Estrutura preservada e funcional.",
    price: "R$ 500",
    folder: "dell_dockstation_wd19",
    images: ["IMG_2209.JPEG", "IMG_2210.JPEG", "IMG_2211.JPEG", "IMG_2212.JPEG", "IMG_2213.JPEG", "IMG_2214.JPEG", "IMG_2215.JPEG"]
  },
  {
    id: "airpods-max",
    name: "AirPods Max (USB-C)",
    description: "Fones de ouvido Over-ear premium da Apple com áudio de alta fidelidade. Cor Meia-Noite (Midnight).",
    specs: [
      "Driver dinâmico projetado pela Apple",
      "Cancelamento Ativo de Ruído",
      "Cor: Meia-Noite (Midnight)",
      "Modo Transparência",
      "Áudio Espacial com rastreamento dinâmico",
      "Até 20 horas de bateria"
    ],
    includedItems: ["Caixa", "Smart Case", "Cabo USB-C original"],
    condition: "Adquirido novo. Malha do arco e almofadas em excelente estado.",
    price: "R$ 2.800",
    folder: "airpods_max",
    images: ["IMG_2480.JPEG", "IMG_2481.JPEG", "IMG_2482.JPEG", "IMG_2483.JPEG", "IMG_2484.JPEG", "IMG_2485.JPEG", "IMG_2486.JPEG"]
  },
  {
    id: "macbook-air-m4-24gb",
    name: "MacBook Air M4 (24GB RAM)",
    description: "Performance extrema em design ultra-portátil. Upgrade raro de 24GB de RAM, ideal para IA e fluxos profissionais.",
    specs: [
      "Chip M4 (Lançamento 2025)",
      "Memória RAM: 24GB (Upgrade)",
      "Armazenamento: 512GB SSD",
      "Cor: Meia-Noite (Midnight)",
      "Garantia Apple até 30/11/2026",
      "Teclado Americano (ANSI)"
    ],
    includedItems: ["Carregador original (Padrão US)", "Cabo USB-C original", "Capa TPU Rígida", "Bolsa de transporte"],
    condition: "Pouco usado, estado de novo. Sem marcas ou riscos. Não acompanha caixa.",
    price: "R$ 8.400",
    folder: "macbook_air_m4_24gb",
    images: ["001.JPEG", "002.JPEG", "003.JPEG", "004.JPEG", "005.jpg"]
  }
];
