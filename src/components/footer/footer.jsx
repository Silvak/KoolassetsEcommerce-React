import { Grid, Typography, Link, Divider, Box, useMediaQuery, createTheme, ThemeProvider } from "@mui/material";
import { footerItems } from "../../utils/footerItems";
import FooterMobile from "./footerMobile";
function Footer() {
  const theme = createTheme()
  const mdQuery = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
  { !mdQuery ?   (<Grid
      container
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#090A0B",
        padding: "36px 150px",
        gap: "36px",
        maxHeight: !mdQuery ? "362px" : "",
      }}
    >

      <Grid
        container
        component="footerItems"
        sx={
          {
            justifyContent: "center"
            // gap: "24px",
          }
        }
      >
        {footerItems.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={3}
            key={item.id}
            id={item.id}
            sx={{ gap: "16px", maxWidth: "267px" }}
          >
            <Grid>
              <Typography variant="h6">
                <Link
                  href={item.link}
                  sx={{ textDecoration: "none", color: "#EFEFEF" }}
                >
                  {item.title}
                </Link>
              </Typography>
            </Grid>

            <Grid xs={12} id={item.id}>
              {item.info.map((info, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{ marginBlock: "12px", color: "#B9B9B9", maxWidth: "257px" }}
                >
                  {info.link ? (
                    <Link
                      href={info.link}
                      sx={{ textDecoration: "none", color: "#B9B9B9", '&:hover': { color: '#1B1AFF' } }}
                    >
                      {info.subinfo}
                    </Link>
                  ) : (
                    info.subinfo
                  )}
                </Typography>
              ))}
              {
                item.button && <>{item.button}</>
              }
            </Grid>
          </Grid>
        ))}
            <Divider variant="middle" sx={{ width: "100%", height: "1px", backgroundColor: "#615D5D", marginTop: "36px"}}/>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            marginTop: "36px"
          }}
        >
          <Typography  sx={{color: "#EFEFEF"}}>Company Logo</Typography>
          <Typography variant="body2" sx={{color: "#EFEFEF"}}>Todos los Derechos Reservados</Typography>
        </Box>
      </Grid>
    </Grid>) : (
      <FooterMobile />
    )}
    </ThemeProvider>
  );
}

export default Footer;
