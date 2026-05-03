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
      "Cor: Titânio (Natural/Black/White/Blue - a confirmar pelas fotos)"
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
    description: "Câmera Mirrorless compacta e versátil.",
    specs: [
      "Sensor Micro Four Thirds",
      "Estabilização no corpo"
    ],
    includedItems: ["Alça", "Bateria", "Carregador"],
    condition: "Adquirido novo. OBS: Não acompanha cartão de memória.",
    price: "A definir",
    folder: "olympus_em10_mark_iv",
    images: ["IMG_2491.JPEG", "IMG_2492.JPEG", "IMG_2493.JPEG", "IMG_2494.JPEG", "IMG_2495.JPEG", "IMG_2496.JPEG"]
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2ª Geração)",
    description: "Fones de ouvido com cancelamento de ruído ativo.",
    specs: [
      "Áudio Espacial",
      "Resistência a suor e água"
    ],
    includedItems: ["Caixa original", "Cabo (nunca usado)"],
    condition: "Adquirido novo.",
    price: "A definir",
    folder: "airpods_pro_2",
    images: ["IMG_0236.JPEG", "IMG_0237.JPEG", "IMG_0238.PNG", "IMG_0239.JPEG", "IMG_2502.JPEG", "IMG_2503.JPEG", "IMG_2504.JPEG", "IMG_2505.JPEG", "IMG_2506.JPEG", "IMG_2507.JPEG"]
  },
  {
    id: "google-chromecast",
    name: "Google Chromecast",
    description: "Dispositivo de streaming para TV.",
    specs: [
      "Suporte a 4K HDR",
      "Google TV"
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
    images: ["IMG_0240.JPEG", "IMG_0241.JPEG", "IMG_0242.JPEG", "IMG_0243.JPEG", "IMG_0244.JPEG"]
  },
  {
    id: "dell-dockstation-wd19",
    name: "Dell Dock Station WD19",
    description: "Estação de acoplamento para notebooks.",
    specs: [
      "Conexão USB-C",
      "Suporte a múltiplos monitores"
    ],
    includedItems: ["Fonte de 180W"],
    condition: "Adquirido novo.",
    price: "A definir",
    folder: "dell_dockstation_wd19",
    images: ["IMG_2209.JPEG", "IMG_2210.JPEG", "IMG_2211.JPEG", "IMG_2212.JPEG", "IMG_2213.JPEG", "IMG_2214.JPEG", "IMG_2215.JPEG"]
  },
  {
    id: "airpods-max",
    name: "AirPods Max",
    description: "Fones de ouvido Over-ear premium da Apple.",
    specs: [
      "Cancelamento de Ruído Ativo",
      "Modo Transparência"
    ],
    includedItems: ["Smart Case", "Cabo Lightning para USB-C"],
    condition: "Adquirido novo.",
    price: "A definir",
    folder: "airpods_max",
    images: ["IMG_2480.JPEG", "IMG_2481.JPEG", "IMG_2482.JPEG", "IMG_2483.JPEG", "IMG_2484.JPEG", "IMG_2485.JPEG", "IMG_2486.JPEG"]
  }
];
