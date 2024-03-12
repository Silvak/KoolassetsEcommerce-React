import { Box } from "@mui/material";

const MethodsIcons = ({ iconUrl, title }) => {
  return (
    <Box
      sx={{
        width: "70px",
        height: "40px",
        borderRadius: "6px",
        background: "#FFF",
        display: "grid",
        placeContent: "center",
        padding: "0 10px",
      }}
    >
      <img src={iconUrl} alt={`method payment icon ${title}`} />
    </Box>
  );
};
export default MethodsIcons;
