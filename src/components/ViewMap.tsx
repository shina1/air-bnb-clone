import React from 'react'
import Box from '@mui/material/Box';

import './mapStyle.css'

import {CiMap} from 'react-icons/ci'
import { mapIconStyle } from '../layouts/customStyle'
const ViewMap = () => {
  return (
    <Box className='showMap' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', position: 'fixed', bottom:100, left: '45vw', borderRadius: 10, backgroundColor: '#000', px: 2, py: 2, zIndex: 100, translateX: '-50%', width: '10%'}}>
        <Box component="h3" sx={{display: 'flex', flexDirection: 'row',color: "#fff",fontSize:"14px", lineHeight: "18px"}}>
            <Box component="span" sx={{ display: {xs: 'none', md: 'block'}}}>Show</Box>
            <Box component="span" sx={{fontSize: {xs:"12px", md: "14px"}, ml:1}}>Map</Box>
        </Box> 
        <CiMap size={24} color="#fff"/>
    </Box>
  )
}

export default ViewMap
