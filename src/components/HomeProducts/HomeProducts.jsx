import HomeList from "./HomeList";
import Title from "@/components/Title/Title";
import { Button, Typography } from "@mui/material";

import { productsData } from "../../mock/productData";
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
          onClick={() => {
            alert("Explorar");
          }}
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
