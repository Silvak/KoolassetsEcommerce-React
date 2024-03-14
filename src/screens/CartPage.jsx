import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Cart from "@/components/Cart/Cart";
import { Container } from "@mui/material";

const CartPage = () => {
  return (
    <div>
      <Breadcrumb path="Carrito" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Cart />
      </div>
    </div>
  );
};
export default CartPage;
