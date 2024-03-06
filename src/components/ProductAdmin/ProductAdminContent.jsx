import React, { useState } from 'react';
import ProductAdminCard from './ProductAdminCard';
import products from '../../mock/productDataDashboard';
import { Box, Grid } from '@mui/material';
import PaginationCategory from '../CategoryList/PaginationCategory';


function ProductAdminContent() {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const currentProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        {currentProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductAdminCard product={product} />
          </Grid>
        ))}
      </Grid>
      <div style={{ marginBlock: 12 }}>
        <PaginationCategory
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Box>
  );
}

export default ProductAdminContent;
