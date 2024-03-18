import { Grid, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import carImg from "@/assets/Img/png/cart.png";
import SignInForm from "@/components/forms/SignInForm";

function SignIn() {
  const theme = createTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const breakPoint = useMediaQuery((theme) => theme.breakpoints.down("xl"));
  return (
    <ThemeProvider theme={theme}>
      <div>
        {!isMobile ? (
          <Grid
            wrap="wrap-reverse"
            sx={{
              width: "100%",
              padding: "100px 0",
              margin: 0,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {!breakPoint && (
              <Grid item xs={12} sm={6} md={4}>
                <img
                  src={carImg}
                  alt="carImage"
                  style={{
                    height: "auto",
                    overflowY: "clip",
                    maxWidth: "100%",
                    transform: "rotateY(180deg)",
                  }}
                />
              </Grid>
            )}
            <Grid item xs={12} sm={6} md={4}>
              <SignInForm />
            </Grid>
          </Grid>
        ) : (
          <Grid item xs={12} sm={6} md={4} mb={4} minWidth="300px">
            <SignInForm />
          </Grid>
        )}
      </div>
    </ThemeProvider>
  );
}

export default SignIn;
