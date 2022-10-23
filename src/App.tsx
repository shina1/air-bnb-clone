import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import HeaderComponent from './components/HeaderComponent';
import OptionFilter from './components/OptionFilter';
import CardGrid from './components/CardGrid';
import FooterComponent from './components/FooterComponent';
import MobileFooter from './components/MobileFooter';
import ViewMap from './components/ViewMap';



function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{
        display:"flex",
        flexDirection: "column",
        height: '100vh',
    }}>
        <Box>
          <HeaderComponent />
          <OptionFilter />
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          height: 100,
          overflowY: "scroll"
        }}>
            <Container maxWidth="xl" sx={{mb: 3, mt:8}}>
              <CardGrid />
            </Container>
        </Box>
        <Box sx={{display: {xs: 'flex' , md: 'none'}}}>
          <MobileFooter />
        </Box>
        <Box sx={{display: {xs:'none', md: 'block'}}}>
          <FooterComponent />
        </Box>
        <ViewMap />
    </Box>
    </>
  );
}

export default App;
