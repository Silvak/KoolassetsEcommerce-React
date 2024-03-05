import React from "react";
import { Typography, Box, Button, Checkbox, Link } from "@mui/material";
import { paymentsMethodsData } from "../../mock/paymentsMethodsData";
import { useBoundStore } from "../../stores";
import { shallow } from "zustand/shallow";
import PaymentsMethodsModal from "@/components/PaymentsMethods/PaymentsMethodsModal";

export default function ContentPaymentsMethods() {
  const { setModal } = useBoundStore((state) => state, shallow);

  const handleCheckboxChange = (method) => (event) => {
    console.log(
      "Checkbox checked:",
      event.target.checked,
      "Nombre:",
      method.name
    );
  };

  const handleOpenModal = (method) => () => {
    console.log("Open modal for:", method.name);
  };

  return (
    <Box
      sx={{
        width: "100%",
        mt: 6,
        marginBottom: 6,
        textAlign: "left",
        paddingX: 2,
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="subtitle"
          sx={{
            color: "#000",
            fontSize: 32,
            textAlign: "left",
            fontWeight: 400,
            ml: { xs: "0", md: 1 },
          }}
        >
          Métodos de pago
        </Typography>
        <Box>
          <Typography
            variant="subtitle"
            sx={{
              color: "#000",
              fontSize: 18,
              textAlign: "left",
              fontWeight: 400,
              ml: { xs: "auto", md: 1 },
            }}
          >
            Métodos de pagos vinculados
          </Typography>
        </Box>
        {paymentsMethodsData.map((method) => (
          <Box
            key={method.id}
            sx={{
              borderBottom: "2px solid #DFDFDF",
              display: "flex",
              alignItems: "center",
              paddingY: 2,
            }}
          >
            <Checkbox
              color="primary"
              size="small"
              sx={{
                color: "#1B1AFF",
                "&.Mui-checked": {
                  color: "#1B1AFF",
                },
              }}
              onChange={handleCheckboxChange(method)}
            />

            <img
              src={method.logo}
              alt={method.name}
              style={{
                height: 26,
                width: "auto",
                marginRight: "auto",
                marginLeft: 10,
              }}
            />
            <Typography
              variant="h6"
              sx={{ color: "#1B1AFF", cursor: "pointer" }}
              onClick={handleOpenModal(method)}
            >
              Cambiar
            </Typography>
          </Box>
        ))}

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            gap: 2,
            marginTop: "25px",
          }}
        >
          <Button
            variant="outlined"
            style={{
              border: "1px solid #1B1AFF",
              fontWeight: 700,
              color: "#1B1AFF",
            }}
          >
            Borrar método de pago
          </Button>
          <Button
            variant="contained"
            style={{
              fontWeight: 700,
              backgroundColor: "#1b1aff",
            }}
            onClick={() =>
              setModal(
                true,
                <PaymentsMethodsModal onClose={() => setModal(false, null)} />
              )
            }
          >
            Añadir método de pago
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
