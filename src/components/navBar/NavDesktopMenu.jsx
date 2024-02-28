import { Box, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { menuItems } from "../../utils/menuItems";
import { v4 as uuidv4 } from "uuid";
//components
import NavIcons from "@/components/navBar/NavIcons";
import SearchBar from "@/components/SearchBar/SearchBar";

const searchBarItem = {
  id: uuidv4(),
  isSearchBar: true,
};

const updatedMenuItems = [
  ...menuItems.slice(0, 4),
  searchBarItem,
  ...menuItems.slice(4),
];

const NavDesktopMenu = () => {
  return (
    <Box sx={{ display: "flex", gap: "30px" }}>
      {updatedMenuItems.map((item, index) => {
        return item.isSearchBar ? (
          <SearchBar key={index} />
        ) : (
          <ListItemButton
            key={item.id}
            sx={{
              fontSize: "12px",
              padding: "0px",
              ":hover": {
                background: "none",
                padding: "0px",
                opacity: "90%",
              },
            }}
            disableGutters
            disableTouchRipple
          >
            <NavLink
              to={item.link}
              style={{
                color: "inherit",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              {item.name}
            </NavLink>
          </ListItemButton>
        );
      })}

      <NavIcons sx={{ justifyContent: "center", gap: "8px" }} />
    </Box>
  );
};
export default NavDesktopMenu;
