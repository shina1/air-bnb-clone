import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LogoComponent from './miniComponents/LogoComponent'
import LocationSearchComponent from './miniComponents/LocationSearchComponent';
import BecomeAHostComp from './miniComponents/BecomeAHostComp';
import ResponsiveSearch from './miniComponents/ResponsiveSearch';
import { deskDisplay } from '../layouts/customStyle';

const HeaderComponent = () => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 70,
        borderBottom: '1px solid #ddd'
    }}>
      <Container maxWidth="xl">
        <Box sx={{
            display: 'flex',
            justifyContent: {xs:'center', md:'space-between'},
            alignItems:'center',
            minHeight: 90,
            px: 4,
        }}>
            <Box sx={deskDisplay}><LogoComponent /></Box>
            <Box sx={deskDisplay}><LocationSearchComponent /></Box>
            <Box sx={deskDisplay}><BecomeAHostComp /></Box>
            {/* this will only display on mobile screen */}
            <Box sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'space-between'}}>
                <ResponsiveSearch />
            </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HeaderComponent
