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
  Box,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { BsCartPlus, BsCartDash } from "react-icons/bs";
import { Link } from "react-router-dom";

function CardGeneral({
    product,
    isFavorite,
    closeIcon,
    handleToggleFavorite,
    isInCart,
    handleToggleCart,
    topsell

}) {
  const labelChip = product?.category;
  const isInFavorites = isFavorite(product);
  const isProductInCart = isInCart(product);
    // console.log(product);
  const handleAddCart = (product) => {
    toggleCartlist(product);
  };

  return (
    <div style={{ maxWidth: "247px"}}>
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
          margin: "auto",
          minHeight: "345px",
          width: "247px"
        }}
      >
        <CardContent style={{ paddingTop: 8 }}>
          <Grid
            container
            spacing={1}
            alignItems="center"
            style={{ margin: "auto" }}
          >
            <Grid item xs={12} sx={{ ml: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: !topsell ? "end" :"space-between",
                }}
              >
               {topsell && <Chip
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
                />}
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
            <Grid item xs={12} style={{ magin: "auto", paddingRight: 8 }}>
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", margin: "auto" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    minHeight: 300,
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
        <div
          style={{ display: "flex", justifyContent: "space-between", gap: 4 }}
        >
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
            style={{ paddingRight: 0 }}
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
        <Typography variant="body2" color={"#0AC733"} fontWeight={"normal"}>
          Disponible
        </Typography>
        <Typography
          variant="body2"
          color={"#615D5D"}
          fontWeight={"normal"}
          style={{
            marginBlock: 10,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
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
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>

          <CardActions
            style={{ padding: "0px", marginInline: "0px", width: "auto" }}
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
              VER DETALLES
            </Button>
          </CardActions>
        </Link>
      </Grid>
    </div>
  );
}

CardGeneral.defaultProps = {
  closeIcon: false,
};

export default CardGeneral;
