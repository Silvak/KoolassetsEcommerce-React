import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Breadcrumb = ({ path }) => {
  return (
    <Box style={{ fontSize: "12px", padding: "20px 0" }}>
      <Link to="/" style={{ color: "gray", textDecoration: "none" }}>
        Inicio
      </Link>
      / <span style={{ color: "#000" }}>{path}</span>
    </Box>
  );
};
export default Breadcrumb;
