import HomeList from "./HomeList";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { productsData } from "../../mock/productData";

function HomeProducts() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/categories")
  }

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        gap: "40px",
        height: "100%",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "start" }}>
        <Typography
          variant="h2"
          sx={{ padding: 4, marginTop: "90px", marginBottom: "40px" }}
        >
          Productos más vendidos
        </Typography>
      </div>

      <HomeList products={productsData} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Button
          onClick={handleClick}
          sx={{
            backgroundColor: "#1B1AFF",
            borderRadius: "6px",
            marginBottom: "70px",
            color: "#FFFFFF",
          }}
        >
          Explorar ahora
        </Button>
      </div>
    </div>
  );
}

export default HomeProducts;
