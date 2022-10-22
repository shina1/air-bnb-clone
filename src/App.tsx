import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import HeaderComponent from './components/HeaderComponent';
import OptionFilter from './components/OptionFilter';


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
    </Box>
    </>
  );
}

export default App;
