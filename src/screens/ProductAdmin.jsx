import React from 'react'
import Sidebar from "../components/Dashboard/Sidebar"
import ProductAdminMain from '../components/ProductAdmin/ProductAdminMain'

function ProductAdmin() {
    return (
        <div style={{display:"flex"}}>
            <Sidebar />
            <ProductAdminMain />
        </div>
    )
}

export default ProductAdmin