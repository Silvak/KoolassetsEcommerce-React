import { Box, Button } from "@mui/material";

import CartProductsDeleted from "@/components/Cart/CartProductsDeleted";

import { storeCart } from "../../stores/cart/storeCart";
import { useEffect } from "react";

const CartDetails = () => {
  const {
    cartlist,
    totalPrice,
    subtotal,
    shipping,
    discount,
    taxes,
    calculateTotalPrice,
    calculateSubTotalPrice,
  } = storeCart((state) => state);

  useEffect(() => {
    calculateSubTotalPrice();
    calculateTotalPrice();
  }, [cartlist]);

  return (
    <div>
      <h3 className="cart_title">Detalles de compra</h3>
      <Box
        sx={{
          border: "1px solid #DFDFDF",
          padding: "10px 20px",
          borderRadius: "6px",
          color: "#000000",
          "& > div": {
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0",
            fontSize: "14px",
          },
          "& > div > span": {
            fontWeight: "400",
          },
          "& > div:last-child": {
            marginTop: "50px",
          },
        }}
      >
        <div>
          <p>Subtotal</p>
          <span>${subtotal}</span>
        </div>
        <div>
          <p>Envio</p>
          <span>${shipping}</span>
        </div>
        <div>
          <p>Impuestos</p>
          <span>{taxes}%</span>
        </div>
        <div>
          <p>Descuentos</p>
          <span>{discount}%</span>
        </div>
        <div>
          <p>Total</p>
          <span>${totalPrice}</span>
        </div>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          mt: 4,
          background: "#1B1AFF",
        }}
      >
        Comprar
      </Button>

      <CartProductsDeleted />
    </div>
  );
};
export default CartDetails;
