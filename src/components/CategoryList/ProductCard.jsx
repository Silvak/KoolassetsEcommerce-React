import React from "react";
import {
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
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { storeCart } from "../../stores/cart/storeCart";

const ProductCard = ({
  product,
  closeIcon,
  isFavorite,
  handleToggleFavorite,
}) => {
  const labelChip = product?.category;
  const isInFavorites = isFavorite(product);
  const { isInCart, toggleCartlist } = storeCart((state) => state);

  const handleAddCart = (product) => {
    toggleCartlist(product);
  };

  return (
    <div>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "transparent",
          borderRadius: "4px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          mb: "8px",
          height: "auto",
          margin:"auto"
        }}
      >
        <CardContent
          style={{ paddingTop: 8 }}
        >
          <Grid
            container
            spacing={1}
            alignItems="center"
            style={{ margin:"auto" }}
          >
            <Grid item xs={12} sx={{ ml: 0 }}>
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
                    ml: -2,
                    mb: 2,
                    paddingX: 0.6,
                    paddingY: 0.2,
                  }}
                />
                {closeIcon && (
                  <IconButton
                    aria-label="close"
                    onClick={() => handleToggleFavorite(product)}
                    style={{ padding: 0 }}
                    title="Eliminar de favoritos"
                  >
                    <CloseIcon
                      style={{
                        color: "#1B1AFF",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  </IconButton>
                )}
              </div>
            </Grid>
            <Grid item xs={12} style={{magin:"auto", paddingRight: 8}}>
              <Link to={`/product/${product.id}`} style={{ textDecoration: "none", margin:"auto" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "max-content",
                    height: "auto",
                    // objectFit: "cover",
                    // paddingInline: "0px",
                    // paddingRight: "0px",
                    // paddingBottom: "20px",
                    margin:"auto"
                  }}
                />
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="space-between"
        style={{ height: "auto", width: "auto" }}
      >
        <div style={{ display: "flex", justifyContent:"space-between", gap: 4 }}>
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

        <IconButton
          title={
            isInFavorites ? "Eliminar de favoritos" : "Agregar a favoritos"
          }
          disableRipple
          aria-label="add to favorites"
          onClick={() => handleToggleFavorite(product)}
          style={{paddingRight: 0}}
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
          {product.name}
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
          ${product.price.toFixed(2)}
        </Typography>
        <CardActions
          style={{ padding: "0px", marginInline: "0px", width: "auto" }}
        >
          <Button
            variant={isInCart(product) ? "contained" : "outlined"}
            color="primary"
            fullWidth
            disableRipple
            style={{
              fontWeight: 700,
              color: isInCart(product) ? "#FFFFFF" : "#1B1AFF",
              backgroundColor: isInCart(product) ? "#1B1AFF" : "transparent",
              borderRadius: "6px",
              border: isInCart(product) ? "none" : "1px solid #1B1AFF",
            }}
            onClick={() => handleAddCart(product)}
          >
            {isInCart(product) ? "Eliminar del carrito" : "Añadir al carrito"}
          </Button>
        </CardActions>
      </Grid>
    </div>
  );
};

ProductCard.defaultProps = {
  closeIcon: false,
};

export default ProductCard;
