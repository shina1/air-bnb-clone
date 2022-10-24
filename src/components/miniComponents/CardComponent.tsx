import React,{useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { cardgalleryDatas, enumGalleryData } from '../../utils/cardGalleryData';
import CardCarouselComp from './CardCarouselComp';
type gridType = {
  cardData: enumGalleryData[],
  filtredData: string
}
const CardComponent = ({cardData, filtredData}: gridType) => {
    
  return (
    <>
    {
        cardData?.map((data: enumGalleryData) => {
          
           return  data.category.toLowerCase() === filtredData.toLowerCase() && <Grid key={data.id} sm={6} md={4} lg={3} item xs={12}>
            <CardCarouselComp data={data} />
            </Grid> 
          
      })
    }
     
    </>
  )
}

export default CardComponent
