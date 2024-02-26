import { Button, Drawer, Box } from "@mui/material";
import { useState } from "react";

import Logo from "@/components/Logo/Logo";
import NavMobileMenu from "@/components/navBar/NavMobileMenu";
import SearchBar from "@/components/SearchBar/SearchBar";

import { BsTextRight } from "react-icons/bs";

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
        gap: "10px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Logo />
      </Box>
      <Button
        variant="outlined"
        onClick={() => setOpen(!open)}
        sx={{
          color: "text.primary",
          borderColor: "text.primary",
          width: "max-content",
          marginLeft: "auto",
          padding: "5px",
          ":hover": { color: "#1B1AFF" },
        }}
      >
        <BsTextRight size="18" />
      </Button>
      <SearchBar sx={{ width: "100%", marginTop: "15px" }} />
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
