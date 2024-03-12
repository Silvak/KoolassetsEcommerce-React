import React from 'react'
import Pagination from '@mui/material/Pagination';

function CancellationPaginate({ totalPages, currentPage, onPageChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: 1, marginTop: "20px"}}>
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