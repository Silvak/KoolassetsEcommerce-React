import { Button, IconButton } from "@mui/material";
import FacebookIcon from "@/assets/Img/png/logoFacebook.png";

const Facebook = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "icon.primary",
        borderColor: "icon.primary",
        width: "100%",
        height: "48px",
        padding: "6px 12px",
        borderRadius: "240px",
        // Aplicando estilos al texto del botón para evitar el ajuste
        "& .MuiButton-label": {
          whiteSpace: "nowrap !important",
        },
      }}
      startIcon={
        <IconButton size="small">
          <img src={FacebookIcon} alt="google icon" width="28px" />
        </IconButton>
      }
    >
    </Button>
  );
};

export default Facebook;