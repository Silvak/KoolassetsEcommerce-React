import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Cart from "@/components/Cart/Cart";
import { Container } from "@mui/material";

const CartPage = () => {
  return (
    <Container maxWidth="lg">
      <Breadcrumb />
      <Cart />
    </Container>
  );
};
export default CartPage;
