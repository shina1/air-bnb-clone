import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import HeaderComponent from './components/HeaderComponent';
import OptionFilter from './components/OptionFilter';
import CardGrid from './components/CardGrid';
import FooterComponent from './components/FooterComponent';
import MobileFooter from './components/MobileFooter';
import ViewMap from './components/ViewMap';
import { cardgalleryDatas, enumGalleryData } from './utils/cardGalleryData';



function App() {
  const [cardData, setCardData] = useState<enumGalleryData[]>(cardgalleryDatas);
  const [filtredData, setFilteredData] = useState('design')
  
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
          <OptionFilter setCardData={setCardData} cardData={cardData} filtredData={filtredData} setFilteredData={setFilteredData}/>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          height: 100,
          overflowY: "scroll"
        }}>
            <Container maxWidth="xl" sx={{mb: 3, mt:8}}>
              <CardGrid cardData={cardData} filtredData={filtredData}/>
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
