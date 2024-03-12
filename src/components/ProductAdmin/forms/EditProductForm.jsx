import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { storeImages } from "../../../stores/addProducts/productsImage";
import { useParams } from "react-router-dom";
import products from "../../../mock/productDataDashboard";
import { Label } from "@mui/icons-material";

function EditProductForm() {
  const theme = createTheme();
  const { setImages } = storeImages((state) => ({
    setImages: state.setImages,
  }));
  const { id } = useParams("id");

  const product = products.find(product => product.id == id);
  const label = product ? product.category : 'No product';
  const brand = product ? product.brand : 'No product';
  const name = product ? product.name : 'No product';
  const stock = product ? product.stock : 'No product';
  const price = product ? product.precio : 'No product';
  const description = product ? product.description : 'No product';

  useEffect(() => {
    console.log("ID:", id);
  }, [id]);

  const [formData, setFormData] = useState({
    Category: label,
    Brand: brand,
    Name: name,
    Image: [],
    Stock: stock,
    Price: price,
    Description: description,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    setFormData({
      ...formData,
      Image: [...formData.Image, ...files],
    });
    setImages([...storeImages.getState().images, ...files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.Image);
    setFormData(formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{ fontSize: 20, fontWeight: 700, color: "#000" }}
            >
              Categoría
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              required
              label="Categoría"
              name="Category"
              size="small"
              value={formData.Category}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{ fontSize: 20, fontWeight: 700, color: "#000" }}
            >
              Marca
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              size="small"
              label="Marca"
              name="Brand"
              value={formData.Brand}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{ fontSize: 20, fontWeight: 700, color: "#000" }}
            >
              Nombre
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              size="small"
              label="Nombre"
              name="Name"
              multiline
              value={formData.Name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{ fontSize: 20, fontWeight: 700, color: "#000" }}
            >
              Imágenes
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <input
              accept="image/*"
              multiple
              style={{ display: "none" }}
              id="raised-button-file"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="raised-button-file">
              <Button
                //   variant="contained"
                component="span"
                style={{
                  width: "100%",
                  height: "110px",
                  color: "#000",
                  backgroundColor: "F5F5F5",
                  border: "1px solid #000",
                }}
              >
                Elegir archivo
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{ fontSize: 20, fontWeight: 700, color: "#000" }}
            >
              Stock
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              size="small"
              label="Stock"
              name="Stock"
              value={formData.Stock}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{ fontSize: 20, fontWeight: 700, color: "#000" }}
            >
              Precio {"($)"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              size="small"
              label="0.00"
              name="Price"
              value={formData.Price}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{ fontSize: 20, fontWeight: 700, color: "#000" }}
            >
              Descripción
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              size="small"
              label="Descripción"
              name="Description"
              multiline
              rows={5}
              value={formData.Description}
              onChange={handleInputChange}
            />
          </Grid>
          <Box>
            <Typography variant="body2" sx={{ paddingInline: 2, paddingY: 2 }}>
              {product.idVisible}
            </Typography>
          </Box>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: 20,
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{ width: "48%", fontSize: "12px", height: "53px" }}
            >
              Eliminar producto
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: "48%", fontSize: "12px", height: "53px" }}
            >
              Actualizar producto
            </Button>
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
}

export default EditProductForm;
