import { useState } from "react";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useForm from "@/hooks/useForm";
import Checkbox from "@mui/material/Checkbox";

function PaymentDetails() {
  const [isChecked, setIsChecked] = useState(false);
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
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    console.log("Form Data:", formState);
    console.log("Checkbox Checked:", isChecked);

    if (isChecked) {
      console.log("Datos guardados");
    }
  };

  return (
    <Grid container columns={{ xs: 1, lg: 2 }} spacing={2}>
      {/* Column 1 */}
      <Grid item xs={1}>
        <Stack gap={2}>
          <TextField
            variant="outlined"
            label="Nombre"
            style={{
              height: "60px",
            }}
            value={formState.nombre}
            onChange={(e) => handleInputChange("nombre", e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Apellido"
            style={{
              height: "60px",
            }}
            value={formState.apellido}
            onChange={(e) => handleInputChange("apellido", e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Dirección 1"
            style={{
              height: "60px",
            }}
            value={formState.direccion1}
            onChange={(e) => handleInputChange("direccion1", e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Dirección 2"
            style={{
              height: "60px",
            }}
            value={formState.direccion2}
            onChange={(e) => handleInputChange("direccion2", e.target.value)}
          />
        </Stack>
      </Grid>

      {/* Columna 2 */}
      <Grid item xs={1}>
        <Stack gap={2}>
          <TextField
            variant="outlined"
            label="País"
            style={{
              height: "60px",
            }}
            value={formState.pais}
            onChange={(e) => handleInputChange("pais", e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Ciudad"
            style={{
              height: "60px",
            }}
            value={formState.ciudad}
            onChange={(e) => handleInputChange("ciudad", e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Número de Teléfono"
            style={{
              height: "60px",
            }}
            value={formState.telefono}
            onChange={(e) => handleInputChange("telefono", e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Correo"
            style={{
              height: "60px",
            }}
            value={formState.correo}
            onChange={(e) => handleInputChange("correo", e.target.value)}
          />
        </Stack>
      </Grid>

      <Grid item xs={1} lg={2}>
        <Stack direction={"row"} gap={2}>
          <Checkbox
            checked={isChecked}
            onChange={handleCheckboxChange}
            style={{ color: "#1B1AFF" }}
          />
          <Typography
            variant="body1"
            color="initial"
            style={{ fontSize: "16px", fontWeight: 400 }}
          >
            Recordar información
          </Typography>
        </Stack>
      </Grid>

      {/* Button */}
      <Grid item xs={1} lg={2}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{
            width: "100%",
            boxShadow: "none",
            height: "52px",
            borderRadius: "6px",
            background: "#1B1AFF",
            color: "white",
            marginTop: "28px",
          }}
        >
          Pagar
        </Button>
      </Grid>
    </Grid>
  );
}

export default PaymentDetails;
