import { Grid } from "@mui/material";

import Facebook from "@/components/buttons/FacebookButton";
import Google from "@/components/buttons/GoogleButton";

const SocialButtons = () => {
  return (
    <Grid container spacing={4} >
      <Grid item xs={12} md={6}>
        <Google />
      </Grid>
      <Grid item xs={12} md={6}>
        <Facebook />
      </Grid>
    </Grid>
  );
};
export default SocialButtons;