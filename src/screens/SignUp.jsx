import {
  Box,
  Grid,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import carImg from "../assets/Img/car.png";
import SignUpForm from "../components/forms/SignUpForm";

function SignUp() {
  const theme = createTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={theme}>
      <Grid
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
        {!isMobile && (
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
      </Grid>
    </ThemeProvider>
  );
}

export default SignUp;
