import { Box, Grid, useMediaQuery } from "@mui/material/";
import Products from "./products";
import Pagination from "./cancellationPaginate";
import { useState } from "react";


function CanceledProducts({ totalResults, products }) {
  const isQuery = useMediaQuery("sm");
  const isMobile = useMediaQuery("(max-width:600px)");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const productsPerPageMobile = 6;
  const totalPages = Math.ceil(totalResults / productsPerPage);
  const totalPagesMobile = Math.ceil(totalResults / productsPerPageMobile);

  const startIndex = (currentPage - 1) * productsPerPage;
  const startIndexMobile = (currentPage - 1) * productsPerPageMobile;
  const endIndex = Math.min(startIndex + productsPerPage, totalResults);
  const endIndexMobile = Math.min(startIndex + productsPerPageMobile, totalResults);
  
  const productsToShow = products.slice(startIndex, endIndex);
  const productsToShowMobile = products.slice(startIndexMobile, endIndexMobile);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // window.scroll(0, 0);
  };
  return (
    <div >
      <Box
        sx={{
          marginLeft: { xs: 1, sm: 7, md: 15, lg: 15, xl: 15 },
          // minWidth: "30vw",
          padding: "5%",
          paddingTop: 15
        }}
      >
        <Grid
          container
          spacing={8}
          style={{
            // width: "100%",
            textAlign: "left",
            marginLeft: isMobile && "10px",
            // height: "531px",
          }}
        >
          <Products products={!isQuery ? productsToShow : productsToShowMobile}/>
        </Grid>
        <div
            style={{
              justifyContent: "center",
              paddingBottom: 2, 
              paddingTop: 2,
              marginTop: "20px"
            }}
          >
            <Pagination
              totalPages={!isQuery ? totalPages : totalPagesMobile}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
      </Box>
    </div>
  );
}

export default CanceledProducts;
