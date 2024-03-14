import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box, createTheme, ThemeProvider } from '@mui/material';
import { storeImages } from '../../../stores/addProducts/productsImage';

function AddProductForm() {
  const theme = createTheme();
  const { setImages } = storeImages((state) => ({ setImages: state.setImages }))
  
    const [formData, setFormData] = useState({
        Category: '',
        Brand: '',
        Name: '',
        Image: [],
        Stock: '',
        Price: '',
        Description: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleImageChange = (event) => {
        const files = event.target.files;
        setFormData({
          ...formData,
          Image: [...formData.Image, ...files]
        });
        setImages([...storeImages.getState().images, ...files]);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData.Image);
        setFormData({
            Category: '',
            Brand: '',
            Name: '',
            Image: [],
            Stock: '',
            Price: '',
            Description: '',
        });
      };


  return (
    <ThemeProvider  theme={theme}>
    <form onSubmit={handleSubmit} >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 700, color: "#000" }}>Categoría</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            required
            label="Categoría"
            name="Category"
            // size='small'
            value={formData.Category}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 700, color: "#000" }}>Marca</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            // size='small'
            label="Marca"
            name="Brand"
            value={formData.Brand}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 700, color: "#000" }}>Nombre</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            // size='small'
            label="Nombre"
            name="Name"
            multiline
            value={formData.Name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 700, color: "#000" }}>Imágenes</Typography>
        </Grid>
        <Grid item xs={12}>
          <input
            accept="image/*"
            multiple
            style={{ display: 'none',  }}
            id="raised-button-file"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="raised-button-file" >
            <Button
            //   variant="contained"
              component="span"
              style={{ width: '100%', height: '110px', color: "#000", backgroundColor: "F5F5F5", border: "1px solid #000" }}
            >
              Elegir archivo
            </Button>
          </label>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 700, color: "#000" }}>Stock</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            // size='small'
            label="Stock"
            name="Stock"
            value={formData.Stock}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 700, color: "#000" }}>Precio {"($)"}</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            // size='small'
            label="0.00"
            name="Price"
            value={formData.Price}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 700, color: "#000" }}>Descripción</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            // size='small'
            label="Descripción"
            name="Description"
            multiline
            rows={5}
            value={formData.Description}
            onChange={handleInputChange}
          />
        </Grid>
        <Box>
            <Typography variant='body2' sx={{ paddingInline: 2, paddingY: 2}}>
                ID: {"#9999"}
            </Typography>
        </Box>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" sx={{width: "100%"}}>
            Añadir producto
          </Button>
        </Grid>
      </Grid>
    </form>
    </ThemeProvider>
  )
}

export default AddProductForm;