import React , {useState}from 'react'
import Box from '@mui/material/Box';
import Tabs, {tabsClasses} from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import {FaFilter} from 'react-icons/fa';
import {BsSliders} from 'react-icons/bs';
import {CiSliderHorizontal} from 'react-icons/ci';
import { finterDatas } from '../utils/filter-data';


const OptionFilter = () => {
    const [tab, setTab] = useState(0)
    const handleSetTab = (e: { preventDefault: () => void; }, nextTab: React.SetStateAction<number>) => {
        e.preventDefault()
        setTab(nextTab)
    }
  return (
    <Container maxWidth="xl">
      <Box sx={{display: 'flex', flexGrow: 1, px: {xs: 0, md: 2}, alignItems: 'center', ml: 2, mt: 4}}>
            <Tabs value={tab} onChange={handleSetTab} variant="scrollable" scrollButtons sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                    '&.Mui-disabled': {opacity: 0},
                }
            }}>
                {
                    finterDatas.map(data => {
                        return <Tab key={data.id} icon={data.icon} label={data.name} />
                    })
                }
            </Tabs>
            <Button sx={{display: {xs: 'none', md: 'block'}, border: '1px solid #ddd', minWidth: 90, justifyContent: 'space-between',
            alignItems: 'center',
            textTransform:'capitalize', borderRadius: 2, py:1, color: 'layout.palette.text.primary', fontWeight: 600}}>
                <CiSliderHorizontal size={19} /> Filters
            </Button>
      </Box>
    </Container>
  )
}

export default OptionFilter
