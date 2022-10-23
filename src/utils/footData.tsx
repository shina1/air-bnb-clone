import  {FaSearch, FaRegHeart, FaRegUserCircle } from 'react-icons/fa';
interface footDataInt {
    id: number,
    content: string,
    link: string
}
interface mobileFootDdataInt {
    id: number,
    content: string,
    icon: any
}

export const footDatas: footDataInt[] = [
    {id: 1, content: "Privacy",link: '#'},
    {id: 2, content: "Terms",link: '#'},
    {id: 3, content: "Sitemap",link: '#'},
    {id: 4, content: "Destination",link: '#'}
]

export const mobileFootDdata: mobileFootDdataInt[] = [
    {id: 1, content: "Explore", icon: <FaSearch size={20} />},
    {id: 2, content: "Wishlist", icon: <FaRegHeart size={20} />},
    {id: 3, content: "Login", icon: <FaRegUserCircle size={20} />}
]