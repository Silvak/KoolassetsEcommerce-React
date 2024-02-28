import HomeList from "./HomeList";
import { homeProducts } from "../../mock/homeProductsData";
import { Button, Typography } from "@mui/material";

function HomeProducts() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        gap: "40px",
        height: "100%",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "start",}}>
        <Typography variant="h2" sx={{ padding: 4, marginTop: "90px", marginBottom: "40px" }}>
          Productos más vendidos
        </Typography>
      </div>

      <HomeList products={homeProducts} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Button onClick={()=> {alert("Explorar")}} sx={{ backgroundColor: "#1B1AFF", borderRadius: "6px", marginBottom: "70px", color: "#FFFFFF",  }}>
          Explorar ahora
        </Button>
      </div>
    </div>
  );
}

export default HomeProducts;
