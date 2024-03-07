import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { Box, Grid, Typography } from "@mui/material";
import EditProductForm from "./forms/EditProductForm";
import MockPreview from "./forms/mockPreview";
import { mockImages } from "../../mock/mockImages";
import products from "../../mock/productDataDashboard";

function EditProductAdmin() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginTop: "50px",
      }}
    >
      <Box>
        <Typography
          style={{
            backgroundColor: "#EEEEEE",
            color: "#000",
            fontWeight: 600,
            fontSize: "24px",
            paddingLeft: 22,
            paddingBlock: 10,
            letterSpacing: -1,
            borderRadius: "6px",
          }}
        >
          Editar Producto
        </Typography>
      </Box>
      <Breadcrumb path={"Productos / Editar"} dashboard={"true"} />

      <Grid container style={{paddingTop: 10}}>
        <Grid item xs={12} md={5.3} sx={{}}>
        <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "start",
          height: 50,
          background: "none",
          
        }}
      >
        <Typography
          variant="h6"
          style={{ fontSize: 20, fontWeight: 700, color: "#000" }}
        >
          Vista previa
        </Typography>
      </Box>
          <MockPreview product={mockImages}/>
        </Grid>
        <Grid item xs={12} md={6.7}>
          <EditProductForm data={products}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default EditProductAdmin;
