import React, { useState } from "react";
import { Grid, Typography, Button, useMediaQuery } from "@mui/material";

function ProfileDetails({ user }) {
    const isMobile = useMediaQuery("(max-width:600px)");

    const handleBotton = (text) => {
        alert(`Toqué el botón ${text}`)
    }

    const renderDetail = (label, value, onClick = null) => (
        <Grid item xs={8} md={3} sx={{ minWidth: "30%", textAlign: "left" }} >
            <Typography variant="h6" sx={{ wordWrap: 'break-word', color: "#aaaaaa", fontWeight: 400, mr: 4 }} style={{ fontSize: "16px" }}>{label}</Typography>
            <Typography variant="h6" style={{ fontSize: "16px" }} sx={{ wordWrap: 'break-word', color: "#000", fontWeight: 500, mr: 4 }}>{value}</Typography>
        </Grid>
    );

    const renderDetailWithNameBorder = (label, value, onClick = null) => (
        <Grid item xs={8} md={3} sx={{ position: 'relative', minWidth: "30%", textAlign: "left" }}>
            <Typography variant="h6" sx={{ wordWrap: 'break-word', color: "#aaaaaa", fontWeight: 400, mr: 4 }} style={{ fontSize: "16px" }}>{label}</Typography>
            <Typography variant="h6" style={{ fontSize: "16px" }} sx={{ wordWrap: 'break-word', color: "#000", fontWeight: 500, borderBottom: label === "Nombres" ? '1px solid #000' : 'none', paddingBottom: label === "Nombres" ? '4px' : '0', mr: 4 }}>{value}</Typography>
        </Grid>
    );


    return (
        <Grid container spacing={2} style={{ width: "100%", textAlign: "left", marginLeft: isMobile ? "10px" : 0 }}>
            <Grid item xs={12} sx={6}>
                <Typography variant="span" sx={{ color: "#000", fontSize: "24px", fontWeight: 500 }}>Detalles de tu perfil</Typography>
            </Grid>

            <Grid item xs={12} container spacing={4}>
                {renderDetailWithNameBorder("Nombres", user.name)}
                {renderDetail("Apellidos", user.lastName)}
                {renderDetail("Fecha de creación", user.dateCreation)}
            </Grid>

            <Grid item xs={12} container spacing={4}>
                {renderDetail("Correo electrónico", user.email)}
                {renderDetail("Número telefónico", user.phone)}
                {renderDetail("Contraseña", '*********')}
            </Grid>

            <Grid item xs={12}>
                <Button variant="contained" color="primary" sx={{ float: "right", marginBlock: 4, marginRight: "4vw", backgroundColor: "#1B1AFF", borderRadius: "6px" }} onClick={() => handleBotton("Editar")}>
                    Editar
                </Button>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="span" sx={{ color: "#000", fontSize: "24px", fontWeight: 500 }}>Detalles de compras</Typography>
            </Grid>

            <Grid item xs={12} container spacing={4}>
                {renderDetail("Compras totales", user.totalPurchases)}
                {renderDetail("Devoluciones totales", user.totalReturn)}
                {renderDetail("Cancelaciones totales", user.totalCancel)}
            </Grid>

            <Grid item xs={12}>
                <Button variant="contained" color="primary" sx={{ float: "right", marginBlock: 4, marginRight: "4vw", backgroundColor: "#1B1AFF", borderRadius: "6px" }} onClick={() => handleBotton("Historial de compras")}>
                    Historial de compras
                </Button>
            </Grid>
        </Grid>
    );
}

export default ProfileDetails;
