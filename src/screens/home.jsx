import { Box } from "@mui/material";

import Hero from "@/components/Hero/Hero";
import CategorySlider from "@/components/CategorySlider/CategorySlider";

const home = () => {
  return (
    <Box component="section">
      <Hero />
      <Box
        sx={{
          fontSize: "16px",
          background: "#1B1AFF",
          color: "#FFF",
          textAlign: "center",
          padding: "20px 0",
          margin: "40px 0",
          "& span": { textDecoration: "underline" },
        }}
      >
        <p>
          Echa un vistazo a nuestras ofertas de Invierno:{" "}
          <span>¡hasta 50% de descuento!</span>
        </p>
      </Box>
      <CategorySlider />
    </Box>
  );
};
export default home;
