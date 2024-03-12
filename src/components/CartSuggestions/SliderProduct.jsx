import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { storeFavorites } from "../../stores/favorites/storeFavorites";
import { BsCartPlus, BsCartDash } from "react-icons/bs";
import { storeCart } from "../../stores/cart/storeCart";
import { Link } from "react-router-dom";

const SliderProduct = ({ product }) => {
  const labelChip = product?.category.toUpperCase();
  const { toggleFavorite, isFavorite } = storeFavorites((state) => ({
    toggleFavorite: state.toggleFavorite,
    isFavorite: state.isFavorite,
  }));

  //cart
  const { isInCart, toggleCartlist } = storeCart((state) => state);

  const isInFavorites = isFavorite(product);
  const isProductInCart = isInCart(product);

  return (
    <div>
      <Card
        sx={{
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "space-between",
          //   alignItems: "center",
          bgcolor: "#F5F5F5",
          borderRadius: "4px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          mb: "8px",
          width: "250px",
          height: "auto",
        }}
        style={{ padding: "0px" }}
      >
        <CardContent
          style={{ padding: "0px", paddingTop: "12px", paddingInline: "4px" }}
        >
          <Grid
            container
            spacing={1}
            alignItems="center"
            style={{ paddingBlock: "0px" }}
          >
            <Grid item xs={12} sx={{ ml: 0 }} style={{ margin: "0vh" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Chip
                  label={labelChip}
                  sx={{
                    height: "min-content",
                    color: "#1B1AFF",
                    backgroundColor: "rgba(27, 26, 255, 0.3)",
                    borderRadius: "120px",
                    fontWeight: 600,
                    ml: 1,
                    paddingX: 0.6,
                    paddingY: 0.2,
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <img
                src={product?.image}
                alt={product?.name}
                style={{
                  width: "auto",
                  height: "220px",
                  objectFit: "cover",
                  paddingInline: "0px",
                  paddingRight: "0px",
                  paddingBottom: "20px",
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="space-between"
        style={{ height: "auto", padding: "0px", width: "250px" }}
      >
        <div style={{ display: "flex", justifyContent: "flex-start", gap: 4 }}>
          <Rating
            name="read-only"
            value={product?.rating}
            readOnly
            size="small"
          />

          <Typography
            variant="body2"
            style={{ color: "#615D5D", fontSize: "0.8rem", fontWeight: 500 }}
          >
            ({product?.rating})
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
            onClick={() => toggleFavorite(product)}
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
            onClick={() => toggleCartlist(product)}
            sx={{ color: isProductInCart ? "#A50909" : "#5DC237" }}
          >
            {isProductInCart ? <BsCartDash /> : <BsCartPlus />}
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" color={"#0AC733"} fontWeight={"normal"}>
          Disponible
        </Typography>
        <Typography
          variant="body2"
          color={"#615D5D"}
          fontWeight={"normal"}
          style={{ marginBlock: 10, whiteSpace: "nowrap" }}
        >
          {product?.name}
        </Typography>
        <Typography
          variant="body2"
          style={{
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "34px",
            textAlign: "left",
            color: "#000000",
            marginBottom: 8,
          }}
        >
          ${product?.price.toFixed(2)}
        </Typography>

        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <CardActions
            style={{ padding: "0px", marginInline: "0px", width: "250px" }}
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
        </Link>
      </Grid>
    </div>
  );
};

export default SliderProduct;
