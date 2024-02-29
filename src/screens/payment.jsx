import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PaymentDetails from "@/components/sections/paymentDetails";
import ShoppingCartList from "@/components/sections/shoppingCartList";
import Stack from "@mui/material/Stack";

function Payment() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "24px",
        marginBottom: "80px",
      }}
    >
      <Grid
        container
        spacing={0}
        columns={{ xs: 1, lg: 2 }}
        sx={{ maxWidth: "1300px" }}
      >
        <Grid item xs={1}>
          <Typography
            variant="body1"
            color="initial"
            style={{ fontSize: "32px", fontWeight: 400 }}
            mb={6}
          >
            Lista de compras
          </Typography>
          {/* cart list */}
          <ShoppingCartList />
        </Grid>

        <Grid item xs={1}>
          <Stack sx={{ pl: { xs: 0, lg: 4 }, pt: { xs: 8, lg: 0 } }}>
            <Typography
              variant="body1"
              color="initial"
              style={{ fontSize: "32px", fontWeight: 400 }}
              mb={6}
            >
              Detalels de pago
            </Typography>

            {/* form payment */}
            <PaymentDetails />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Payment;
