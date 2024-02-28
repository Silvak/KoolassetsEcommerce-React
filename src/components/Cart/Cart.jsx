import CartProducts from "@/components/Cart/CartProducts";
import CartDetails from "@/components/Cart/CartDetails";

import "./styles.css";
import { Grid } from "@mui/material";

const Cart = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        <CartProducts />
      </Grid>
      <Grid item xs={12} md={4}>
        <CartDetails />
      </Grid>
    </Grid>
  );
};
export default Cart;
