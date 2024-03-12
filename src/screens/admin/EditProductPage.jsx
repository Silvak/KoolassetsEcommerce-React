import React from 'react'
import { Box } from "@mui/material";
import Sidebar from "@/components/Dashboard/Sidebar";
import EditProductAdmin from '@/components/ProductAdmin/EditProductAdmin';

function EditProductPage() {
  return (
    <Box sx={{display: "flex"}}>
        <Sidebar />
        <EditProductAdmin />    
    </Box>
  )
}

export default EditProductPage;