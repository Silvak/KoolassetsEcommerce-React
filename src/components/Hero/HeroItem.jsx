import { Box, useMediaQuery } from "@mui/material";

import HeroImg from "@/components/Hero/HeroImg";
import HeroText from "@/components/Hero/HeroText";

const HeroItem = ({ url }) => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{
        background: "linear-gradient(#32346A,#454775)",
        borderRadius: "24px",
        padding: "30px",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: isDesktop ? "row" : "column",
        gap: "30px",
      }}
    >
      <HeroText />
      <HeroImg url={url} />
    </Box>
  );
};
export default HeroItem;
