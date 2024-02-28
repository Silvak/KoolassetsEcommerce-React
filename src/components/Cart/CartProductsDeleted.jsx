import CartProductsDeletedItem from "@/components/Cart/CartProductsDeletedItem";
import { Box } from "@mui/material";

const CartProductsDeleted = () => {
  return (
    <div>
      <h3 className="cart_title">Eliminado</h3>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <CartProductsDeletedItem />
        <CartProductsDeletedItem />
      </Box>
    </div>
  );
};
export default CartProductsDeleted;
