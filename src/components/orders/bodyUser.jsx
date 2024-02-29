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
          marginLeft: { xs: 0, sm: 20, md: 20, lg: 20, xl: 20 },
          marginTop: isMobile ? 2 : 3,
          minWidth: "60vw",
          maxWidth: "75%",
          height: "97vh",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#000", fontSize: isMobile ? 20 : 32, marginTop: isMobile ? 35 : "", marginLeft: isMobile ? 15 : "" }}>Estado actual del envío</p>
        </div>
        <InvoiceBox />
        {/* <OrderDetail user={user} /> */}
      </Box>
    </div>
  );
}

export default OrderBodyUser;
