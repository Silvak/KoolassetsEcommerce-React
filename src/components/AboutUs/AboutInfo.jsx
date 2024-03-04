import { Grid, Typography, useMediaQuery } from "@mui/material";
import { AboutData } from "../../mock/AboutData";

function AboutInfo() {
  const mdQuery = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Grid
      container
      spacing={9}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "0",
        margin: "0",
        marginTop: "30px",

        "& > .MuiGrid-item": {
          padding: "0",
        },
      }}
    >
      {/* Text */}
      <Grid item xs={12} md={5}>
        {/* Title */}
        <Grid>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              fontSize: "36px",
              marginBottom: "35px",
              color: "#000000",
            }}
          >
            {AboutData.title}
          </Typography>
        </Grid>
        {/* Description */}
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3.2,
            marginBottom: "57px",
          }}
        >
          {AboutData.description.map((part) => (
            <Typography
              variant="inherit"
              sx={{ fontSize: "18px", fontWeight: 500, color: "#000000" }}
            >
              {part}
            </Typography>
          ))}
        </Grid>
      </Grid>
      {/* Image */}
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: !mdQuery && "flex",
          justifyContent: !mdQuery && "center",
        }}
      >
        <img
          src={AboutData.image}
          alt="AboutImage"
          style={{
            objectFit: "cover",
            width: !mdQuery ? "50%" : "100%",
            height: !mdQuery ? "100%" : "95%",
            borderRadius: !mdQuery && "50%",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default AboutInfo;
