import React, { useState, useEffect } from "react";
import {
  IconButton,
  List,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  UserIcon,
  PaymentMetIcon,
  SessionCloseIcon,
  ActualPurchIcon,
  ReturnPurchIcon,
  CancelPurchIcon,
} from "./SVGIcon";
import "./styles.css";
import { useBoundStore } from "../../stores/index";
import ConfirmationContent from "../modal/confirmationContent";
import { useNavigate, useLocation } from "react-router-dom";

const SidebarProfile = ({ user }) => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const [open, setOpen] = useState(!isMobile);
  const [selectedOption, setSelectedOption] = useState(null);
  const { setModal } = useBoundStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/profile") {
      setSelectedOption("profile");
    } else if (pathname === "/payments-methods") {
      setSelectedOption("payment");
    } else if (pathname === "/orders") {
      setSelectedOption("actual");
    } else if (pathname === "/returns") {
      setSelectedOption("returns");
    } else if (pathname === "/cancellations") {
      setSelectedOption("cancellations");
    }
  }, [location]);

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  const handleItemClick = (option) => {
    setSelectedOption(option);
    option === "logout" &&
      setModal(
        true,
        <ConfirmationContent onClose={() => setModal(false, null)} />
      );
    option === "payment" && navigate("/payments-methods");
    option === "profile" && navigate("/profile");
    option === "actual" && navigate("/orders");
    option === "returns" && navigate("/returns");
    option === "cancellations" && navigate("/cancellations");
  };

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
      <IconComponent color={selectedOption === option ? "blue" : "gray"} />
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
          height: "100vh",
          width: 250,
          zIndex: 1000,
          transition: "left 0.3s ease-in-out",
          paddingLeft: 1,
          paddingBlock: 2,
          backgroundColor: isMobile ? "#fff" : "tranparent",
        }}
      >
        <List sx={{ color: "#000", width: "max-content" }}>
          <Typography
            variant="h6"
            style={{ fontSize: "30px", marginBottom: 20 }}
          >
            Hola, {user.name.split(" ")[0]}
          </Typography>
          <Typography
            variant="h6"
            style={{ fontSize: "18px", marginBottom: 20 }}
          >
            Administrar mi cuenta
          </Typography>
          <Box sx={{ ml: 4, mb: 8, mt: 2 }}>
            {renderListItem(UserIcon, "Mi perfil", "profile")}
            {renderListItem(PaymentMetIcon, "Método de pago", "payment")}
            {renderListItem(SessionCloseIcon, "Cerrar sesión", "logout")}
          </Box>

          <Typography
            variant="h6"
            style={{ fontSize: "18px", marginBottom: 20 }}
          >
            Mis órdenes
          </Typography>
          <Box sx={{ ml: 4, mt: 2 }}>
            {renderListItem(ActualPurchIcon, "Estado actual", "actual")}
            {renderListItem(ReturnPurchIcon, "Devoluciones", "returns")}
            {renderListItem(CancelPurchIcon, "Cancelaciones", "cancellations")}
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

export default SidebarProfile;
