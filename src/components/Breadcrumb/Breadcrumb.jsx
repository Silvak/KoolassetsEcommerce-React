import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Breadcrumb = ({ path, dashboard }) => {
  
  const normalizePathSegment = (segment) => {
    return segment
      .toLowerCase()
      .replace(/\s+/g, "_")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };
    // El método normalize("NFD") elimina diacríticos, como las tildes en letras españolas.
    // El método replace(/[\u0300-\u036f]/g, "") elimina los diacríticos de la cadena de texto.

  let redirection;
  dashboard ? redirection = "/dashboard" : redirection = "/"
  const paths = path.split(" / ");
  const normalizedPaths = paths.map(normalizePathSegment);
  const lastPath = normalizedPaths.pop();
  const originalNames = paths.map(path => path.trim());

  return (
    <Box style={{ fontSize: "12px", paddingTop: "20px" }}>
      <Link to={redirection} style={{ color: "gray", textDecoration: "none" }}>
        {dashboard ? "Administración" : "Inicio"}
      </Link>{" "}
      /
      {normalizedPaths.map((path, index) => (
        <span key={index}>
          {" "}
          <Link
            to={`/${path}`}
            style={{ color: "gray", textDecoration: "none" }}
          >
            {originalNames[index]}
          </Link>{" "}
          /
        </span>
      ))}
      <span style={{ color: "#000" }}>{" "}{originalNames[originalNames.length - 1]}</span>
    </Box>
  );
};

export default Breadcrumb;
