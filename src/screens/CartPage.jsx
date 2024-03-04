import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Cart from "@/components/Cart/Cart";
import { Container } from "@mui/material";

const CartPage = () => {
  return (
    <>
      <Breadcrumb path="Carrito" />
      <Cart />
    </>
  );
};
export default CartPage;
