import HomeList from "./HomeList";
import Title from "@/components/Title/Title";
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
      <Title text=" Productos más vendidos" />

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
