import Box from "@mui/material/Box";
//import Typography from "@mui/material/Typography";
//import Grid from "@mui/material/Grid";
//import Stack from "@mui/material/Stack";
//import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { productsData, totalProducts, category } from "@/mock/productData";
import ProductDetail from "../components/sections/productDetail";
import ProductInfo from "../components/sections/productInfo";
import ProductDescription from "../components/sections/producDescription";
import CartSlider from "../components/CartSuggestions/CartSlider";
import { Grid, useMediaQuery } from "@mui/material";

function Product() {
  let { productId } = useParams();
  const isMobile = useMediaQuery("md");
  return (
    <div style={{ background: "white" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#fafafa",
          pt: "40px",
          pb: "80px",
        }}
      >
        <ProductDetail product={productsData[productId]} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "white",
          pt: "40px",
          pb: "80px",
        }}
      >
        <ProductInfo product={productsData[productId]} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "white",
          pt: "40px",
          pb: "80px",
        }}
      >
        <ProductDescription />
      </Box>
      { /* Suggestions */}
      <Grid xs={12} sx={{paddingX: isMobile ? 15 : 5, display: "flex", justifyContent: "center"}}>
        <CartSlider />
      </Grid>
    </div>
  );
}

export default Product;
