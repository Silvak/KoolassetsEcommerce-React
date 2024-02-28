import React, { useState } from "react";
import { Grid, Typography, useMediaQuery, Button } from "@mui/material";
import ProductCard from "../../components/CategoryList/ProductCard";
import Pagination from "../../components/CategoryList/PaginationCategory";
import { storeFavorites } from "../../stores/favorites/storeFavorites";

const Favorites = ({ totalResults, favoritesProducts }) => {
    const { toggleFavorite, isFavorite, clearFavorites } = storeFavorites((state) => ({
        toggleFavorite: state.toggleFavorite,
        isFavorite: state.isFavorite,
        clearFavorites: state.clearFavorites,
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const isMobile = useMediaQuery("(max-width: 500px)");
    const productsPerPage = 16;
    const totalPages = Math.ceil(totalResults / productsPerPage);

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, totalResults);
    const productsToShow = favoritesProducts.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scroll(0, 0);
    };

    return (
        <div style={{ paddingInline: "40px" }}>
            <div style={{ marginLeft: "6vw", padding: "0px", marginTop: 12 }}>
                <Typography
                    variant="h6"
                    style={{ fontSize: "12px", color: "gray", marginBlock: "20px" }}
                >
                    Inicio / <span style={{ color: "#000" }}>Favoritos</span>
                </Typography>

                <div
                    style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "12px",
                    }}
                >
                    <Typography
                        variant="h6"
                        style={{
                            fontSize: { xs: "20px", md: "24px" },
                            fontWeight: 600,
                            marginBottom: 8,
                            marginLeft: { xs: 0, md: 16 },
                            color: "#000",
                            letterSpacing: "1px",
                        }}
                    >
                        Favoritos ({totalResults})
                    </Typography>
                    <Button
                        variant="outlined"
                        color="primary"
                        style={{
                            border: "1px solid #1B1AFF",
                            fontWeight: 700,
                            color: "#1B1AFF",
                        }}
                        sx={{
                            height: "min-content",
                            paddingX: { xs: "10px", md: "20px" },
                            borderRadius: "5px",
                        }}
                        onClick={clearFavorites}
                    >
                        Limpiar favoritos
                    </Button>
                </div>

                <Grid container spacing={0} width={"100%"} height={"auto"}>
                    {productsToShow.map((product) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            key={product.id}
                            sx={{ mb: "32px" }}
                        >
                            <ProductCard
                                product={product}
                                closeIcon={true}
                                isFavorite={isFavorite}
                                handleToggleFavorite={toggleFavorite}
                            />
                        </Grid>
                    ))}
                </Grid>
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        marginBottom: 16,
                    }}
                >
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>



        </div>
    );
};

export default Favorites;
