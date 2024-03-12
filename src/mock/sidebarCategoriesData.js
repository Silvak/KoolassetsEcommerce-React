import { v4 as uuidv4 } from "uuid";

export const categories = [
  {
    id: uuidv4(),
    name: "Computación",
    subcategories: [],
  },
  {
    id: uuidv4(),
    name: "Telefonía",
    subcategories: ["Gama alta", "Gama media", "Gama baja"],
  },
  { id: uuidv4(), name: "Prendas", subcategories: [] },
  { id: uuidv4(), name: "Farmacia", subcategories: [] },
  { id: uuidv4(), name: "Herramientas", subcategories: [] },
  { id: uuidv4(), name: "Repuestos", subcategories: [] },
];

export const filters = [
  {
    name: "Condición",
    subcategories: ["Nuevo", "Casi nuevo", "Usado", "Reacondicionado"],
  },
  {
    name: "Lanzamiento",
    subcategories: [
      "Recién lanzado",
      "Últimos 30 días",
      "Últimos 60 días",
      "Últimos 90 días",
    ],
  },
  {
    name: "Disponibilidad",
    subcategories: [
      "Disponible",
      "No disponible por ahora",
      "No disponible en tu lugar de entrega",
    ],
  },
];

export const othersFilters = [
  {
    name: "Descuentos",
    subcategories: ["Todos los descuentos", "Descuentos de hoy"],
  },
  {
    name: "Características",
    subcategories: [
      "Ergonomía",
      "Infrarojo",
      "Batería alta duración",
      "Rugerizado",
    ],
  },
  {
    name: "Conectividad",
    subcategories: [
      "Bluetooth",
      "USB-C",
      "Thunderbolt",
      "Lightning",
      "USB A",
      "PS/2",
    ],
  },
];

export const checkboxFilters = {
  marcas: ["Marca 1", "Marca 2", "Marca 3", "Marca 4", "Marca 5", "Marca 6"],
};

export const priceRange = [
  "Debajo de los $10",
  "$10 a $25",
  "$25 a $50",
  "$50 a $75",
  "$75 a $100",
  "Personalizado",
];
