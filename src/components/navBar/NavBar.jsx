import { AppBar, useMediaQuery } from "@mui/material";
//components
import { useEffect } from "react";
import NavMobile from "@/components/navBar/NavMobile";
import NavDesktop from "@/components/navBar/NavDesktop";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
