import { AppBar, Box, useMediaQuery } from "@mui/material";
//components
import NavMobile from "@/components/navBar/NavMobile";
import NavDesktop from "@/components/navBar/NavDesktop";

const NavBar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <Box component="header" sx={{ background: "inherit" }}>
      <AppBar
        sx={{
          background: "none",
          boxShadow: "none",
          padding: "20px 0",
          paddingInline: "25px",
          color: "gray",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          // maxWidth: "1400px",
          // marginInline: "auto",
        }}
        position="static"
      >
        {isMobile ? <NavMobile /> : <NavDesktop />}
      </AppBar>
    </Box>
  );
};
export default NavBar;
