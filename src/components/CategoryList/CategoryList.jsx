import React, { useState } from "react";
import { Grid, Typography, IconButton, useMediaQuery } from "@mui/material";
import ProductCard from "./ProductCard";
import Pagination from "./PaginationCategory";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import DesktopSidebar from "./DesktopSidebar";

const CategoryList = ({ category, totalResults, products }) => {
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
          marginBottom: 8,
          marginLeft: 16,
        }}
      >
        Mostrando {productsToShow.length} de {totalResults} resultados: {category}
      </Typography>
      <div style={{ display: "flex", maxWidth: "50vw" }}>
        {isMobile ? (
          <div>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Sidebar open={drawerOpen} onClose={toggleDrawer} />
          </div>
        ) : (
          isDesktop && <DesktopSidebar />
        )}
        <div style={{ marginLeft: isMobile ? "8px" : "8vw", padding: "0px" }}>
          <Typography
            variant="h6"
            style={{ fontSize: "12px", color: "gray", marginBlock: "20px" }}
          >
            Inicio / Categorías / Telefonía /{" "}
            <span style={{ color: "#000" }}>Gama media</span>
          </Typography>
          <Grid container spacing={1} width={"80vw"} height={"auto"}>
            {productsToShow.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductCard product={product} />
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
    </>
  );
};

export default CategoryList;
