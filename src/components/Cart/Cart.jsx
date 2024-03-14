import CartProducts from "@/components/Cart/CartProducts";
import CartDetails from "@/components/Cart/CartDetails";

import "./styles.css";
import { Grid } from "@mui/material";
import CartSlider from "../CartSuggestions/CartSlider";

const Cart = () => {
  return (
    <Grid container spacing={4} sx={{maxWidth: "1339px"}}>
      <Grid item xs={12} md={8}>
        <CartProducts />
      </Grid>
      <Grid item xs={12} md={4}>
        <CartDetails />
      </Grid>
      <Grid item xs={12}>
        <CartSlider />
      </Grid>
    </Grid>
  );
};
export default Cart;
