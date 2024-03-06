import { Typography, Box } from "@mui/material";
import { cancellationsData ,totalProducts } from "../../mock/cancellationsData";
import Products from "./products";
import CanceledProducts from "./canceledProducts";

function CancellationView() {
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
          ml: { xs: "0", md: 10 },
        }}
      >
        Cancelaciones realizadas
      </Typography>
        { /* Productos */}
        <CanceledProducts 
          products={cancellationsData}
          totalResults={totalProducts}
        />
    </Box>
  </Box>
  )
}

export default CancellationView;