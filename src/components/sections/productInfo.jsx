import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const SPECS = [
  { fieldName: "Dimensiones", value: "99.9 x 99.9 x 99.9 cm" },
  { fieldName: "Peso", value: "99.9kg" },
  { fieldName: "Código", value: "A00010002" },
  { fieldName: "Fecha de lanzamiento", value: "Febrero 2024" },
  { fieldName: "Colores disponibles", value: "blue green white" },
  { fieldName: "Característica", value: "------" },
  { fieldName: "Característica", value: "------" },
  { fieldName: "Característica", value: "------" },
];

function ProductInfo(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === props.product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Grid
      container
      columns={{ xs: 1, lg: 2 }}
      sx={{
        maxWidth: "1200px",
        p: 0,
        m: 0,
      }}
    >
      <Typography
        variant="body1"
        color="initial"
        style={{ fontSize: "32px", fontWeight: 400 }}
        mb={6}
      >
        Más información acerca del producto
      </Typography>

      <Grid item xs={1}>
        {/* ---- IMAGES ---- */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            height: "450px",
            p: 2,
          }}
        >
          <img
            src={props.product.images[currentIndex]}
            alt=""
            style={{ objectFit: "contain" }}
          />
          {/* Botones de navegación */}
          <Button
            onClick={prevSlide}
            sx={{ position: "absolute", left: 0, top: "43%", p: 1 }}
          >
            <HiOutlineArrowSmLeft
              style={{ fontSize: "38px", color: "black" }}
            />
          </Button>
          <Button
            onClick={nextSlide}
            sx={{
              position: "absolute",
              right: 0,
              top: "43%",
              p: 1,
            }}
          >
            <HiOutlineArrowSmRight
              style={{ fontSize: "38px", color: "black" }}
            />
          </Button>
        </Box>
      </Grid>

      {/* ---- SPECS ---- */}
      <Grid item xs={1}>
        <Stack sx={{ pl: { xs: 0, lg: 6 } }}>
          {SPECS.map((element, index) => (
            <Stack
              key={index}
              direction={"row"}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #DFDFDF",
                height: "56px",
              }}
            >
              <Typography
                variant="body1"
                style={{ fontSize: "16px", fontWeight: 400 }}
              >
                {element.fieldName}
              </Typography>

              <Typography
                variant="body1"
                style={{ fontSize: "16px", fontWeight: 400 }}
              >
                {element.value}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ProductInfo;
