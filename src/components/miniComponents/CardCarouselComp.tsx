import React,{useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import Skeleton from '@mui/material/Skeleton';
import  KeyboardArrowLeft  from '@mui/icons-material/KeyboardArrowLeft';
import  KeyboardArrowRight  from '@mui/icons-material/KeyboardArrowRight';

import {AiFillStar, AiFillHeart} from 'react-icons/ai';
import {FaRegHeart} from 'react-icons/fa';
import { enumGalleryData } from '../../utils/cardGalleryData';
import { Img } from './ImageComponent';

import './style.css'

type propType = {
    data: enumGalleryData,
}

const CardCarouselComp = (props: propType) => {
    const {data,} = props
    const [liked, setLiked]= useState(false)
    const [step, setStep] = useState(0);
    const [loading,setLoading] = useState(false)
    const stepLength = data.imgs.length;
    const nextStep = () => {
        setStep((prevStep: number) => prevStep + 1);
    }
    const previousStep = () => {
        setStep((prevStep: number) => prevStep - 1);
    }
    const handleStepSchange = (next: number) => {
        setStep(next)
    }
    const handleLike = () => {
        setLiked(!liked)
    }
    // justifyContent="center" spacing={spacing}
  return (
    <Grid container   className='carousel' sx={{
        flexGrow: 1,
        position: 'relative'
    }}>
      <Box sx={{
        position: 'absolute', 
        right: 10,
        top: 10,
        zIndex: 10
        }}>
         {
            liked ? <AiFillHeart size={24} color="#fff" onClick={handleLike}/>:<FaRegHeart size={24} color="#fff" onClick={handleLike}/>
         }
      </Box>
      {
        data.imgs.length ? (
            <SwipeableViews axis={'x'} index={step} onChangeIndex={handleStepSchange} enableMouseEvents
            >
                {
                    data.imgs.map((el) => {
                        return (
                            <div key={el.id}> 
                                <Img alt={`${el.id}`} src={el.link} sx={{
                                    display: 'block',
                                    width: '100%',
                                    height: 275,
                                    borderRadius: 3}}/>
                            </div>
                        )
                    }) 
                }
                
            </SwipeableViews>
        ) : <Skeleton variant="rectangular" width={310} height={118} />
      }
      <Box sx={{
        position: 'absolute',
        bottom: 100,
        width: '100%'
      }}>
            <MobileStepper 
            sx={{backgroundColor: 'transparent'}}
            steps={stepLength}
            position="static"
            activeStep={step}
            nextButton={
                <Button
                  size="small"
                  onClick={nextStep}
                  disabled={step === stepLength - 1}
                  sx={{color: '#000',
                  opcatity: 0.5,
                  p: 1,
                  minWidth: 'auto',
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  mb:16
                }}
                >
                    <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={previousStep}
                  disabled={step === 0}
                  sx={{color: '#000',
                  opcatity: 0.5,
                  p: 1,
                  minWidth: 'auto',
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  mb:16
                }}
                >
                    <KeyboardArrowLeft />
                </Button>
              }
            />
      </Box>
      <Box sx={{
        display:'flex',
        justifyContent: 'space-between'
      }}>
        <Box sx={{mt: 2}}>
            <Typography component="h4" >
                {data.location}
            </Typography>
            <Typography component="h3" >
                {data.description}
            </Typography>
            <Typography component="h3" >
                {data.date}
            </Typography>
            <Typography component="h3" >
                ${data.price} {data.priceDetail}
            </Typography>
        </Box>
        <Box sx={{mt: 2, ml: 12}}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                {
                    data.newAds ? (
                        <>
                            <AiFillStar size={17}/>
                            <Typography component="span">New</Typography>
                        </> 
                    ) : ( <>
                            <AiFillStar size={17}/>
                            <Typography component='span'>{data.rating}</Typography>
                        </>)
                }
            </Box>
        </Box>
      </Box>
    </Grid>
  )
}
// 
export default CardCarouselComp
