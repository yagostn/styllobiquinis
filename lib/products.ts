import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Básico rosa bebê",
    description: "Tecido Beach Gloss com FPS 50\n- Acompanha bojo removível e saquinho\n- P 36/38 M 38/40 G 40/42\n- Alças e Calcinha reguláveis",
    price: 79.99,
    images: ["/images/rosabebe.webp"],
    category: "Biquinis",
    sizes: ["P", "M",],
    colors: ["#F4C2C2"],
    isNew: true,
    stock: 2,
  },
  {
    id: "2",
    name: "Cortininha fio c/argola - off white",
    description: "Tecido Beach Gloss com FPS 50\n- Acompanha bojo removível e saquinho\n- P 36/38 M 38/40 G 40/42\n- Alças e Calcinha reguláveis",
    price: 79.99,
    images: ["/images/offwhite.jpg"],
    category: "Biquinis",
    sizes: ["M", "G"],
    colors: ["#FAF9F6"],
    isNew: true,
    stock: 2,
  },
  {
    id: "3",
    name: "Básico empina bumbum - azul bebê ",
    description: "Tecido Beach Gloss com FPS 50\n- Acompanha bojo removível e saquinho\n- P 36/38 M 38/40 G 40/42\n- Alças e Calcinha reguláveis",
    price: 79.99,
    images: ["/images/azulbb.webp"],
    category: "Biquinis",
    sizes: ["M", "G"],
    colors: ["#89CFF0"],
    isNew: true,
    stock: 2,
  },
  {
    id: "4",
    name: "Camocim café com calcinha meio fio",
    description: "Tecido Beach Gloss com FPS 50\n- Acompanha bojo removível e saquinho\n- P 36/38 M 38/40 G 40/42",
    price: 84.99,
    images: ["/images/marrom.webp"],
    category: "Biquinis",
    sizes: ["P", "M"],
    colors: ["#392620"],
    isNew: true,
    stock: 2,
  },
  {
    id: "5",
    name: "Cortininha amarração - Amarelo",
    description: "Tecido Beach Gloss com FPS 50\n- Acompanha bojo removível e saquinho\n- P 36/38 M 38/40 G 40/42\n",
    price: 79.99,
    images: ["/images/amarelo.webp"],
    category: "Biquinis",
    sizes: ["P","G"],
    colors: ["#ffff00"],
    isNew: true,
    stock: 2,
  },
  {
    id: "6",
    name: "Básico fio azul cristal",
    description: "Tecido Beach Gloss com FPS 50\n- Acompanha bojo removível e saquinho\n- P 36/38 M 38/40 G 40/42\n- Alças e Calcinha reguláveis",
    price: 79.99,
    images: ["/images/azulcristal.webp"],
    category: "Biquinis",
    sizes: ["M"],
    colors: ["#c8e5eb"],
    isNew: true,
    stock: 1,
  },
];