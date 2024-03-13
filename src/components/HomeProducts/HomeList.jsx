import { Grid, ThemeProvider, createTheme } from "@mui/material";
import HomeCard from "./HomeCard";
import { storeFavorites } from "../../stores/favorites/storeFavorites";
import { storeCart } from "../../stores/cart/storeCart";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 1100,
      lg: 1380,
      xl: 1700,
    },
  },
});

function HomeList({ products }) {
  const { toggleFavorite, isFavorite } = storeFavorites((state) => ({
    toggleFavorite: state.toggleFavorite,
    isFavorite: state.isFavorite,
  }));

  //cart
  const { isInCart, toggleCartlist } = storeCart((state) => state);

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={0} width={"100%"} height={"auto"} gap={0} justifyContent={"center"}>
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2.4}
            key={product.id}
            sx={{
              mb: "32px",
              p:1,
              display: "flex",
              justifyContent: "center",
              [theme.breakpoints.down("lg")]: {},
            }}
            maxWidth={324}
          >
            <HomeCard
              product={product}
              isFavorite={isFavorite}
              handleToggleFavorite={toggleFavorite}
              isInCart={isInCart}
              handleToggleCart={toggleCartlist}
            />
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}

export default HomeList;
