import { Box, useMediaQuery } from "@mui/material";

import CartProductsItem from "@/components/Cart/CartProductsItem";

import { storeCart } from "../../stores/cart/storeCart";

const CartProducts = () => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const { cartlist } = storeCart((state) => state);

  return (
    <div>
      {/* header */}
      {isDesktop && (
        <>
          <h3 className="cart_title">Carrito de compras</h3>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              fontSize: "14px",
              outline: "1px solid #DFDFDF",
              borderRadius: "6px",
              padding: "10px",
              color: "#000000",
            }}
          >
            <p>Producto</p>
            <Box sx={{ display: "flex", gap: "75px" }}>
              <p>Precio</p>
              <p>Cantidad</p>
              <p>Subtotal</p>
            </Box>
          </Box>
        </>
      )}

      {/* items */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        {cartlist.map((product) => (
          <CartProductsItem product={product} key={product.id} />
        ))}
      </Box>
    </div>
  );
};
export default CartProducts;
