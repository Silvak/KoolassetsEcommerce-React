import React, { useState } from "react";
import { Grid, Typography, Button, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function ProfileDetails({ user }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Grid container spacing={2} style={{width:"60vw"}}>
            <Grid item xs={12}>
                <Typography variant="span" sx={{ color: "#000", fontSize: "24px", fontWeight: 500 }}>Detalles de tu perfil</Typography>
            </Grid>

            <Grid item xs={12} container spacing={4}>
                <Grid item xs={4}>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#aaaaaa", fontSize: 24, fontWeight: 400 }}>Nombres</Typography>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#000", fontSize: 24, borderBottom: "1px solid" }}>{user.name}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#aaaaaa", fontSize: 24, fontWeight: 400 }}>Apellidos</Typography>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#000", fontSize: 24, fontWeight: 400 }}>{user.lastName}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#aaaaaa", fontSize: 24, fontWeight: 400 }}>Fecha de creación</Typography>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#000", fontSize: 24, fontWeight: 400 }}>{user.dateCreation}</Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} container spacing={4}>
                <Grid item xs={4}>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#aaaaaa", fontSize: 24, fontWeight: 400 }}>Correo electrónico</Typography>
                    <Typography variant="h6" sx={{ wordWrap: 'break-word', color: "#000", fontSize: 24, fontWeight: 400 }}>{user.email}</Typography>                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#aaaaaa", fontSize: 24, fontWeight: 400 }}>Número telefónico</Typography>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#000", fontSize: 24, fontWeight: 400 }}>{user.phone}</Typography>                </Grid>
                <Grid item xs={4}>
                    <Typography onClick={handleTogglePasswordVisibility} variant="h6" sx={{wordWrap: 'break-word', color: "#aaaaaa", fontSize: 24, fontWeight: 400, cursor: "pointer" }}>Contraseña</Typography>
                    <Typography onClick={handleTogglePasswordVisibility} variant="h6" sx={{wordWrap: 'break-word', color: "#000", fontSize: 24, fontWeight: 400, cursor: "pointer" }}>
                        {showPassword ? user.password : '*********'}
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Button variant="contained" color="primary" sx={{ float: "right", backgroundColor: "#1B1AFF", borderRadius: "6px" }}>
                    Editar
                </Button>
            </Grid>



            <Grid item xs={12}>
                <Typography variant="span" sx={{ color: "#000", fontSize: "24px", fontWeight: 500 }}>Detalles de tu perfil</Typography>
            </Grid>
            <Grid item xs={12} container spacing={4}>
                <Grid item xs={4}>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#aaaaaa", fontSize: 400 }}>Nombres</Typography>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#000", fontSize: 400 }}>{user.name}</Typography>                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#aaaaaa", fontSize: 400 }}>Nombres</Typography>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#000", fontSize: 400 }}>{user.name}</Typography>                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#aaaaaa", fontSize: 400 }}>Nombres</Typography>
                    <Typography variant="h6" sx={{wordWrap: 'break-word', color: "#000", fontSize: 400 }}>{user.name}</Typography>                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Button variant="contained" color="primary" sx={{ float: "right", backgroundColor: "#1B1AFF", borderRadius: "6px" }}>
                    Historial de compras
                </Button>
            </Grid>

        </Grid>
    );
}

export default ProfileDetails;
