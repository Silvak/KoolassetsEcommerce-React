import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { productsData, totalProducts, category } from "@/mock/productData";
import ProductDetail from "../components/sections/productDetail";
import ProductInfo from "../components/sections/productInfo";

function ProductDescription() {
  return (
    <Box>
      <Typography
        variant="body1"
        color="initial"
        style={{ fontSize: "32px", fontWeight: 600 }}
      >
        Descripción de producto
      </Typography>
    </Box>
  );
}

function Product() {
  let { productId } = useParams();

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

      {/* */}
    </div>
  );
}

export default Product;
