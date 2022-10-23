import React from 'react'
import Box from "@mui/material/Box";
import {HiOutlineGlobeAlt} from 'react-icons/hi';
import {IoIosArrowUp} from 'react-icons/io';
import Button from '@mui/material/Button';

const RightFootComp = () => {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
    }}>
      <Button>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            mr: 1
        }}>
            <HiOutlineGlobeAlt  size={18}/>
        </Box>
        English (CA)
      </Button>
      <Button>$CAD</Button>
      <Button>Support & Reources</Button>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        ml:1
      }}>
        <IoIosArrowUp size={24}/>
      </Box>
    </Box>
  )
}

export default RightFootComp
