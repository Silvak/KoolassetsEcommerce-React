import React from 'react';
import { Card as MuiCard, CardActionArea, CardActions, CardContent, Button, Typography, Paper, CardMedia, useMediaQuery } from '@mui/material';

function ProductAdminCard({ product }) {
  const matches = useMediaQuery('(max-width:600px)'); 

  
  return (
    <Paper 
      className={matches ? "custom-paper-small" : "custom-paper-large"}
      style={{ 
        backgroundColor: '#fff', 
        maxWidth: matches ? "95vw" : 421,
        maxHeight: matches ? 500 : 592, 
        paddingInline: 16, 
        paddingBlock: 6, 
        boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.26)',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          style={{ height: 200, width: "auto", margin: 'auto', marginTop: 20 }}
        />
        <CardContent style={{ padding: 10 }}>
          <Typography gutterBottom variant="h5" component="div" color="#000">
            {product.name}
          </Typography>
          <Typography variant="body2" color="#615D5D" sx={{ fontWeight: 400, marginBottom: 0 }} component="p">
            {product.description}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
            <Typography variant="body2" color="#000000" component="p">
              {product.price}
            </Typography>
            <Typography variant="body2" style={{ color: "#000", opacity: "25%" }} component="p">
              {product.idVisible}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button fullWidth size="small" variant="contained" color="primary">
          Editar
        </Button>
      </CardActions>
    </Paper>
  );
}

export default ProductAdminCard;
