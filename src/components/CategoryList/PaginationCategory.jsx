import React from 'react';
import Pagination from '@mui/material/Pagination';

function PaginationCategory({ totalPages, currentPage, onPageChange }) {

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={(event, page) => onPageChange(page)}
      color="primary"
    />
  );
}

export default PaginationCategory;
