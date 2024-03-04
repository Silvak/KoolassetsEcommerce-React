import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import SocialButtons from "../buttons/socialButtons";
import { Link } from "react-router-dom";
import carImg from "../../assets/Img/car.png";

function SignInForm() {
  const theme = createTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={1}
        sx={{
          borderRadius: "24px",
          padding: "50px",
          maxHeight: "100vh",
          overflowY: "auto",
          margin: "auto",
          backgroundColor: "#F9F9F9",
          width: !isMobile ? "579px" : "100%",
          height: isMobile ? "90vh" : "auto"
        }}
      >
        
        {/* Form Header */}
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="h4">Inicia sesión en Tienda!</Typography>
          <Typography variant="body2">
            Escribe tus datos para iniciar sesión.
          </Typography>
        </Box>
        {/* Form inputs*/}
        
        <Box>
          <Grid item sx={{ marginBottom: "17px" }}>
            <TextField
              placeholder="Usuario o correo"
              id="email"
              name="email"
              sx={{ width: "100%" }}
            />
          </Grid>

          <Grid item sx={{ marginBottom: "17px" }}>
            <TextField
              placeholder="Contraseña"
              id="password"
              name="password"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Typography>
            <Link style={{ textDecoration: "none", color: "#1B1AFF" }}>
              Olvidé mi contaseña
            </Link>
          </Typography>
          <Grid item sx={{ marginBottom: "17px" }}>
            <Button
              title="Iniciar sesión"
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "#1B1AFF",
                height: "57px",
                textTransform: "none",
                color: "#FFFFFF",
                fontFamily: "DM Sans",
                fontSize: "18px",
                fontWeight: "700px",
              }}
            >
              Iniciar sesión
            </Button>
          </Grid>
          <Box>
            <SocialButtons />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Typography>¿No tienes una cuenta? </Typography>
            <Typography sx={{ marginLeft: "5px" }}>
              <Link
                to="/sign-up"
                style={{ textDecoration: "none", color: "#1B1AFF" }}
              >
                ¡Unetenos!
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default SignInForm;
