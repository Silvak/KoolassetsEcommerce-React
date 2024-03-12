import { Box, Button } from "@mui/material";

const HeroText = () => {
  return (
    <Box
      sx={{
        color: "#FFF",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <span className="hero-text_year">{new Date().getFullYear()}</span>
      <h3 className="hero-text_title">Colección de invierno</h3>
      <p className="hero-text_paragraph">
        ¡No te pierdas las ofertas en computación de 2024! Rebajas increíbles en
        laptops, desktops y más.
      </p>
      <button className="hero-text_btn" onClick={() => alert("Explorar")}>
        Explorar ahora
      </button>
      <span className="hero-text_offer">(La oferta acaba en 23:59:00)</span>
    </Box>
  );
};
export default HeroText;
