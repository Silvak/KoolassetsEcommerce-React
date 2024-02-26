import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  useMediaQuery,
  createTheme,
} from "@mui/material";
import SocialButtons from "../buttons/socialButtons";
import { Link } from "react-router-dom";
import carImg from "../../assets/Img/car.png";

function SignUpForm() {
  const theme = createTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={1}
        sx={{
          borderRadius: "24px",
          padding: "50px",
          backgroundColor: isMobile ? "#FFEACB" : "#F9F9F9",
          width: !isMobile ? "579px" : "100%",
          maxHeight: "100vh",
          overflowY: "auto",
          margin: "auto",
        }}
      >
        {isMobile && (
          <Grid overflow={"hidden"}>
            <img src={carImg} alt="logo" style={{ width: "100%" }} />
          </Grid>
        )}
        {/* Form Header */}
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="h4">Regístrate en Tienda!</Typography>
          <Typography variant="body2">
            Escribe tus datos para crear una cuenta.
          </Typography>
        </Box>
        {/* Form inputs*/}
        <Box>
          <Grid item sx={{ marginBottom: "17px" }}>
            <TextField
              placeholder="Dirección de correo"
              id="email"
              name="email"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item sx={{ marginBottom: "17px" }}>
            <TextField
              placeholder="Usuario"
              id="user"
              name="user"
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
          <Grid item sx={{ marginBottom: "17px" }}>
            <Button
              title="Registrarse"
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
              Registrarse
            </Button>
          </Grid>
          <Box>
            <SocialButtons />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <Typography>¿Tienes una cuenta? </Typography>
            <Typography sx={{ marginLeft: '5px' }}>
              <Link to="/sign-in" style={{ textDecoration: "none", color: "#1B1AFF" }}>
                ¡Inicia sesión!
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default SignUpForm;
