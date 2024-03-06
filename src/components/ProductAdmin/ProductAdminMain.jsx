import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import ProductAdminTitle from './ProductAdminTitle'
import ProductAdminSubtitle from './ProductAdminSubtitle'
import ProductAdminBar from './ProductAdminBar'
import ProductAdminContent from './ProductAdminContent'
import { useMediaQuery } from '@mui/material'

function ProductAdminMain() {

  const isMobile = useMediaQuery('(max-width:600px)'); 
  
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, marginTop: isMobile ? "15%" : 0}}>
      <ProductAdminTitle />
      <Breadcrumb path={"Productos"} dashboard={"true"} />
      <ProductAdminSubtitle />
      <ProductAdminBar />
      <ProductAdminContent />
    </div>
  )
}

export default ProductAdminMain