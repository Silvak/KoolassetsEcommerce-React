import { Box, Grid, Typography } from "@mui/material";

import CustomInput from "@/components/Input/CustomInput";
import MethodsIcons from "@/components/PaymentsMethods/MethodsIcons";

//icons
import visaIcon from "@/assets/Img/png/logoVisa.png";
import googlePayIcon from "@/assets/Img/png/google-pay.png";
import paypalIcon from "@/assets/Img/png/paypal.png";
import paypassIcon from "@/assets/Img/png/paypass.png";

const methodsData = [
  { id: 1, label: "Visa", value: "visa" },
  { id: 2, label: "Paypal", value: "paypal" },
  { id: 3, label: "Gpay", value: "gpay" },
  { id: 4, label: "Paypass", value: "paypass" },
];

const methodsIcons = [
  {
    id: 1,
    title: "Google pay",
    iconUrl: googlePayIcon,
  },
  {
    id: 2,
    title: "Visa",
    iconUrl: visaIcon,
  },
  {
    id: 3,
    title: "Paypal",
    iconUrl: paypalIcon,
  },
  {
    id: 4,
    title: "Paypass",
    iconUrl: paypassIcon,
  },
];

const CustomH6 = ({ text }) => {
  return (
    <h6
      style={{
        color: "#000",
        fontWeight: "medium",
        fontSize: "clamp(14px,2vw,18px)",
      }}
    >
      {text}
    </h6>
  );
};

const CardData = () => {
  return (
    <Box sx={{ background: "#ECECEC", padding: "15px", borderRadius: "6px" }}>
      <Box sx={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
        <input type="checkbox" defaultChecked />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              color: "#000",
              fontWeight: "medium",
              fontSize: "clamp(16px,2vw,28px)",
            }}
          >
            Tarjeta de crédito
          </h3>
          <span
            style={{ fontSize: "clamp(12px,2vw,14px)", fontWeight: "normal" }}
          >
            (Aceptamos la mayoría de tarjetas de crédito)
          </span>
        </Box>
      </Box>
      {/* inputs */}
      <h3
        style={{
          color: "#000",
          fontWeight: "medium",
          fontSize: "clamp(14px,2vw,18px)",
          margin: "20px 0",
        }}
      >
        Seleccionar métodos de pago
      </h3>

      <Grid
        container
        spacing={2}
        sx={{
          "& > .MuiGrid-item": {
            padding: "10px",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          },
        }}
      >
        {/* select */}
        <Grid item xs={12} md={6}>
          <select
            style={{
              width: "100%",
              border: "none",
              background: "#FFF",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
            {methodsData.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Grid>

        {/* icons */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", gap: "10px", alignContent: "center" }}>
            {methodsIcons.map((icon) => (
              <MethodsIcons key={icon.id} {...icon} />
            ))}
          </Box>
        </Grid>
        {/* number card */}
        <Grid item xs={12} md={6}>
          <CustomH6 text="Número de tarjeta" />
          <CustomInput type="text" placeholder="0000 0000 0000 0000" />
        </Grid>
        {/* card expiration */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <CustomH6 text="Fecha de expiración" />
            <CustomH6 text="CVV" />
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <CustomInput type="text" placeholder="DD" width="50px" />
            <CustomInput type="text" placeholder="MM" width="50px" />
            <CustomInput type="text" placeholder="AA" width="50px" />
            <CustomInput type="text" placeholder="999" width="50px" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CardData;
