import React from 'react'
import Paper from "@mui/material/Paper";
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import {FaSearch} from 'react-icons/fa';
import {VscSettings} from 'react-icons/vsc';

const ResponsiveSearch = () => {
  return (
    <Paper component="form"
    sx={{
        p: '2px 24x',
        dislay: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 350,
        border: '1px solid #ccc', 
        borderRadius: 20,
    }}
    >
      <IconButton sx={{p: '10px'}}><FaSearch /></IconButton>
      <InputBase sx={{ml: 1}} placeholder="where to?"/>
      <IconButton sx={{ml: 5, p: '10px'}} type="submit"><VscSettings /></IconButton>
    </Paper>
  )
}

export default ResponsiveSearch
