import React from "react";
import { invoiceData, data } from "../../mock/shippingData";
import { useMediaQuery, Grid, Link, Paper, Box, Typography } from "@mui/material/";
import OrderDetail from "./ordersDetail";


const styleTitle = {
    fontSize: "14px",
    color: "#615D5D",
    fontWeight: 500,
    width: "max-content",
}

const styleValue = {
    fontSize: "14px",
    color: "#000000",
    fontWeight: 500,
    width: "max-content",
    marginTop: 6,
    marginBottom: "16px"
}

const InvoiceBox = () => {
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <Box sx={{ borderRadius: "4px", marginTop: isMobile ? 2 : 6 , width: "100%" }}>
            <Grid container spacing={3} style={{ marginLeft: isMobile ? 8 : 0 }}>
                {/* Columna 1: Número de factura */}
                <Grid item xs={12} sm={isMobile ? 4 : 2} sx={{borderRight: isMobile ? 0 : 1, borderColor: "#D9D9D9", paddingRight: isMobile ? 0 : 25}}>
                    <Typography style={styleTitle} variant="h6">Número de factura</Typography>
                    <Typography style={styleValue} variant="h6">{invoiceData.invoiceNumber}</Typography>
                </Grid>

                {/* Columna 2: Realizado */}
                <Grid item xs={12} sm={isMobile ? 4 : 2} sx={{ ml: isMobile ? 0 : 4, mr: isMobile ? 0 : 6}}>
                    <Typography style={styleTitle} variant="h6">Realizado</Typography>
                    <Typography style={styleValue} variant="h6">{invoiceData.invoiceDate}</Typography>
                </Grid>

                {/* Columna 3: Total */}
                <Grid item xs={12} sm={4} sx={{ml: isMobile ? 0 : 6, borderLeft: isMobile ? 0 : 1, borderColor: "#D9D9D9",}}>
                    <Typography style={styleTitle} variant="h6">Total</Typography>
                    <Typography style={styleValue} variant="h6">{invoiceData.total}</Typography>
                </Grid>
            </Grid>
            <OrderDetail />
            <Grid container spacing={2} sx={{
                paddingX:1,
                mt: isMobile ? 12 : 8, mb: 5, maxWidth: isMobile ? "100vw" : "85%",
                position:"relative"
            }}>
                {data?.map((item, index) => (
                    <Grid item xs={12} key={index}>
                        <Paper sx={{ padding: "12px", backgroundColor: "#ececec", borderRadius: 2, overflow: "hidden" }}>
                            <div style={{ display: "flex", flexDirection: isMobile ? "column": "row", alignItems: "center", justifyContent:"left", gap:"2rem" }}>
                                <Typography style={{ fontSize: 14, marginBottom: 8 }} variant="h6">{item.text}</Typography>
                                {!isMobile && <Typography style={{ fontSize: 14, marginBottom: 8 }} variant="h6">/</Typography>}
                                <Typography style={{ fontSize: 14, marginBottom: 8 }} variant="h6">{item.status}</Typography>
                                {item.action && <Link sx={{ fontSize: 14, color: "#1B1AFF", fontWeight: 600, ml:1, mb:1 }} href="#" underline="hover">{item.action}</Link>}
                            </div>
                        </Paper>
                    </Grid>


                ))}
            </Grid>
        </Box>
    );
};

export default InvoiceBox;
