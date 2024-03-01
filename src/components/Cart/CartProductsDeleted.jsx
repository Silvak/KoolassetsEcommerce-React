import CartProductsDeletedItem from "@/components/Cart/CartProductsDeletedItem";
import { Box } from "@mui/material";

import { storeCart } from "../../stores/cart/storeCart";

const CartProductsDeleted = () => {
  const { cartlistBackup, toggleCartlist } = storeCart((state) => state);

  if (!cartlistBackup.length) return null;

  return (
    <div>
      <h3 className="cart_title">Eliminado</h3>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {cartlistBackup &&
          cartlistBackup.map((product) => (
            <CartProductsDeletedItem
              key={product.id}
              product={product}
              onClick={toggleCartlist}
            />
          ))}
      </Box>
    </div>
  );
};
export default CartProductsDeleted;
