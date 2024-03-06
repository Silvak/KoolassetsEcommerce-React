import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { returnsData } from "../../mock/returnsData";
function Products() {
  const dataSliced = returnsData.slice(0, 6);
  return (
    <Grid
      container
      spacing={4}
      direction={"column"}
      columns={2}
      sx={{
        gap: "20px",
        justifyContent: "center",
        alignItems: "start",
        height: "600px",
        maxWidth: "60vw",
      }}
    >
      {dataSliced.map((product, key) => (
        <Box
          key={product.id}
          sx={{
            width: "60%",
            borderBottom: "1px solid #ECECEC",
            borderTop: "1px solid #ECECEC",
            maxWidth: "500px",
            display: "flex",
            paddingY: 2,
            alignItems: "center"
          }}
        >
          <Box sx={{ width: "200px", display: "block", height: "112px" }}>
            <img
              src={product.image}
              alt=""
              style={{ objectFit: "contain", width: "100%", height: "112px" }}
            />
          </Box>

          <Grid sx={{display: "table-row"}}>
            <Box sx={{marginBottom: "10px"}}>
              <Typography
                variant="body1"
                component={"p"}
                color="initial"
                style={{ fontSize: "16px", fontWeight: 600 }}
              >
                {product.name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="body1"
                component={"p"}
                color="initial"
                style={{ fontSize: "16px", fontWeight: 400 }}
              >
                Cantidad: {1}
              </Typography>
              <Typography
                variant="body1"
                component={"p"}
                color="initial"
                style={{ fontSize: "16px", fontWeight: 400 }}
              >
                Día: 99/99/2999
              </Typography>
            </Box>
          </Grid>
        </Box>
      ))}
    </Grid>
  );
}

export default Products;
