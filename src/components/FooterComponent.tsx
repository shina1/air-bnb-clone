import React from 'react'
import Box from '@mui/material/Box';
import LeftFootComp from './miniComponents/LeftFootComp';
import RightFootComp from './miniComponents/RightFootComp';
import Container from '@mui/material/Container';
const FooterComponent = () => {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        borderTop: "1px solid #B0B0B0",
        backgroundColor: '#fff',
        height: 60,
        width: "100%"
    }}>
      <Container maxWidth="xl">
        <Box sx={{
            display: 'flex',
            justifyContent: {xs: 'center', md: 'space-between'},
            alignItems: 'center'
        }}>
            <LeftFootComp />
            <RightFootComp />
        </Box>
      </Container>
    </Box>
  )
}

export default FooterComponent
