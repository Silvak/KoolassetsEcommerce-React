import { IconButton, Box, useMediaQuery } from "@mui/material";

//icons
import { BsCart, BsPerson, BsHeart } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const ICONS = [
  { id: 1, icon: <BsPerson />, to: "/profile" },
  { id: 2, icon: <BsCart />, to: "/cart" },
  { id: 3, icon: <BsHeart />, to: "/favorites" },
];

const NavIcons = ({ sx }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const fixIcons = isMobile ? ICONS.slice(1) : ICONS;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        ...sx,
      }}
    >
      {fixIcons.map((icon) => (
        <IconButton
          key={icon.id}
          sx={{
            flex: isMobile ? "1" : "0",
            borderRadius: "4px",
            fontSize: "18px",
            color: "#1B1AFF",
            outline: "1px solid #1B1AFF",
          }}
        >
          <NavLink
            to={icon.to}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {icon.icon}
          </NavLink>
        </IconButton>
      ))}
    </Box>
  );
};
export default NavIcons;
