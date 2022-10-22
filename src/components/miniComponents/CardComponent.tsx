import React,{useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { cardgalleryDatas, enumGalleryData } from '../../utils/cardGalleryData';
import CardCarouselComp from './CardCarouselComp';

const CardComponent = () => {
    const [cardData, setCarddata] = useState<enumGalleryData[]>();
    const [liked, setLiked]= useState(false)

    useEffect(()=>{
        setCarddata(cardgalleryDatas);
    },[cardData])
  return (
    <>
       {
        cardData?.map(data => {
            return <Grid key={data.id} sm={2} md={4} lg={3} item xs={12}>
                <CardCarouselComp data={data} liked={liked}/>
            </Grid>
        })
       } 
    </>
  )
}

export default CardComponent
