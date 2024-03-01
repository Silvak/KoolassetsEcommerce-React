import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  IconButton,
  Grid,
  Box,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { BsCartPlus, BsCartDash } from "react-icons/bs";

function HomeCard({
  product,
  closeIcon,
  isFavorite,
  isInCart,
  handleToggleFavorite,
  handleToggleCart,
}) {
  const isInFavorites = isFavorite(product);
  const isProductInCart = isInCart(product);

  return (
    <div>
      <Grid
        sx={{
          mb: "8px",
          maxWidth: "320px",
        }}
        style={{ padding: "0px" }}
      >
        <CardContent
          style={{ padding: "0px", paddingTop: "0px", paddingInline: "4px" }}
        >
          <Grid item xs={12} sx={{ borderRadius: "10px" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "320px",
                height: "304px",
                objectFit: "contain",
                borderRadius: "10px",
              }}
            />
          </Grid>
        </CardContent>
      </Grid>

      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="space-between"
        style={{ height: "auto", padding: "0px", width: "320px" }}
      >
        <div style={{ display: "flex", justifyContent: "flex-start", gap: 4 }}>
          <Rating
            name="read-only"
            value={product.rating}
            readOnly
            size="small"
          />

          <Typography
            variant="body2"
            style={{ color: "#615D5D", fontSize: "0.8rem", fontWeight: 500 }}
          >
            ({product.rating})
          </Typography>
        </div>

        {/* icons */}
        <Box sx={{ display: "flex" }}>
          <IconButton
            title={
              isInFavorites ? "Eliminar de favoritos" : "Agregar a favoritos"
            }
            disableRipple
            aria-label="add to favorites"
            onClick={() => handleToggleFavorite(product)}
          >
            {isInFavorites ? (
              <FavoriteOutlinedIcon
                style={{ color: "red", fontSize: "1.2rem" }}
              />
            ) : (
              <FavoriteBorderIcon
                style={{ color: "#615D5D", fontSize: "1.2rem" }}
              />
            )}
          </IconButton>

          <IconButton
            title={
              isProductInCart ? "Eliminar del carrito" : "Agregar al carrito"
            }
            disableRipple
            aria-label="add to cart"
            onClick={() => handleToggleCart(product)}
            sx={{ color: isProductInCart ? "#A50909" : "#5DC237" }}
          >
            {isProductInCart ? <BsCartDash /> : <BsCartPlus />}
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          color={"#615D5D"}
          fontWeight={"normal"}
          style={{ maxWidth: "320px" }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          style={{
            fontSize: "24px",
            fontWeight: 400,
            marginTop: "18px",
            lineHeight: "34px",
            textAlign: "left",
            color: "#000000",
            marginBottom: 8,
          }}
        >
          ${product.price.toFixed(2)}
        </Typography>
        <CardActions
          style={{ padding: "0px", marginInline: "0px", width: "320px" }}
        >
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            style={{
              border: "1px solid #1B1AFF",
              fontWeight: 700,
              color: "#1B1AFF",
              borderRadius: "6px",
            }}
          >
            Ver detalles
          </Button>
        </CardActions>
      </Grid>
    </div>
  );
}

export default HomeCard;
