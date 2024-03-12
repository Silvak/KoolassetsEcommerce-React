import React from "react";
import { Box, useMediaQuery } from "@mui/material/";
import OrderDetail from "./ordersDetail";
import InvoiceBox from "./invoiceBox";

function OrderBodyUser({ user }) {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div style={{ display: "flex", text: "center", alignItems: "flex-start"}}>
      <Box
        sx={{
          marginTop: isMobile ? 2 : 3,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: 12
          }}
        >
          <p style={{ color: "#000", fontSize: isMobile ? 20 : 32, marginTop: 30 }}>Estado actual del envío</p>
        </div>
        <InvoiceBox />
      </Box>
    </div>
  );
}

export default OrderBodyUser;
