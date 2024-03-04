import { Box, Button, Typography } from "@mui/material";

import CardData from "@/components/PaymentsMethods/CardData";
import UserData from "@/components/PaymentsMethods/UserData";

import { BsXLg } from "react-icons/bs";

const PaymentsMethodsModal = ({ onClose }) => {
  return (
    <Box>
      {/* header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "10px",
          m: 2,
        }}
      >
        <h3 style={{ color: "#000000", fontSize: "clamp(18px,2vw,28px)" }}>
          Añadir un método de pago
        </h3>
        <Button onClick={onClose}>
          <BsXLg size={30} />
        </Button>
      </Box>
      <Box sx={{ padding: "0 20px" }}>
        {/* card data */}
        <CardData />
        {/* user data */}
        <UserData />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "10px",
            mt: 4,
          }}
        >
          <Button variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="contained">Guardar</Button>
        </Box>
      </Box>
    </Box>
  );
};
export default PaymentsMethodsModal;
