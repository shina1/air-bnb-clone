import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardComponent from './miniComponents/CardComponent';

const CardGrid = () => {
  return (
    <Box sx={{mx: 2}}>
      <Grid sx={{ flexGrow: 1,  }} container rowSpacing={3} columnSpacing={3}>
        <CardComponent />
      </Grid>
    </Box>
  )
}
export default CardGrid
