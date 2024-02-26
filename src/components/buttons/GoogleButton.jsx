import { Button, IconButton } from "@mui/material";

import GoogleIcon from "@/assets/Img/webp/logoGoogle.webp";

const Google = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "icon.primary",
        borderColor: "icon.primary",
        padding: "2px 18px",
        width: "100%",
        height: "48px",
        borderRadius: "240px",
      }}
      startIcon={
        <IconButton size="small">
          <img src={GoogleIcon} alt="google icon" width="24px" />
        </IconButton>
      }
    >
    </Button>
  );
};
export default Google;