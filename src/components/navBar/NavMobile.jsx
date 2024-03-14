import { Button, Drawer, Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

import Logo from "@/components/Logo/Logo";
import NavMobileMenu from "@/components/navBar/NavMobileMenu";
import SearchBar from "@/components/SearchBar/SearchBar";

import { BsTextRight } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(max-width: 350px)");

  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        gap: "20px",
      }}
    >
      <Logo />

      {!matches && (
        <SearchBar
          sx={{
            width: "100%",
            maxWidth: "450px",
            marginInline: "auto",
          }}
        />
      )}

      <Button
        variant="outlined"
        onClick={() => setOpen(!open)}
        sx={{
          color: "text.primary",
          borderColor: "text.primary",
          minWidth: "50px",
          padding: "5px",
          ":hover": { color: "#1B1AFF" },
        }}
      >
        <BsTextRight size="18" />
      </Button>

      {/* menu */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": { backgroundColor: "background.default" },
        }}
      >
        <NavMobileMenu />
      </Drawer>
    </Box>
  );
};
export default NavMobile;
