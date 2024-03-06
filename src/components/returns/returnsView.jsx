import { Typography, Box } from "@mui/material";
import ReturnProducts from "./returns";
import { returnsData, totalProducts } from "../../mock/returnsData";

function ReturnsView() {
  return (
    <Box
    sx={{
      mt: 5,
      textAlign: "left",
    }}
  >
    <Box
    >
      <Typography
        variant="subtitle"
        sx={{
          color: "#000",
          fontSize: 32,
          textAlign: "left",
          fontWeight: 400,
          marginBottom: 5,
          ml: { xs: "0", md: 1 },
        }}
      >
        Devoluciones realizadas
      </Typography>
        { /* Productos */}
        <ReturnProducts 
          products={returnsData}
          totalResults={totalProducts}
        />
    </Box>
  </Box>
  )
}

export default ReturnsView;