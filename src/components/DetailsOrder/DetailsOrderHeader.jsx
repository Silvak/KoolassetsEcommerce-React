import { Box } from "@mui/material";
import { headerStyles } from "./styles";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const DetailsOrderHeader = () => {
  const css = headerStyles();

  return (
    <Box className={css.header}>
      <Box className={css.title}>
        <p>Detalles de órdenes</p>
      </Box>
      <Breadcrumb path={"Órdenes / Detalles"} dashboard={"true"} />
    </Box>
  );
};
export default DetailsOrderHeader;
