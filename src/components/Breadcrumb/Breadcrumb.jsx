import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <Box style={{ fontSize: "12px" }}>
      <Link to="/" style={{ color: "gray", textDecoration: "none" }}>
        Inicio
      </Link>{" "}
      / <span style={{ color: "#000" }}>Carrito</span>
    </Box>
  );
};
export default Breadcrumb;
