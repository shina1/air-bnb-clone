import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {FaAirbnb} from 'react-icons/fa';
import { airBnbPinkColor } from '../../layouts/customColors';

// colors



const LogoComponent = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <FaAirbnb size={40} color={airBnbPinkColor}/>
      <Typography sx={{
        ml:1,
        color: layout => layout.palette.secondary.main,
        fontSize: '20px',
        fontWeight: 800,
        textTransform: 'lowecase',
        // fontFamily: 'monospace'
      }}
      component='h3'
      >airbnb</Typography>
    </Box>
  )
}

export default LogoComponent
