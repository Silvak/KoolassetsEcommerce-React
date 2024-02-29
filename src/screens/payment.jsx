import { useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Hook
function useForm(initialState) {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (fieldName, value) => {
    setFormState({
      ...formState,
      [fieldName]: value,
    });
  };

  return [formState, handleInputChange];
}

function PaymentDetails() {
  const [formState, handleInputChange] = useForm({
    nombre: "",
    apellido: "",
    direccion1: "",
    direccion2: "",
    pais: "",
    ciudad: "",
    telefono: "",
    correo: "",
  });

  const handleSubmit = () => {
    console.log(formState);
  };

  return (
    <Grid container columns={{ xs: 1, lg: 2 }} sx={{ width: "100%" }}>
      {/* Column 1 */}
      <Grid item sx={1}>
        <Stack sx={{ float: "left", marginRight: "20px" }}>
          <TextField
            label="Nombre"
            style={{
              height: "60px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
            value={formState.nombre}
            onChange={(e) => handleInputChange("nombre", e.target.value)}
          />
          <TextField
            label="Apellido"
            style={{
              height: "60px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
            value={formState.apellido}
            onChange={(e) => handleInputChange("apellido", e.target.value)}
          />
          <TextField
            label="Dirección 1"
            style={{
              height: "60px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
            value={formState.direccion1}
            onChange={(e) => handleInputChange("direccion1", e.target.value)}
          />
          <TextField
            label="Dirección 2"
            style={{
              height: "60px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
            value={formState.direccion2}
            onChange={(e) => handleInputChange("direccion2", e.target.value)}
          />
        </Stack>
      </Grid>

      {/* Columna 2 */}
      <Grid item xs={1}>
        <Stack sx={{ float: "left" }}>
          <TextField
            label="País"
            style={{
              height: "60px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
            value={formState.pais}
            onChange={(e) => handleInputChange("pais", e.target.value)}
          />
          <TextField
            label="Ciudad"
            style={{
              height: "60px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
            value={formState.ciudad}
            onChange={(e) => handleInputChange("ciudad", e.target.value)}
          />
          <TextField
            label="Número de Teléfono"
            style={{
              height: "60px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
            value={formState.telefono}
            onChange={(e) => handleInputChange("telefono", e.target.value)}
          />
          <TextField
            label="Correo"
            style={{
              height: "60px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
            value={formState.correo}
            onChange={(e) => handleInputChange("correo", e.target.value)}
          />
        </Stack>
      </Grid>

      {/* Button */}
      <Grid item xs={1} lg={2}>
        <Button sx={{ marginTop: "10px" }} onClick={handleSubmit}>
          Enviar
        </Button>
      </Grid>
    </Grid>
  );
}

import { productsData } from "@/mock/productData";

const totalMock = [
  {
    name: "Subtotal",
    value: "999.0",
  },
  {
    name: "Descuentos",
    value: "0",
  },
  {
    name: "Envío",
    value: "999.0",
  },
  {
    name: "Impuestos",
    value: "999.0",
  },
  {
    name: "Total",
    value: "9999.0",
  },
];

function ShoppingCartList() {
  return (
    <Stack direction={"column"}>
      <Stack sx={{ height: "500px", overflowY: "scroll" }}>
        {productsData.map((element, key) => (
          <Grid
            key={element.id}
            container
            columns={3}
            sx={{
              borderTop: "1px solid #ECECEC",
              py: 4,
              width: "100%",
            }}
          >
            <Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  height: "80px",
                  width: "80px",
                  background: "gray",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={element.image}
                  alt=""
                  style={{ objectFit: "contain", width: "100%" }}
                />
              </Box>

              <Stack
                direction={"column"}
                justifyContent={"space-between"}
                sx={{ height: "100%", pl: 3 }}
              >
                <Typography
                  variant="body1"
                  component={"p"}
                  color="initial"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                >
                  {element.name}
                </Typography>

                <Typography
                  variant="body1"
                  component={"p"}
                  color="initial"
                  style={{ fontSize: "16px", fontWeight: 400 }}
                >
                  Cantidad: {1}
                </Typography>
              </Stack>
            </Grid>

            <Grid
              item
              xs={1}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                style={{ fontSize: "16px", fontWeight: 400 }}
              >
                $ {element.price}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Stack>

      <Stack sx={{ gap: 2, py: 2, borderTop: "1px solid #ECECEC" }}>
        {totalMock.map((element, index) => (
          <Stack
            key={index}
            direction={"row"}
            justifyContent={"space-between"}
            sx={{
              borderTop: element.name == "Total" ? "1px solid #ECECEC" : "none",
              pt: element.name == "Total" ? 2 : 0,
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              style={{ fontSize: "16px", fontWeight: 400 }}
            >
              {element.name}
            </Typography>

            <Typography
              variant="body1"
              color="initial"
              style={{ fontSize: "16px", fontWeight: 400 }}
            >
              {element.value}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

function Payment() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "24px",
        marginBottom: "80px",
      }}
    >
      <Grid
        container
        spacing={0}
        columns={{ xs: 1, lg: 2 }}
        sx={{ maxWidth: "1300px" }}
      >
        <Grid item xs={1}>
          <Typography
            variant="body1"
            color="initial"
            style={{ fontSize: "32px", fontWeight: 400 }}
            mb={6}
          >
            Detalels de pago
          </Typography>

          {/* form payment */}
          <PaymentDetails />
        </Grid>

        <Grid item xs={1}>
          <Typography
            variant="body1"
            color="initial"
            style={{ fontSize: "32px", fontWeight: 400 }}
            mb={6}
          >
            Lista de compras
          </Typography>
          {/* cart list */}
          <ShoppingCartList />
        </Grid>
      </Grid>
    </div>
  );
}

export default Payment;
