import { Typography, useMediaQuery } from '@mui/material'
import React from 'react'

function ProductAdminSubtitle() {

  return (
    <div style={{ display: "flex", justifyContent: "left", alignItems: "center", height: 50, background:"none"}}>
      <Typography variant="h6" style={{ fontSize: 20, fontWeight: 700, color: "#000" }}>
        Ordenar por
      </Typography>
    </div>
  )
}

export default ProductAdminSubtitle

