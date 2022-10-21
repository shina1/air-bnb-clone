import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


import {BsGlobe} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';
import {FaRegUserCircle} from 'react-icons/fa';
import { airBnbDarkGreyColor } from '../../layouts/customColors';

const BecomeAHostComp = () => {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Link href='#' color={airBnbDarkGreyColor}>Become a Host</Link>
      <Stack>
        <Button>
            <BsGlobe size={24}/>
        </Button>
        <Button sx={{
            borderRadius:10, border: '1px solid #ddd'
        }}>
        <Stack>
            <AiOutlineMenu size={24} />
            <FaRegUserCircle size={24} />
        </Stack>
        </Button>
      </Stack>
    </Box>
  )
}

export default BecomeAHostComp
