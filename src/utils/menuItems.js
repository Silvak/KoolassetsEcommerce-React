import { v4 as uuidv4 } from "uuid";
import {
  BiUser,
  BiCart,
  BiLogIn,
  BiCalendarExclamation,
  BiCalendarX,
  BiCalendarPlus,
  BiShoppingBag,
  BiGroup,
  BiNavigation,
  BiMessageRounded,
  BiReceipt,
  BiBarChartSquare,
} from "react-icons/bi";

export const MENU_ITEMS = [
  //ADMINISTRAR MI CUENTA
  {
    id: uuidv4(),
    title: "Administrar mi cuenta",
    links: [
      {
        id: uuidv4(),
        label: "Mi perfil",
        to: "/profile",
        icon: BiUser,
      },
      {
        id: uuidv4(),
        label: "Métodos de pago",
        to: "/payments-methods",
        icon: BiCart,
      },
      {
        id: uuidv4(),
        label: "Cerrar sesión",
        to: "/",
        icon: BiLogIn,
      },
    ],
  },
  // MIS ORDENES
  {
    id: uuidv4(),
    title: "Mis órdenes",
    links: [
      {
        id: uuidv4(),
        label: "Estado actual",
        to: "/orders",
        icon: BiCalendarPlus,
      },
      {
        id: uuidv4(),
        label: "Devoluciones",
        to: "/returns",
        icon: BiCalendarExclamation,
      },
      {
        id: uuidv4(),
        label: "Cancelaciones",
        to: "/cancellations",
        icon: BiCalendarX,
      },
    ],
  },
  //PRINCIPAL
  {
    id: uuidv4(),
    title: "Principal",
    links: [
      {
        id: uuidv4(),
        label: "Categorías",
        to: "/categories",
        icon: BiShoppingBag,
      },
      {
        id: uuidv4(),
        label: "Acerca de nosotros",
        to: "/about",
        icon: BiGroup,
      },
      {
        id: uuidv4(),
        label: "Contáctanos",
        to: "/contact",
        icon: BiNavigation,
      },
      {
        id: uuidv4(),
        label: "Soporte",
        to: "/support",
        icon: BiMessageRounded,
      },
    ],
  },
];

export const MENU_ITEMS_ADMIN = [
  {
    id: uuidv4(),
    title: "Administración",
    links: [
      {
        id: uuidv4(),
        label: "Resumen",
        to: "/dashboard",
        icon: BiBarChartSquare,
      },
      {
        id: uuidv4(),
        label: "Productos",
        to: "/product-admin",
        icon: BiShoppingBag,
      },
      {
        id: uuidv4(),
        label: "Órdenes",
        to: "/product-orders",
        icon: BiReceipt,
      },
    ],
  },
];

export const MENU_ITEMS_DESKTOP = [
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
