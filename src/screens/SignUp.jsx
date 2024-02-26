import {
  Grid,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import carImg from "../assets/Img/car.png";
import SignUpForm from "../components/forms/SignUpForm";

function SignUp() {
  const theme = createTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const breakPoint = useMediaQuery((theme) => theme.breakpoints.down("xl"));
  return (
    <ThemeProvider theme={theme}>
      {!isMobile ? (<Grid
        wrap="wrap-reverse"
        sx={{
          backgroundColor: "#FFEACB",
          width: "100%",
          height: "100vh",
          padding: 10,
          margin: 0,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          overflowY: "scroll"
        }}
      >
        {!breakPoint && (
          <Grid item xs={12} sm={6} md={4} >
            <img
              src={carImg}
              alt="carImage"
              style={{ height: "auto", maxWidth: "100%" }}
            />
          </Grid>
        )}
        <Grid item xs={12} sm={6} md={4}>
          <SignUpForm />
        </Grid>
      </Grid>) : (
        <Grid item xs={12} sm={6} md={4}>
        <SignUpForm />
      </Grid>
      )}
      
    </ThemeProvider>
  );
}

export default SignUp;
