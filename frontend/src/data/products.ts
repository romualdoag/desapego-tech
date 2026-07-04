export interface Product {
  id: string;
  name: string;
  description: string;
  specs: string[];
  includedItems: string[];
  condition: string;
  price: string;
  originalPrice?: string;
  mercadoLivreUrl?: string;
  olxUrl?: string;
  folder: string;
  images: string[];
  sold?: boolean;
}

export const products: Product[] = [
  {
    id: "mac-mini-m4",
    name: "Mac Mini M4",
    description: "Computador desktop ultra-compacto e potente. Chip M4 com desempenho excepcional em um form factor minúsculo.",
    specs: [
      "Chip M4 (10 CPUs / 10 GPUs)",
      "Memória RAM: 16GB",
      "Armazenamento: 256GB Interno",
      "3 Portas Thunderbolt, Ethernet e HDMI"
    ],
    includedItems: ["Cabo de energia original"],
    condition: "Adquirido novo. Acabamento em alumínio sem detalhes ou riscos.",
    price: "R$ 5.800",
    mercadoLivreUrl: "https://www.mercadolivre.com.br/mac-mini-chip-m4-16gb-ram-256gb-ssd/up/MLBU4051963313",
    olxUrl: "https://es.olx.com.br/norte-do-espirito-santo/informatica/computadores-e-desktops/mac-mini-m4-1509985686",
    folder: "mac_mini_m4",
    images: ["IMG_2011.JPEG", "IMG_2012.JPEG", "IMG_2013.JPEG", "IMG_2014.JPEG"]
  },
  {
    id: "macbook-air-m4-24gb",
    name: "MacBook Air M4 (24GB RAM)",
    description: "Performance extrema em design ultra-portátil. Upgrade raro de 24GB de RAM, ideal para IA e fluxos profissionais. Bateria com saúde de 100% e apenas 14 ciclos.",
    specs: [
      "Chip M4 (Lançamento 2025)",
      "Memória RAM: 24GB (Upgrade)",
      "Armazenamento: 512GB SSD",
      "Tela Liquid Retina 13,6\" (2560 x 1664)",
      "Cor: Meia-Noite (Midnight)",
      "Saúde da Bateria: 100% (apenas 14 ciclos)",
      "Garantia Apple até 30/11/2026",
      "Teclado Americano (ANSI)"
    ],
    includedItems: ["Carregador original (Padrão US)", "Cabo USB-C original", "Capa TPU Rígida", "Bolsa de transporte"],
    condition: "Pouco usado, estado de novo. Sem marcas ou riscos. Não acompanha caixa.",
    price: "R$ 8.500",
    mercadoLivreUrl: "https://www.mercadolivre.com.br/macbook-air-m4--24gb-ram--512gb--136---midnight-blue/up/MLBU4051950283?pdp_filters=item_id:MLB4746710865",
    olxUrl: "https://es.olx.com.br/norte-do-espirito-santo/informatica/notebooks/macbook-air-m4-24gb-ram-1509985122",
    folder: "macbook_air_m4_24gb",
    images: ["001.JPEG", "002.JPEG", "003.JPEG", "004.JPEG", "005.jpg", "macbook_air_bateria.jpeg"],
    sold: true
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
    price: "R$ 4.600",
    mercadoLivreUrl: "https://www.mercadolivre.com.br/camera-olympus-omd-em10-mark-iv-prateada-com-lente-1442mm/up/MLBU4051954125",
    olxUrl: "https://es.olx.com.br/norte-do-espirito-santo/cameras-e-filmadoras/olympus-e-m10-mark-iv-1509986055",
    folder: "olympus_em10_mark_iv",
    images: ["IMG_2491.JPEG", "IMG_2492.JPEG", "IMG_2493.JPEG", "IMG_2494.JPEG", "IMG_2495.JPEG", "IMG_2496.JPEG"]
  },
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    description: "Smartphone Apple potente com excelente conjunto de câmeras. Modelo Americano (exclusivo eSIM).",
    specs: [
      "Capacidade: 256GB",
      "Saúde da Bateria: 81% (423 ciclos)",
      "Cor: Titânio Azul",
      "Modelo: Americano (MU663LL/A - Apenas eSIM)",
      "Tela Super Retina XDR de 6.7\"",
      "Fabricado: dezembro de 2023 / Primeiro uso: abril de 2024"
    ],
    includedItems: ["Caixa original", "Cabo USB-C original"],
    condition: "Adquirido novo, único dono. Corpo e tela em estado impecável.",
    price: "R$ 4.900",
    folder: "iphone_15_pro_max_256",
    images: ["IMG_0235.JPEG", "IMG_9928.JPEG", "IMG_9929.JPEG", "IMG_9931.JPEG", "IMG_9932.JPEG"],
    sold: true
  },
  {
    id: "airpods-max",
    name: "AirPods Max (USB-C)",
    description: "Fones de ouvido Over-ear premium da Apple com áudio de alta fidelidade. Cor Meia-Noite (Midnight). Disponíveis 2 unidades idênticas.",
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
    price: "R$ 1.995",
    originalPrice: "R$ 2.100",
    mercadoLivreUrl: "https://www.mercadolivre.com.br/apple-airpods-max--meianoite/up/MLBU4052042469?pdp_filters=item_id:MLB6917158702",
    olxUrl: "https://es.olx.com.br/norte-do-espirito-santo/audio/fones-de-ouvido/airpods-max-usb-c-1509986544",
    folder: "airpods_max",
    images: ["IMG_2480.JPEG", "IMG_2481.JPEG", "IMG_2482.JPEG", "IMG_2483.JPEG", "IMG_2484.JPEG", "IMG_2485.JPEG", "IMG_2486.JPEG"]
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
    price: "R$ 855",
    originalPrice: "R$ 900",
    folder: "airpods_pro_2",
    images: ["IMG_0237.JPEG", "IMG_0236.JPEG", "IMG_0238.PNG", "IMG_0239.JPEG", "IMG_2502.JPEG", "IMG_2503.JPEG", "IMG_2504.JPEG", "IMG_2505.JPEG", "IMG_2506.JPEG", "IMG_2507.JPEG"],
    sold: true
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
    mercadoLivreUrl: "https://www.mercadolivre.com.br/dock-station-dell-c-fonte-wd19--180w/up/MLBU4066519104",
    olxUrl: "https://es.olx.com.br/norte-do-espirito-santo/informatica/perifericos-de-computador/dell-dock-station-wd19-1509986889",
    folder: "dell_dockstation_wd19",
    images: ["IMG_2209.JPEG", "IMG_2210.JPEG", "IMG_2211.JPEG", "IMG_2212.JPEG", "IMG_2213.JPEG", "IMG_2214.JPEG", "IMG_2215.JPEG"]
  },
  {
    id: "google-chromecast",
    name: "Google Chromecast HD",
    description: "Dispositivo de streaming para TV com Google TV integrado. Modelo Snow (Branco) com resolução Full HD 1080p.",
    specs: [
      "Suporte a Full HD 1080p / HDR",
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
    images: ["IMG_0243.JPEG", "IMG_0240.JPEG", "IMG_0241.JPEG", "IMG_0242.JPEG", "IMG_0244.JPEG"],
    sold: true
  }
];
