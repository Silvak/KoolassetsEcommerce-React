import { AppBar, useMediaQuery } from "@mui/material";
//components

import NavMobile from "@/components/navBar/NavMobile";
import NavDesktop from "@/components/navBar/NavDesktop";

const NavBar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <AppBar
      sx={{
        background: "none",
        boxShadow: "none",
        padding: "20px 0",
        color: "gray",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
      position="static"
    >
      {isMobile ? <NavMobile /> : <NavDesktop />}
    </AppBar>
  );
};
export default NavBar;
