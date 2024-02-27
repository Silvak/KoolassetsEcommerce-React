import { Box, useMediaQuery } from "@mui/material";

import HeroImg from "@/components/Hero/HeroImg";
import HeroText from "@/components/Hero/HeroText";

const HeroItem = ({ url }) => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{
        background: "linear-gradient(to right,#32346A,#454775)",
        borderRadius: "24px",
        padding: isDesktop ? "10px 0 10px 60px" : "30px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: isDesktop ? "row" : "column",
        gap: isDesktop ? "0" : "30px",
      }}
    >
      <HeroText />
      <HeroImg url={url} />
    </Box>
  );
};
export default HeroItem;
