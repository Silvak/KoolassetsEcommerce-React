import { Box } from "@mui/material";
//components
import Logo from "@/components/Logo/Logo";
import NavDesktopMenu from "@/components/navBar/NavDesktopMenu";

const NavDesktop = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Logo />
      <NavDesktopMenu />
    </Box>
  );
};
export default NavDesktop;
