import { ListItemButton, MenuList } from "@mui/material";
import { NavLink } from "react-router-dom";
import NavIcons from "@/components/navBar/NavIcons";
import { useBoundStore } from "@/stores/index";
import { menuItems } from "../../utils/menuItems";

const NavMobileMenu = () => {
  const { Authenticated } = useBoundStore((state) => state);

  return (
    <MenuList sx={{ color: "text.primary", padding: "20px 10px" }}>
      {menuItems.map((item, index) => {
        if (index === 3) {
          return <hr style={{ opacity: "10%" }} />;
        }
        return (
          <ListItemButton key={item.id}>
            <NavLink
              to={item.to}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {item.name}
            </NavLink>
          </ListItemButton>
        );
      })}

      {Authenticated && (
        <>
          <hr style={{ opacity: "10%" }} />
          <NavIcons
            sx={{
              justifyContent: "flex-start",
              gap: "20px",
              paddingLeft: "20px",
            }}
          />
        </>
      )}
    </MenuList>
  );
};
export default NavMobileMenu;
