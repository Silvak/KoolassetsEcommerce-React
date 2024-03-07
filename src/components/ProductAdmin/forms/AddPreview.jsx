import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { storeFavorites } from "../../../stores/favorites/storeFavorites";

function AddPreview() {
  const images = storeFavorites((state) => ({ images: state.images}))
  console.log(images);
  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          height: 50,
          background: "none",
        }}
      >
        <Typography
          variant="h6"
          style={{ fontSize: 20, fontWeight: 700, color: "#000" }}
        >
          Vista previa
        </Typography>
      </Box>
      {images.length ? (<Grid>
        {
          <div>
            <img src={images[0]} alt="mainImg" width={"100%"} />
          </div>
        }
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt="" />
          </div>
        ))}
      </Grid>) : (<Box>
        Preview 
      </Box>)}
      
    </Grid>
  );
}

export default AddPreview;
