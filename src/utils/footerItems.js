import { v4 as uuidv4 } from "uuid";

export const footerItems = [
  {
    id: uuidv4(),
    title: "Descuento",
    link: "/suscribe",
    info: [
      {
        subinfo: "Suscríbete y obtén un descuento del 10% en tu primera compra",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Soporte",
    link: "/support",
    info: [
      { subinfo: "690 Holcomb Bridge Rd Roswell, Georgia 30076" },
      { subinfo: "rehiyaw525@lendfash.com" },
      { subinfo: "(770) 299-1591" },
    ],
  },
  {
    id: uuidv4(),
    title: "Acerca de",
    link: "/about",
    info: [
      { subinfo: "Política de Privacidad", link: "/privacy" },
      { subinfo: "Términos de uso y servicio", link: "/terms-and-conditions" },
      { subinfo: " Preguntas frecuentes", link: "/questions" },
      { subinfo: "Contacto", link: "/contacts" },
    ],
  },
  {
    id: uuidv4(),
    title: "Cuenta",
    link: "/support",
    info: [
      { subinfo: "Mi cuenta", link: "/profile" },
      { subinfo: "Registro", link: "/sign-up" },
      { subinfo: "Inicio de Sesión", link: "/sign-in" },
      { subinfo: "Carrito", link: "/cart" },
      { subinfo: "Menu Principal", link: "/menu" },
    ],
  },
];

export const dividerFooter = [
    {
        title: "Company Logo",
    },
    {
        info: "Todos los Derechos Reservados",
    }
];