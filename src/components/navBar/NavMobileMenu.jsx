import { ListItemButton, MenuList } from "@mui/material";

import { menuItems } from "@/utils/menuItems";
import { NavLink } from "react-router-dom";

import NavIcons from "@/components/navBar/NavIcons";

const NavMobileMenu = () => {
  return (
    <MenuList sx={{ color: "text.primary", padding: "20px 10px" }}>
      {menuItems.map((item) => (
        <ListItemButton key={item.id}>
          <NavLink
            to={item.to}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {item.name}
          </NavLink>
        </ListItemButton>
      ))}
      <hr style={{ opacity: "20%" }} />
      <ListItemButton>
        <NavLink
          to="/login"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Iniciar sesión
        </NavLink>
      </ListItemButton>
      <ListItemButton>
        <NavLink
          to="/register"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Registrarse
        </NavLink>
      </ListItemButton>
      <hr style={{ opacity: "20%" }} />
      <NavIcons />
    </MenuList>
  );
};
export default NavMobileMenu;
