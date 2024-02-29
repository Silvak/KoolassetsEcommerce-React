import React from "react";
import { Grid, Typography, useMediaQuery, Divider, Paper, Link } from "@mui/material";
import { shipmentProgress, data } from "../../mock/shippingData";

function OrderDetail({ user }) {
    const isMobile = useMediaQuery("(max-width:700px)");

    const totalSteps = shipmentProgress.length;
    const stepHeight = isMobile ? 20 : 40;
    
    return (
        <Grid item xs={8} md={3} sx={{ position: 'relative', minWidth: "25%", maxWidth: "75%", paddingTop: 6, paddingBottom: { xs: 18, md: 4 }, ml: isMobile ? 0 : 8 }}>
            {isMobile ? (
                <div style={{ position: "relative", textAlign: "start", marginTop: 20, marginBottom: 60 }}>

                    {shipmentProgress.map((step, index) => (
                        <React.Fragment key={index}>
                            {/* Pelotita */}
                            <div style={{
                                width: step.status === "completed" ? 16 : 10,
                                height: step.status === "completed" ? 16 : 10,
                                borderRadius: "50%",
                                backgroundColor: step.status === "completed" ? "#1b1aff" : step.status === "in_progress" ? "blue" : "#dfdfdf",
                                border: step.status === "in_progress" ? "1px solid #dfdfdf" : "",
                                position: "absolute",
                                top: index * (stepHeight + 50),
                                left: step.status === "completed" ? 22.5 : 25.5,
                                transform: "translateY(-50%)",
                                zIndex: 1
                            }} />
                            {/* Texto de la ubicación */}
                            <Typography variant="body2" style={{ fontSize: 12, fontWeight: 600 }} sx={{ position: "absolute", top: index * (stepHeight + 50), left: 55, transform: "translateY(-50%)" }}>{step.location}</Typography>
                            {/* Divider */}
                            {index < totalSteps - 1 && (
                                <Divider orientation="vertical" sx={{ backgroundColor: "black", color: "#000", position: "absolute", top: (index * (stepHeight + 50)), left: 30, height: stepHeight + 50, zIndex: 0 }} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            ) : (
                // Línea de tiempo horizontal para escritorio
                <div style={{ position: "relative", marginTop: 20, marginLeft: 20 }}>
                    {shipmentProgress.map((step, index) => (
                        <React.Fragment key={index}>
                            {/* Punto de la línea de tiempo */}
                            <div style={{
                                width: step.status === "completed" ? 16 : 10,
                                height: step.status === "completed" ? 16 : 10,
                                borderRadius: "50%",
                                backgroundColor: step.status === "completed" || step.status === "in_progress" ? "blue" : "#dfdfdf",
                                position: "absolute",
                                left: `${(index / (shipmentProgress.length - 1)) * 100}%`,
                                transform: "translate(-50%, -50%)",
                                zIndex: 1
                            }} />
                            {/* Texto de la ubicación */}
                            <Typography variant="body2" style={{ fontSize: 12, fontWeight: 600 }} sx={{ position: "absolute", left: `${(index / (shipmentProgress.length - 1)) * 100}%`, top: 25, transform: "translateX(-50%)" }}>{step.location}</Typography>
                            {/* Línea entre puntos (excepto en el último) */}
                            {index < shipmentProgress.length - 1 && (
                                <div style={{
                                    position: "absolute",
                                    top: 0,
                                    left: `${(index / (shipmentProgress.length - 1)) * 100}%`,
                                    width: `${100 / (shipmentProgress.length - 1)}%`,
                                    height: 2,
                                    backgroundColor: "#dfdfdf",
                                    zIndex: 0
                                }} />
                            )}
                        </React.Fragment>
                    ))}
                </div>

            )}
        </Grid>
    );
}

export default OrderDetail;
