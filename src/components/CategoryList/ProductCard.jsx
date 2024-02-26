import React from "react";
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Chip,
    Typography,
    IconButton,
    Grid
} from "@mui/material";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductCard = ({ product }) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: "auto",
                height: "auto",
                bgcolor: "#fff",
                borderRadius: "2px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                mb: "30px",
            }}
            style={{ padding: "0px" }}
        >
            <CardContent style={{ padding: "0px", paddingTop: "4px", paddingInline: "4px" }}>
                <Grid container spacing={1} alignItems="center" style={{ paddingBlock: "0px" }}>
                    <Grid item xs={12} sx={{ ml: 0 }} style={{ margin: "0vh" }}>
                        <Chip
                            label={product.category}
                            sx={{
                                height: "min-content",
                                color: "#1B1AFF",
                                backgroundColor: 'rgba(27, 26, 255, 0.3)',
                                borderRadius: "120px",
                                padding: 0.6,
                            }}
                            style={{ paddingTop: "2px", paddingBottom: "2px" }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{
                                width: "339px",
                                height: "auto",
                                objectFit: "cover",
                                paddingInline: "50px",
                                paddingBottom: "60px",
                                paddingTop: "10px"
                            }}
                        />
                    </Grid>
                    <Grid container spacing={1} alignItems="center" justifyContent="space-between" ml={1}>
                        <div style={{ display: "flex", justifyContent: "flex-start", gap: 4 }}>
                            <Rating
                                name="read-only"
                                value={product.rating}
                                readOnly
                                size="small"
                            />

                            <Typography variant="body2" style={{ color: "#615D5D", fontSize: "0.8rem", fontWeight: 500 }}>
                                ({product.rating})
                            </Typography>
                        </div>

                        <IconButton aria-label="add to favorites">
                            <FavoriteBorderIcon style={{ color: "#615D5D", fontSize: "1.2rem" }} />
                        </IconButton>

                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" color={"#0AC733"} fontWeight={"normal"}>Disponible</Typography>
                        <Typography variant="body2" color={"#615D5D"} fontWeight={"normal"}
                            style={{ marginBlock: 10, whiteSpace: 'nowrap' }} // Aquí se aplica la propiedad whiteSpace
                        >
                            {product.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            style={{
                                fontSize: "24px",
                                fontWeight: 400,
                                lineHeight: "34px",
                                textAlign: "left",
                                color: "#000000",
                                marginBottom: 8
                            }}
                        >
                            ${product.price.toFixed(2)}
                        </Typography>
                        <CardActions style={{ padding: "0px", marginInline: "0px" }}>
                            <Button variant="outlined" color="primary" fullWidth>
                                Añadir al carrito
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
