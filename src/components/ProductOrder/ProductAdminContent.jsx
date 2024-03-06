import React, { useState } from 'react';
import products from '../../mock/orderListDashboard';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Hidden } from '@mui/material';
import PaginationCategory from '../CategoryList/PaginationCategory';
import { CustomTypographyTitle, CustomTypographyText } from './CustomTypography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import "./styles.css"



function ProductAdminContent() {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const currentProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleClickDetails = () => {
    alert("Hice click en detalles")
  }





  return (
    <Box sx={{ mt: 1 }}>
      <Paper elevation={0} style={{
        backgroundColor: "#fff", boxShadow: "0px 2px 10px 0px #00000026", border: "2px solid #DFDFDF", borderRadius: "6px"
      }}>
        <TableContainer>
          <Table>
            <TableHead >
              <TableRow>
                <TableCell style={{ background: "none" }}><CustomTypographyTitle>Nombre</CustomTypographyTitle></TableCell>
                <Hidden only={['xs', 'sm']}>
                  <TableCell style={{ background: "none" }}><CustomTypographyTitle>ID Órden</CustomTypographyTitle></TableCell>
                  <TableCell style={{ background: "none" }}><CustomTypographyTitle>Fecha</CustomTypographyTitle></TableCell>
                  <TableCell style={{ background: "none" }}><CustomTypographyTitle>ID Usuario</CustomTypographyTitle></TableCell>
                  <TableCell style={{ background: "none" }}><CustomTypographyTitle>Status</CustomTypographyTitle></TableCell>
                </Hidden>
                <TableCell style={{ background: "none" }}><CustomTypographyTitle>Valor</CustomTypographyTitle></TableCell>
                <TableCell style={{ background: "none" }}><CustomTypographyTitle>Detalles</CustomTypographyTitle></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell style={{ border: "none" }} size='small'><CustomTypographyText>{product.name}</CustomTypographyText></TableCell>
                  <Hidden only={['xs', 'sm']}>
                    <TableCell style={{ border: "none" }}><CustomTypographyText>{product.orderId}</CustomTypographyText></TableCell>
                    <TableCell style={{ border: "none" }} size='small'><CustomTypographyText>{product.date}</CustomTypographyText></TableCell>
                    <TableCell style={{ border: "none" }} size='small'><CustomTypographyText>{product.userId}</CustomTypographyText></TableCell>
                    <TableCell style={{ border: "none" }} size='small'><CustomTypographyText>{product.status}</CustomTypographyText></TableCell>
                  </Hidden>
                  <TableCell style={{ border: "none" }} size='small'><CustomTypographyText>{product.value}</CustomTypographyText></TableCell>
                  <TableCell style={{ border: "none" }} size='small'>
                    <button
                      className="DetailsLink"
                      style={{ cursor: "pointer", border: "none", background: "none", fontSize: 16, color: "#000" }}
                      onClick={handleClickDetails}
                    >
                      <Hidden only={['md', 'lg', 'xl']}>
                        <IconButton aria-label="Detalles">
                          <MoreVertIcon />
                        </IconButton>
                      </Hidden>
                      <Hidden only={['xs', 'sm']}>
                        {product.options}
                      </Hidden>
                    </button>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div style={{ marginBlock: 12 }}>
        <PaginationCategory
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Box>
  );
}

export default ProductAdminContent;
