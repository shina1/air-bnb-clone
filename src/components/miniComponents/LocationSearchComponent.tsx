import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

// icons
import {IoSearchCircleSharp} from 'react-icons/io5';
import { locationComponentConts } from '../../utils/headerLocationContent';
import { airBnbPinkColor } from '../../layouts/customColors';
import { airBnbDarkGreyColor } from '../../layouts/customColors'



const LocationSearchComponent = () => {
  return (
    <Paper sx={{
        borderRadius: 20,
        ml: 15,
    }}
    elevation={3}
    >
      <Stack sx={{
        borderRadius: 20,
        pl: 2,
      }} divider={<Divider orientation='vertical' flexItem />}
      spacing={2}
      >
        {
            locationComponentConts.map(cont => {
                return(
                   <React.Fragment key={cont.id}>
                        <Button sx={{
                        }}>
                            <Typography sx={{
                                color: `${cont.withIcon ? '#717171' : airBnbDarkGreyColor}`,
                                fontWeight: `${cont.withIcon ? 400 : 600}`,
                                fontSize: '14px',
                            }}>{cont.cont}</Typography>
                            <Box sx={{
                                mr: 1, ml: 1, mt: 1, 
                            }}>
                                {
                                    cont.withIcon && <IoSearchCircleSharp size={32} color={airBnbPinkColor} />
                                }
                            </Box>
                        </Button>
                   </React.Fragment>
                )
            })
        }
      </Stack>
    </Paper>
  )
}

export default LocationSearchComponent
