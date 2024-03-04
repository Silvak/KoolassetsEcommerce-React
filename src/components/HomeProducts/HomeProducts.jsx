import HomeList from "./HomeList";
import Title from "@/components/Title/Title";
import { Button, Typography, Grid, createTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { productsData } from "../../mock/productData";
import { ThemeProvider } from "@emotion/react";
import { useTheme } from '@mui/material/styles';

function HomeProducts() {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/categories");
  };

  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  return (
    <ThemeProvider theme={theme}>
    <div
      style={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        gap: "40px",
        height: "100%",
      }}
    >
      <Title text=" Productos más vendidos" />

      <HomeList products={productsData} />

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Button
          onClick={handleClick}
          sx={{
            borderRadius: "6px",
            marginBottom: "70px",
            color: "white",
            backgroundColor: "#1B1AFF",
            ":hover" : {
              backgroundColor: "#0404B4"
            }
          }}
        >
          Explorar ahora
        </Button>
      </Grid>
    </div>
    </ThemeProvider>
  );
}

export default HomeProducts;
