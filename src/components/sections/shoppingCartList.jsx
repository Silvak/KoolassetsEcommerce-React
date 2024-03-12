import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { productsData } from "@/mock/productData";

const totalMock = [
  {
    name: "Subtotal",
    value: "999.0",
  },
  {
    name: "Descuentos",
    value: "0",
  },
  {
    name: "Envío",
    value: "999.0",
  },
  {
    name: "Impuestos",
    value: "999.0",
  },
  {
    name: "Total",
    value: "9999.0",
  },
];

function ShoppingCartList() {
  return (
    <Stack direction={"column"}>
      <Stack sx={{ height: "500px", overflowY: "scroll" }}>
        {productsData.map((element, key) => (
          <Grid
            key={element.id}
            container
            columns={3}
            sx={{
              borderTop: "1px solid #ECECEC",
              py: 4,
              width: "100%",
            }}
          >
            <Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  height: "80px",
                  width: "80px",
                  background: "gray",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={element.image}
                  alt=""
                  style={{ objectFit: "contain", width: "100%" }}
                />
              </Box>

              <Stack
                direction={"column"}
                justifyContent={"space-between"}
                sx={{ height: "100%", pl: 3 }}
              >
                <Typography
                  variant="body1"
                  component={"p"}
                  color="initial"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                >
                  {element.name}
                </Typography>

                <Typography
                  variant="body1"
                  component={"p"}
                  color="initial"
                  style={{ fontSize: "16px", fontWeight: 400 }}
                >
                  Cantidad: {1}
                </Typography>
              </Stack>
            </Grid>

            <Grid
              item
              xs={1}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                style={{ fontSize: "16px", fontWeight: 400 }}
              >
                $ {element.price}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Stack>

      <Stack sx={{ gap: 2, py: 2, borderTop: "1px solid #ECECEC" }}>
        {totalMock.map((element, index) => (
          <Stack
            key={index}
            direction={"row"}
            justifyContent={"space-between"}
            sx={{
              borderTop: element.name == "Total" ? "1px solid #ECECEC" : "none",
              pt: element.name == "Total" ? 2 : 0,
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              style={{ fontSize: "16px", fontWeight: 400 }}
            >
              {element.name}
            </Typography>

            <Typography
              variant="body1"
              color="initial"
              style={{ fontSize: "16px", fontWeight: 400 }}
            >
              {element.value}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default ShoppingCartList;
