import { Box, Button } from "@mui/material";

import image from "@/assets/Img/webp/phoneImage.webp";

const CartProductsDeletedItem = () => {
  const desc = "Moto G84 5G 256 GB negro espacial 8 GB RAM";

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <img src={image} alt="product" className="cart_img" />
        <Box>
          <p className="cart-products-deleted-item_desc">
            {desc.length > 60 ? desc.slice(0, 62) + "..." : desc}
          </p>
          <p className="cart-products-deleted-item_quantity">Cantidad: 1</p>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          marginLeft: "auto",
          background: "#1B1AFF",
        }}
      >
        Deshacer
      </Button>
    </Box>
  );
};
export default CartProductsDeletedItem;
