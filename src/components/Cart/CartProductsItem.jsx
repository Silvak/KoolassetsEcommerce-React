import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { storeCart } from "../../stores/cart/storeCart";

const CartProductsItem = ({ product }) => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const { toggleCartlist } = storeCart((state) => state);

  const { image, price, quantity, desc } = product;

  const handleDeleted = (product) => () => {
    toggleCartlist(product);
  };

  return (
    <Box
      sx={{
        outline: "1px solid #DFDFDF",
        borderRadius: "6px",
        padding: isDesktop ? "15px" : "10px",
        display: "flex",
        flexDirection: isDesktop ? "row" : "column",
        gap: "10px",
        alignItems: "center",
        color: "#000000",
      }}
    >
      {/* inner content */}
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          flexDirection: isDesktop ? "row" : "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          sx={{
            marginLeft: "auto",
            width: "fit-content",
          }}
          className="cart-products-item_close"
          onClick={handleDeleted(product)}
        >
          x
        </button>
        <img className="cart_img" src={image} alt="product" />
        <p className="cart-products-item_desc">
          {desc.length > 60 ? desc.slice(0, 62) + "..." : desc}
        </p>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "14px",
          width: "50%",
          height: "100%",
          mt: isDesktop ? 0 : "20px",
          padding: isDesktop ? "0" : "10px 0",
        }}
      >
        <span className="cart-products-item_price">${price}</span>
        <input
          type="number"
          defaultValue={1}
          min={0}
          className="cart-products-item_quantity"
        />
        <span className="cart-products-item_subtotal">$999.99</span>
      </Box>
    </Box>
  );
};
export default CartProductsItem;
