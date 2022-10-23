import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import { mobileFootDdata } from '../utils/footData';

const MobileFooter = () => {
    return(
        <Box sx={{display: 'flex', justifyContent: 'center', flexGrow: 1}}>
            <Stack>
                {
                    mobileFootDdata && mobileFootDdata.map((data)=> {
                        return(
                            <Button key={data.id}>
                                <Stack sx={{
                                    justifyContent: 'center', alignItems: 'center'
                                }} direction="column" spacing={1}>
                                    {data.icon}
                                    <Typography>{data.content}</Typography>
                                </Stack>
                            </Button>
                        )
                    })
                }
            </Stack>
        </Box>
    )
}

export default MobileFooter