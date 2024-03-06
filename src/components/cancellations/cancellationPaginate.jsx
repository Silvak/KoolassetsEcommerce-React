import React from 'react'
import Pagination from '@mui/material/Pagination';

function CancellationPaginate({ totalPages, currentPage, onPageChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%" }}>
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={(event, page) => onPageChange(page)}
      color="primary"
    />
  </div>
  )
}

export default CancellationPaginate;