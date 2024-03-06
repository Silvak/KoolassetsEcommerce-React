import React from 'react'
import Sidebar from "../components/Dashboard/Sidebar"
import ProductAdminMain from '../components/ProductOrder/ProductAdminMain'

function ProductAdminOrders() {
    return (
        <div style={{display:"flex"}}>
            <Sidebar />
            <ProductAdminMain />
        </div>
    )
}

export default ProductAdminOrders