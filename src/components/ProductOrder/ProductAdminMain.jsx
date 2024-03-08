import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import ProductAdminTitle from './ProductAdminTitle'
import ProductAdminSubtitle from '../ProductAdmin/ProductAdminSubtitle'
import ProductAdminBar from '../ProductAdmin/ProductAdminBar'
import ProductAdminContent from './ProductAdminContent'
import { useMediaQuery } from '@mui/material'

function ProductAdminMain() {

  const isMobile = useMediaQuery('(max-width:600px)'); 
  
  return (
    <div style={{ display: "flex", 
    paddingRight: isMobile ? 0 : "5vw", 
    flexDirection: "column", flex: 1, marginTop: isMobile ? "15%" : "5%", background:"none"}}>
      <ProductAdminTitle />
      <Breadcrumb path={"Productos / Órdenes"} dashboard={"true"} />
      <ProductAdminSubtitle />
      <ProductAdminBar />
      <ProductAdminContent />
    </div>
  )
}

export default ProductAdminMain