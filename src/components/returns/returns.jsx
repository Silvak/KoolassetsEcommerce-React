import { Box, Grid, useMediaQuery} from "@mui/material/";
import Products from "./products";
import Pagination from "./returnsPagination";
import { useState } from "react";



function ReturnProducts({ totalResults, products }) {

  const isMobile = useMediaQuery("(max-width:600px)");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const totalPages = Math.ceil(totalResults / productsPerPage); 
  
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, totalResults);
  const productsToShow = products.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // window.scroll(0, 0);
  };

  return (
    <div >
      <Box
        sx={{
          marginLeft: { xs: 1, sm: 7, md: 15, lg: 15, xl: 15 },
          minWidth: "30vw",
          padding: "5%",
        }}
      >
        <Grid
          container
          spacing={8}
          style={{
            // width: "100%",
            textAlign: "left",
            marginLeft: isMobile && "10px",
            height: "531px",
          }}
        >
          <Products />
        </Grid>
        <div
            style={{
              justifyContent: "center",
              paddingBottom: 2, 
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

