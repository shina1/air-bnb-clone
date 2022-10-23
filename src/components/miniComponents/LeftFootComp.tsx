import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography';
import { footDatas } from '../../utils/footData';

const LeftFootComp = () => {
  return (
    <Box sx={{
        display: 'flex',
        flexDiection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
      <Box component='span' sx={{
        color: '#222222',
        fontSize:'17px',
        lineHeight: '18px'
      }}>
           &#169; 2022 Airbnb, Inc.
      </Box>
        {
            footDatas && footDatas.map((data) => {
                return (
                        <Box key={data.id} 
                        sx={{
                            display: "flex", 
                            flexDirection: "row", 
                            alignItems: 'center',
                            ml:2,
                        }}
                            >
                           <Box component="div" sx={{
                            display: "block",
                            height: '3px',
                            width: '3px',
                            borderRadius: 20,
                            backgroundColor: "#717171"
                           }}>
                            </Box> 
                            <Link href={data.link}>
                                {data.content}
                            </Link>
                        </Box>
                )
            })
        }
    </Box>
  )
}
export default LeftFootComp
