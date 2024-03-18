import { Box, Grid, useMediaQuery} from "@mui/material/";
import Products from "./products";
import Pagination from "./returnsPagination";
import { useState } from "react";



function ReturnProducts({ totalResults, products }) {

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
          paddingX: { xs: 5.4},
          padding: "5%",
          paddingTop: 15
        }}
      >
        <Grid
          container
          spacing={8}
          style={{
            textAlign: "left",
            marginLeft: isMobile && "10px",
          }}
        >
          <Products products={!isQuery ? productsToShow : productsToShowMobile}/>
        </Grid>
        <div
            style={{
              justifyContent: "center",
              paddingTop: 2,
              paddingBottom: 2, 
              marginTop: "20px"
            }}
          >
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
      </Box>
    </div>
  );
}

export default ReturnProducts;

