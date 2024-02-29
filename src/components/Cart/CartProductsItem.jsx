import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { storeCart } from "../../stores/cart/storeCart";

const CartProductsItem = ({ product }) => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const { toggleCartlist, setQuantity } = storeCart((state) => state);

  const { id, image, price, quantity, name } = product;

  const handleDeleted = (product) => () => {
    toggleCartlist(product);
  };

  const handleQuantity = (event) => {
    console.log(event.target.value);
    setQuantity(id, event.target.value);
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
          {name.length > 60 ? name.slice(0, 62) + "..." : name}
        </p>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "14px",
          width: "300px",
          marginLeft: isDesktop ? "auto" : "unset",
          height: "100%",
          mt: isDesktop ? 0 : "20px",
          padding: isDesktop ? "0" : "10px 0",
        }}
      >
        <span className="cart-products-item_price">${price}</span>
        <input
          type="number"
          defaultValue={quantity}
          min={1}
          className="cart-products-item_quantity"
          onChange={handleQuantity}
        />
        <span className="cart-products-item_subtotal">$2.0</span>
      </Box>
    </Box>
  );
};
export default CartProductsItem;
