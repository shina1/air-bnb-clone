import {
    MdOutlineApartment,
    MdHouseSiding,
    MdOutlineWater,
    MdCabin
}
from 'react-icons/md';
import {BsSnow} from 'react-icons/bs';
import {BiHomeAlt} from 'react-icons/bi';
import {
GiKidSlide,
GiSpaceNeedle,
GiCampingTent,
GiLightningDome,
GiEvilTree,
GiWaveSurfer,
GiMountainCave,
GiCaveEntrance,
GiGolfFlag
}
from 'react-icons/gi';
import {AiOutlineCoffee} from 'react-icons/ai';
import {FaCampground, FaUmbrellaBeach, FaSwimmingPool} from 'react-icons/fa';
import {RiEarthquakeFill} from 'react-icons/ri';


const idGenerator = () => {
    const arrOfNum = [1,2,3,4,5]
    let timeStamp = Date.now();
}

interface filterDataEl {
    id: number, name:  string, icon: any
}

interface filterDataEls extends Array<filterDataEl>{}

export const finterDatas: filterDataEl[] = [
    {id:1, name: 'Design', icon: <MdOutlineApartment size={24}/> },
    
    {id:2, name: 'Shared Homes', icon: <MdHouseSiding size={24}/> },
    {id:3, name: 'Arctic', icon: <BsSnow size={24}/> },
    {id:4, name: 'LakeFront', icon: <MdOutlineWater size={24}/> },
    {id:5, name: 'National Parks', icon: <GiKidSlide size={24}/> },
    {id:6, name: 'Bed & Brakefast', icon: <AiOutlineCoffee size={24}/> },
    {id:7, name: 'OMG!', icon: <GiSpaceNeedle size={24}/> },
    {id:8, name: 'Camping', icon: <FaCampground size={24}/> },
    {id:9, name: 'A-frames', icon: <GiCampingTent size={24}/> },
    {id:10, name: 'Domes', icon: <GiLightningDome size={24}/> },
    {id:11, name: 'Tiny Homes', icon: <BiHomeAlt size={24}/> },
    {id:12, name: 'Treehouses', icon: <GiEvilTree size={24}/> },
    {id:13, name: 'Surfing', icon: <GiWaveSurfer size={24}/> },
    {id:14, name: 'CountrySide', icon: <GiMountainCave size={24}/> },
    {id:15, name: 'Golfing', icon: <GiGolfFlag size={24}/> },
    {id:16, name: 'Cabines', icon: <MdCabin size={24}/> },
    {id:17, name: 'Earth Homes', icon: <RiEarthquakeFill size={24}/> },
    {id:18, name: 'Tropical', icon: <FaUmbrellaBeach size={24}/> },
    {id:19, name: 'Caves', icon: <GiCaveEntrance size={24}/> },
    {id:20, name: 'Amazing Pools', icon: <FaSwimmingPool size={24}/> },
];