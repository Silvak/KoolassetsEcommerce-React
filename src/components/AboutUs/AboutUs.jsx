import { Box, Grid } from "@mui/material";
import AboutInfo from "./AboutInfo";

function AboutUs() {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <AboutInfo />
    </Box>
  );
}

export default AboutUs;
