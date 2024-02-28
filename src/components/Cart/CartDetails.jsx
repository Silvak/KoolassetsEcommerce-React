import { Box, Button } from "@mui/material";

import CartProductsDeleted from "@/components/Cart/CartProductsDeleted";

const CartDetails = () => {
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
          <span>$50.000</span>
        </div>
        <div>
          <p>Envio</p>
          <span>$200</span>
        </div>
        <div>
          <p>Impuestos</p>
          <span>$20</span>
        </div>
        <div>
          <p>Descuentos</p>
          <span>$99.99</span>
        </div>
        <div>
          <p>Total</p>
          <span>$100.000</span>
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
