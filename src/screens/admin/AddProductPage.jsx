import React from 'react'
import { Box } from "@mui/material";
import Sidebar from "@/components/Dashboard/Sidebar";
import AddProductAdmin from "@/components/ProductAdmin/AddProductAdmin";


function AddProductPage() {
  return (
    <Box sx={{display: "flex"}}>
        <Sidebar />
        <AddProductAdmin />
    </Box>
  )
}

export default AddProductPage;