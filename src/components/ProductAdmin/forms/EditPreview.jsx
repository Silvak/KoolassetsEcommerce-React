import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function EditPreview({ images }) {
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
  </Grid>
  )
}

export default EditPreview