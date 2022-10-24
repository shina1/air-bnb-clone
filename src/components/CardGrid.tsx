import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardComponent from './miniComponents/CardComponent';
import { enumGalleryData } from '../utils/cardGalleryData';

type gridType = {
  cardData: enumGalleryData[],
  filtredData: string
}
const CardGrid = ({cardData, filtredData}:gridType) => {
  return (
    <Box sx={{mx: 2}}>
      <Grid sx={{ flexGrow: 1,  }} container rowSpacing={3} columnSpacing={3}>
        <CardComponent cardData={cardData} filtredData={filtredData}/>
      </Grid>
      
    </Box>
  )
}
export default CardGrid
