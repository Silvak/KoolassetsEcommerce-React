import {
  Box,
  IconButton,
  List,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { BsClipboardData, BsBagDash, BsBasket2 } from "react-icons/bs";

import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBoundStore } from "@/stores";

const listItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: 16,
  color: "gray",
  cursor: "pointer",
  transition: "color 0.3s, background-color 0.3s",
  padding: 8,
  borderRadius: 4,
};

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width:1000px)");

  const [open, setOpen] = useState(!isMobile);
  const [selectedOption, setSelectedOption] = useState(null);
  const { setModal } = useBoundStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/dashboard") {
      setSelectedOption("resumen");
    }
  }, [location]);

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  const handleItemClick = (option) => {
    setSelectedOption(option);
    option === "payment" && navigate("/payments-methods");
    option === "profile" && navigate("/profile");
    option === "actual" && navigate("/orders");
    option === "returns" && navigate("/returns");
    option === "cancellations" && navigate("/cancel");
  };

  const listItemHoverStyle = {
    ...listItemStyle,
    backgroundColor: "#dedede",
  };

  const renderListItem = (IconComponent, text, option) => (
    <div
      style={
        selectedOption === option
          ? { ...listItemHoverStyle, color: "blue" }
          : listItemStyle
      }
      onClick={() => handleItemClick(option)}
      className="divSelected"
    >
      <IconComponent
        color={selectedOption === option ? "blue" : "gray"}
        size={20}
      />
      <Typography
        variant="h6"
        style={{
          fontSize: "14px",
          color: selectedOption === option ? "blue" : "gray",
          marginLeft: 8,
        }}
      >
        {text}
      </Typography>
    </div>
  );

  return (
    <Box style={{ position: "relative" }}>
      {isMobile && (
        <IconButton
          onClick={handleToggleSidebar}
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            backgroundColor: "transparent",
            padding: "0px",
            zIndex: 999,
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Box
        sx={{
          position: isMobile ? "fixed" : "relative",
          top: !isMobile ? 30 : 0,
          left: isMobile ? (open ? 0 : "-100%") : 0,
          // left: isMobile ? (open ? 0 : "-100%") : 0,
          height: "100vh",
          width: "min(60vw,250px)",
          zIndex: 1000,
          transition: "left 0.3s ease-in-out",
          padding: "10px",
          backgroundColor: isMobile ? "#fff" : "tranparent",
        }}
      >
        <List sx={{ color: "#000", width: "100%" }}>
          <Typography
            variant="h6"
            style={{ fontSize: "18px", marginBottom: 20 }}
          >
            Menú principal
          </Typography>
          <Box sx={{ ml: 4, mb: 8, mt: 2 }}>
            {renderListItem(BsClipboardData, "Resumen", "resumen")}
          </Box>

          <Typography
            variant="h6"
            style={{ fontSize: "18px", marginBottom: 20 }}
          >
            Administración
          </Typography>
          <Box sx={{ ml: 4, mt: 2 }}>
            {renderListItem(BsBagDash, "Productos", "productos")}
            {renderListItem(BsBasket2, "Ordenes", "ordenes")}
          </Box>
        </List>
      </Box>

      {isMobile && open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={() => setOpen(false)}
        />
      )}
    </Box>
  );
};
export default Sidebar;
