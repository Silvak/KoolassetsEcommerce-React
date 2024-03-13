import { Box, Grid, Typography } from "@mui/material";

import { summaryStyles } from "@/components/Dashboard/styles";
import {
  activeUsersData,
  balanceData,
  mostSelledData,
  ordersData,
  productsOnSalesData,
  salesData,
  viewsData,
} from "@/mock/summaryData";

//components
import ActiveUsers from "@/components/Dashboard/ActiveUsers";
import Balance from "@/components/Dashboard/Balance";
import MostSelled from "@/components/Dashboard/MostSelled";
import Orders from "@/components/Dashboard/Orders";
import ProductsOnSale from "@/components/Dashboard/ProductsOnSale";
import Sales from "@/components/Dashboard/Sales";
import Views from "@/components/Dashboard/Views";
import Table from "@/components/ProductOrder/ProductAdminContent";

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
      <Grid
        container
        sx={{
          margin: "30px 0 0 0",
        }}
      >
        {/* balance */}
        <Grid item xs={12} md={4} className={classes.item}>
          <Balance data={balanceData} />
        </Grid>
        {/* visitas */}
        <Grid item xs={12} md={4} className={classes.item}>
          <Views data={viewsData} />
        </Grid>
        {/* ventas */}
        <Grid item xs={12} md={4} className={classes.item}>
          <Sales data={salesData} />
        </Grid>
        {/* usuarios activos */}
        <Grid item xs={12} md={8} className={classes.item}>
          <ActiveUsers data={activeUsersData} />
        </Grid>
        {/*  productos más vendidos*/}
        <Grid item xs={12} md={4} className={classes.item}>
          <MostSelled data={mostSelledData} />
        </Grid>
        {/* otro */}
        <Grid item xs={12} md={6} className={classes.item}>
          <ProductsOnSale data={productsOnSalesData} />
        </Grid>
        {/* otro */}
        <Grid item xs={12} md={6} className={classes.item}>
          <Orders data={ordersData} />
        </Grid>
      </Grid>
      <Box className={classes.header}>
        <Typography variant="h6" className={classes.title}>
          Órdenes recientes
        </Typography>
      </Box>
      {/* <OrdersTable /> */}
      <Table />
    </Box>
  );
};
export default Summary;
