import { Box, Button } from "@mui/material";

const CartProductsDeletedItem = ({ product, onClick }) => {
  const { image, name } = product;

  return (
    product && (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <img src={image} alt="product" className="cart_img" />
          <Box sx={{ textAlign: "left", width: "100%" }}>
            <p className="cart-products-deleted-item_desc">
              {name.length > 60 ? name.slice(0, 62) + "..." : name}
            </p>
            <p className="cart-products-deleted-item_quantity">Cantidad: 1</p>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            marginLeft: "auto",
            transform: "translateY(-25px)",
            background: "#1B1AFF",
          }}
          onClick={() => onClick(product)}
        >
          Deshacer
        </Button>
      </Box>
    )
  );
};
export default CartProductsDeletedItem;
