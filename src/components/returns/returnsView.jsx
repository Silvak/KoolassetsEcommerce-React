import { Typography, Box } from "@mui/material";
import ReturnProducts from "./returns";
import { returnsData, totalProducts } from "../../mock/returnsData";

function ReturnsView() {
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