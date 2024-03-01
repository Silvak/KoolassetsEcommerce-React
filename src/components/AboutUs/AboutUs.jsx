import { Grid } from "@mui/material";
import AboutInfo from "./AboutInfo";

function AboutUs() {
  return (
    <Grid sx={{backgroundColor: "#FFFFFF", marginTop: 6, border: "1px solid white", paddingTop: 4}}>
        <AboutInfo />
    </Grid>
  )
}

export default AboutUs;