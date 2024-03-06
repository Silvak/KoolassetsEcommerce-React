import { Typography, useMediaQuery } from '@mui/material'
import React from 'react'

function ProductAdminTitle() {
  const isMobile = useMediaQuery('(max-width:600px)'); 

  return (
    <div style={{borderRadius:"6px"}}>
    <Typography style={{backgroundColor:"#EEEEEE", color:"#000", fontWeight:600, fontSize:"24px", paddingLeft:22, paddingBlock:10, letterSpacing:-1}}>
      Productos
    </Typography>
    </div>
  )
}

export default ProductAdminTitle
