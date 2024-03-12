import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import { storeCart } from "../../stores/cart/storeCart";
import { storeFavorites } from '../../stores/favorites/storeFavorites';

function ProductDetail(props) {
  const [selectedImage, setSelectedImage] = useState(props?.product?.image);
  const { toggleCartlist, isInCart } = storeCart((state) => state);
  const { toggleFavorite, isFavorite } = storeFavorites(state => ({
    toggleFavorite: state.toggleFavorite,
    isFavorite: state.isFavorite,
  }));

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleAddToCart = () => {
    toggleCartlist(props.product);
  };

  const handleAddToFavorites = () => {
    toggleFavorite(props.product);
  };

  const isProductInCart = isInCart(props.product);
  const isProductInFavorites = isFavorite(props.product);

  return (
    <Grid
      container
      columns={{ xs: 1, lg: 5 }}
      sx={{
        maxWidth: "1200px",
        p: 0,
        m: 0,
      }}
    >
      {/* ------ IMAGES ------ */}
      <Grid item xs={1} lg={3}>
        <Stack direction={{ xs: "column-reverse", lg: "row" }} spacing={1.8}>
          <Stack direction={{ xs: "row", lg: "column" }} spacing={1.8}>
            {props.product.images.map((image, index) => (
              <Box
                key={index}
                direction="colunm"
                onClick={() => handleImageSelect(image)}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.7,
                  },
                  width: "80px",
                  height: "80px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "80px",
                    objectFit: "contain",
                    marginBottom: "10px",
                    background: "#DFDFDF",
                    borderRadius: "6px",
                  }}
                />
              </Box>
            ))}
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              background: "#DFDFDF",
              borderRadius: "6px",
              width: "100%",
              height: { xs: "600px", lg: "600px" },
            }}
          >
            <img
              src={selectedImage}
              alt={`Product Image`}
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        </Stack>
      </Grid>

      {/* ------ DETAILS ------ */}
      <Grid item xs={1} lg={2}>
        <Box sx={{ pl: { xs: 0, lg: 5 }, pt: { xs: 5, lg: 0 } }}>
          {/* title & price */}
          <Typography
            variant="h1"
            component="h1"
            style={{
              fontSize: "30px",
              fontWeight: 600,
              color: "black",
            }}
            mb={1}
          >
            {props.product.name || "Titulo del producto"}
          </Typography>

          <Stack direction="row" spacing={2}>
            <Rating
              name="read-only"
              value={props.product.rating}
              precision={0.5}
              readOnly
            />

            <Typography
              variant="body1"
              component="p"
              style={{ fontSize: "18px", fontWeight: 400, color: "gray" }}
            >
              {parseInt(props.product.price / 7.2)} opiniones
            </Typography>
          </Stack>

          <Typography
            variant="p"
            component="p"
            style={{ fontSize: "36px", fontWeight: 600, color: "black" }}
            my={3}
          >
            ${props.product.price || "0000.0"}
          </Typography>

          {/* btns */}
          <Button
            variant={isProductInCart ? "contained" : "outlined"}
            sx={{ width: "100%", height: "52px", background: isProductInCart ? "#1B1AFF" : "none" }}
            onClick={handleAddToCart}
          >
            {isProductInCart ? "Eliminar del carrito" : "Añadir al carrito"}
          </Button>
          <Button
            variant={isProductInFavorites ? "contained" : "outlined"}
            sx={{ width: "100%", height: "52px", background: isProductInFavorites ? "#1B1AFF" : "none", mt: 2 }}
            onClick={handleAddToFavorites}
          >
            {isProductInFavorites ? "Eliminar de favoritos" : "Añadir a favoritos"}
          </Button>

          {/* description */}
          <Typography
            variant="body1"
            component="p"
            style={{ fontSize: "16px", fontWeight: 400, color: "#7d7d7d" }}
            mt={3}
          >
            <b style={{ color: "black" }}>Acerca del producto</b> <br />
            {props.product.description || "Descripción corta"}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ProductDetail;
