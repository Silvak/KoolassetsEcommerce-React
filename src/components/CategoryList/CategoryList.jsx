import React, { useState } from "react";
import { Grid, Typography, IconButton, useMediaQuery } from "@mui/material";
import ProductCard from "./ProductCard";
import Pagination from "./PaginationCategory";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import DesktopSidebar from "./DesktopSidebar";
import { storeFavorites } from '../../stores/favorites/storeFavorites';
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const CategoryList = ({ category, totalResults, products }) => {
  const [selectedFullPath, setSelectedFullPath] = useState("Categorías");

  const handlePathUpdate = (path) => {
    setSelectedFullPath("Categorías" + " / " + path);
  };

  const { toggleFavorite, isFavorite } = storeFavorites(state => ({
    toggleFavorite: state.toggleFavorite,
    isFavorite: state.isFavorite,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const productsPerPage = 16;
  const totalPages = Math.ceil(totalResults / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, totalResults);
  const productsToShow = products.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scroll(0, 0);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Typography
        variant="h6"
        style={{
          fontSize: "14px",
          fontWeight: 700,
          marginBottom: 6,
          marginLeft: 16,
        }}
      >
        Mostrando {productsToShow.length} de {totalResults} resultados:{" "}
        {category}
      </Typography>
      <div style={{ display: "flex" }}>
        {isMobile ? (
          <div>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Sidebar open={drawerOpen} onClose={toggleDrawer} onUpdatePath={handlePathUpdate}/>
          </div>
        ) : (
          isDesktop && 
          <div style={{paddingRight:"2vw"}}>
          <DesktopSidebar onUpdatePath={handlePathUpdate} />
          </div>
        )}
        <div style={{ marginLeft: "6vw", display: "flex", flexDirection: "column", width: "100%" }}>
          <Typography
            variant="h6"
            style={{ fontSize: "12px", color: "gray", marginBottom: "20px", marginTop:"6px" }}
          >
            {/* Inicio / Categorías / Telefonía /{" "} */}
            <Breadcrumb path={selectedFullPath} />
            {/* <span style={{ color: "#000" }}>Gama media</span> */}
          </Typography>
          <Grid container spacing={0} width={"100%"} height={"auto"}>
            {productsToShow.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} sx={{ mb: "32px" }}>
                <ProductCard product={product} isFavorite={isFavorite} handleToggleFavorite={toggleFavorite} />
              </Grid>
            ))}
          </Grid>
          <div
            style={{
              justifyContent: "center",
              paddingBottom: 12, 
              marginRight: "6vw",
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
    </>
  );
};

export default CategoryList;
