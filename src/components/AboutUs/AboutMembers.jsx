import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import { AboutTeam } from "../../mock/AboutTeam";
import MemberPicture from "./MemberPicture";

function AboutMembers() {
  const mdQuery = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lgQuery = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const xlQuery = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  return (
    <Grid container spacing={4}>
      {/* Text */}
      <Grid item xs={12}>
        {/* Title */}
        <Grid>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              fontSize: "36px",
              marginBottom: "50px",
              color: "#000",
            }}
          >
            Conoce a nuestro equipo
          </Typography>
        </Grid>

        {/* Description */}
        <Grid
          item
          spacing={4}
          sx={{
            marginBottom: "57px",
          }}
        >
          {AboutTeam.map((member, index) => (
            <Grid item xs={12} lg={12} key={index} id={member.id}>
              <Grid container alignItems="center" sx={{ marginBottom: "50px" }}>
                {/* Imagen del miembro del equipo */}
                <Grid
                  item
                  xs={12}
                  md={!lgQuery ? 3 : 2}
                  sx={{
                    display: !mdQuery && "flex",
                    justifyContent: !mdQuery && "center",
                    marginBottom: !mdQuery && "25px",
                  }}
                >
                  <MemberPicture
                    picture={member.picture}
                    socials={member.socials}
                  />
                </Grid>
                {/* Contenedor para los textos */}
                <Grid
                  item
                  xs={12}
                  md={9}
                  sx={{ marginLeft: lgQuery ? "50px" : "0" }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "30px",
                      fontWeight: 500,
                      color: "#000000",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="inherit"
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      marginBottom: "5px",
                    }}
                  >
                    {member.role}
                  </Typography>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#000",
                      lineHeight: 1.6,
                    }}
                  >
                    {member.description}
                  </p>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutMembers;
