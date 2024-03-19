import { Typography, Button, useMediaQuery, Link } from '@mui/material'
import React from 'react'

function ProductAdminSubtitle() {
  
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 50, background: "none" }}>
      <Typography variant="h6" style={{ fontSize: 20, fontWeight: 700, color: "#000" }}>
        Ordenar por
      </Typography>
      <Link href="/product-admin/add">
        <Button variant="contained" disableRipple color='primary' 
        >
          Añadir +
        </Button>
      </Link>    
    </div>
  )
}

export default ProductAdminSubtitle

