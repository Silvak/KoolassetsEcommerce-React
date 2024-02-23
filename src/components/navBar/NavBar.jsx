import { AppBar, useMediaQuery } from "@mui/material";
//components

import NavMobile from "@/components/navBar/NavMobile";
import NavDesktop from "@/components/navBar/NavDesktop";

const NavBar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <AppBar
      sx={{
        background: "none",
        boxShadow: "none",
        height: "130px",
        color: "gray",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      position="static"
    >
      {isMobile ? <NavMobile /> : <NavDesktop />}
    </AppBar>
  );
};
export default NavBar;
