import { Box, Grid } from "@mui/material";

import CustomInput from "@/components/Input/CustomInput";

const UserData = () => {
  return (
    <Box>
      <h3
        style={{
          color: "#000000",
          fontSize: "clamp(18px,2vw,28px)",
          margin: "10px 0",
        }}
      >
        Facturación
      </h3>
      <Box
        sx={{
          background: "#ECECEC",
          padding: "50px 15px",
          borderRadius: "6px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,300px))",
          columnGap: "20px",
          rowGap: "30px",
          justifyContent: "center",
        }}
      >
        <CustomInput
          placeholder="nombres"
          id="nombres"
          label="Nombres"
          onChange={(event) => console.log(event.target.value)}
        />
        <CustomInput placeholder="apellidos" id="apellidos" label="Apellidos" />
        <CustomInput placeholder="país" id="país" label="País" />
        <CustomInput
          placeholder="nombre de compañía"
          id="nombre de compañía"
          label="Nombre de compañía"
        />
        <CustomInput
          placeholder="estado/ciudad"
          id="estado/ciudad"
          label="Estado/ciudad"
        />
        <CustomInput
          placeholder="código postal"
          id="código postal"
          label="Código postal"
        />
        <CustomInput
          placeholder="dirección de calle"
          id="dirección de calle"
          label="Dirección de calle"
        />
        <CustomInput
          placeholder="número telefónico"
          id="número telefónico"
          label="Número telefónico"
        />
      </Box>
    </Box>
  );
};
export default UserData;
