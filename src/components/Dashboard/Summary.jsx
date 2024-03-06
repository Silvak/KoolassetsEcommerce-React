import { Box, Button, Grid, Typography } from "@mui/material";

import { summaryStyles } from "@/components/Dashboard/styles";
import { balanceData } from "@/mock/summaryData";

//components
import Views from "@/components/Dashboard/Views";
import Sales from "@/components/Dashboard/Sales";
import ActiveUsers from "@/components/Dashboard/ActiveUsers";
import MostSelled from "@/components/Dashboard/MostSelled";
import ProductsOnSale from "@/components/Dashboard/ProductsOnSale";
import Orders from "@/components/Dashboard/Orders";
import Balance from "@/components/Dashboard/Balance";
import OrdersTable from "@/components/OrdersTable/OrdersTable";

const Summary = () => {
  const classes = summaryStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Typography variant="h6" className={classes.title}>
          Resumen
        </Typography>
      </Box>
      {/* layout grid */}
      <Grid container sx={{ margin: "30px 0 0 0", gap: "20px" }}>
        {/* balance */}
        <Grid item xs={12} md={3.8} className={classes.item}>
          <Balance data={balanceData} />
        </Grid>
        {/* visitas */}
        <Grid item xs={12} md={3.8} className={classes.item}>
          <Views />
        </Grid>
        {/* ventas */}
        <Grid item xs={12} md={3.8} className={classes.item}>
          <Sales />
        </Grid>
        {/* usuarios activos */}
        <Grid item xs={12} md={7.9} className={classes.item}>
          <ActiveUsers />
        </Grid>
        {/*  productos más vendidos*/}
        <Grid item xs={12} md={3.8} className={classes.item}>
          <MostSelled />
        </Grid>
        {/* otro */}
        <Grid item xs={12} md={5.8} className={classes.item}>
          <ProductsOnSale />
        </Grid>
        {/* otro */}
        <Grid item xs={12} md={5.8} className={classes.item}>
          <Orders />
        </Grid>
      </Grid>
      <Box className={classes.header}>
        <Typography variant="h6" className={classes.title}>
          Órdenes recientes
        </Typography>
      </Box>
      <OrdersTable />
    </Box>
  );
};
export default Summary;
