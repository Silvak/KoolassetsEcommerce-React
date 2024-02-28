import { v4 as uuidv4 } from "uuid";

export const menuItems = [
  {
    id: uuidv4(),
    name: "Categorías",
    to: "/categories",
  },
  {
    id: uuidv4(),
    name: "Acerca de nosotros",
    to: "/about",
  },
  {
    id: uuidv4(),
    name: "Contáctanos",
    to: "/contact",
  },
  {
    id: uuidv4(),
    name: "Soporte",
    to: "/support",
  },
  {
    id: uuidv4(),
    name: "Iniciar sesión",
    to: "/sign-in",
  },
  {
    id: uuidv4(),
    name: "Registrarse",
    to: "/sign-up",
  },
];
