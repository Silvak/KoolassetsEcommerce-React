import { Box, Grid, Typography } from "@mui/material";

import { summaryStyles } from "@/components/Dashboard/styles";
import { balanceData, salesData } from "@/mock/summaryData";
import { BsCaretUpFill } from "react-icons/bs";

import Views from "@/components/Dashboard/Views";
import Sales from "@/components/Dashboard/Sales";

const renderTextData = (data) => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            fontSize: "14px",
            fontWeight: "normal",
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
            width: "80%",
          }}
        >
          <span style={{ minWidth: "140px" }}>{item.text}</span>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "2px",
              width: "70px",
            }}
          >
            {item.percentage}%
            <BsCaretUpFill color="#52C41A" />
          </div>
        </div>
      ))}
    </div>
  );
};

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
          <Typography variant="subtitle1" className={classes.itemTitle}>
            Balance actual
          </Typography>
          <p className={classes.itemNumber}>$100.200</p>
          {renderTextData(balanceData)}
          <hr className={classes.itemHr} />
          <Box className={classes.itemFooter}>
            <p>Ingresos hoy</p>
            <p>
              <strong>$ 9,99.99</strong>
            </p>
          </Box>
        </Grid>
        {/* visitas */}
        <Grid item xs={12} md={3.8} className={classes.item}>
          <Views />
          <hr className={classes.itemHr} />
          <Box className={classes.itemFooter}>
            <p>Visitas hoy</p>
            <p>
              <strong>120</strong>
            </p>
          </Box>
          {/* <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="subtitle1" className={classes.itemTitle}>
                Visitas
              </Typography>
              <p className={classes.itemNumber}>50000</p>
            </Box>
           
          </Box>
          {renderTextData(viewsData)}
          <hr className={classes.itemHr} />
          <Box className={classes.itemFooter}>
            <p>Visitas hoy</p>
            <p>
              <strong>120</strong>
            </p>
          </Box> */}
        </Grid>
        {/* ventas */}
        <Grid item xs={12} md={3.8} className={classes.item}>
          <Sales />
          <hr className={classes.itemHr} />
          <Box className={classes.itemFooter}>
            <p>Ventas hoy</p>
            <p>
              <strong>120</strong>
            </p>
          </Box>
          {/* <Typography variant="subtitle1" className={classes.itemTitle}>
            Ventas
          </Typography>
          <p className={classes.itemNumber}>50000</p>
          {renderTextData(salesData)}
          <hr className={classes.itemHr} />
          <Box className={classes.itemFooter}>
            <p>Ventas hoy</p>
            <p>
              <strong>120</strong>
            </p>
          </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
};
export default Summary;
