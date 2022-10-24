//@ts-ignore
import { v4 as uuidv4 } from 'uuid';

let cardId = uuidv4()
export interface imageInterface {
    id: number,
    link: string
}

export interface enumGalleryData {
    id: number,
    imgs: imageInterface[]
    location: string,
    description: string,
    date: string,
    price: number,
    priceDetail: string,
    rating: number,
    category: string,
    newAds: boolean
}


export const cardgalleryDatas: enumGalleryData[] =[
    {
        id: 1,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Lagos, Nigeria',
        description: '6,789 kilometers away',
        date: 'Nov 13-18',
        price: 50,
        priceDetail: 'night',
        rating: 4.2,
        category: 'design',
        newAds: false
    },
    {
        id: 2,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'China, Greece',
        description: '3,022 kilometers away',
        date: 'Nov 13-18',
        price: 50,
        priceDetail: 'night',
        rating: 4.2,
        category: 'design',
        newAds: false
    },
    {
        id: 3,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Villarrubia, Spain',
        description: '3,022 kilometers away',
        date: 'Nov 13-18',
        price: 50,
        priceDetail: 'night',
        rating: 4.2,
        category: 'design',
        newAds: true
    }, {
        id: 4,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1591170715502-fbc32adc4f52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1547166812-0fca6370dc03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Chaina, Greece',
        description: '3,022 kilometers away',
        date: 'Nov 13-18',
        price: 50,
        priceDetail: 'night',
        rating: 4.2,
        category: 'a-frames',
        newAds: false,
    }, {
        id: 5,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Lagos, Nigeria',
        description: '3,022 kilometers away',
        date: 'Jan 30 - Feb 5',
        price: 50,
        priceDetail: 'night',
        rating: 4.2,
        category: 'amazing pools',
        newAds: false
    }, {
        id: 6,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1581467695675-7e3753e5ab26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://plus.unsplash.com/premium_photo-1661963080918-263cf79261f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Jardim do Mar, Portugal',
        description: '3,022 kilometers away',
        date: 'Jan 30 - Feb 5',
        price: 50,
        priceDetail: 'night',
        rating: 4.2,
        category: 'design',
        newAds: false
    },{
        id: 7,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1488707872600-5507977fe355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Marrakesh, Morocco',
        description: '3,022 kilometers away',
        date: 'Jan 30 - Feb 5',
        price: 50,
        priceDetail: 'night',
        rating: 4.2,
        category: 'tropical',
        newAds: false
    },{
        id: 8,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1542928658-22251e208ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Tarifa, Spain',
        description: '3,022 kilometers away',
        date: 'Jan 30 - Feb 5',
        price: 250,
        priceDetail: 'night',
        rating: 4.2,
        category: 'golfing',
        newAds: false
    },{
        id: 9,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://plus.unsplash.com/premium_photo-1661939435669-3c219c5d168f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Argolida, Greece',
        description: '3,022 kilometers away',
        date: 'Jan 30 - Feb 5',
        price: 250,
        priceDetail: 'night',
        rating: 4.2,
        category: 'countryside',
        newAds: false
    },{
        id: 10,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Ronda, Spain',
        description: '3,022 kilometers away',
        date: 'Jan 30 - Feb 5',
        price: 250,
        priceDetail: 'night',
        rating: 4.2,
        category: 'earth homes',
        newAds: false
    },{
        id: 11,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'China, Greece',
        description: '3,022 kilometers away',
        date: 'Jan 30 - Feb 5',
        price: 250,
        priceDetail: 'night',
        rating: 4.2,
        category: 'surfing',
        newAds: false
    },{
        id: 12,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1603512500383-f1f87c13ffc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Ronda, Spain',
        description: '3,022 kilometers away',
        date: 'Nov 1-6',
        price: 250,
        priceDetail: 'night',
        rating: 4.2,
        category: 'tiny homes',
        newAds: false
    },{
        id: 13,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://plus.unsplash.com/premium_photo-1661879463320-27174a27d668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'China, Greece',
        description: '3,022 kilometers away',
        date: 'Nov 23-30',
        price: 250,
        priceDetail: 'night',
        rating: 4.2,
        category: 'design',
        newAds: false
    },{
        id: 14,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1488707872600-5507977fe355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Marrakesh, Morocco',
        description: '3,022 kilometers away',
        date: 'Nov 23-30',
        price: 250,
        priceDetail: 'night',
        rating: 4.2,
        category: 'omg!',
        newAds: false
    },{
        id: 15,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1571387384064-ed3f73470065?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Ronda, Spain',
        description: '3,022 kilometers away',
        date: 'Nov 23-30',
        price: 250,
        priceDetail: 'night',
        rating: 4.2,
        category: 'domes',
        newAds: false
    },{
        id: 16,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'China, Greece',
        description: '3,022 kilometers away',
        date: 'Nov 23-30',
        price: 250,
        priceDetail: 'night',
        rating: 4.2,
        category: 'treehouses',
        newAds: false
    },{
        id: 17,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://plus.unsplash.com/premium_photo-1661925259824-e106bca657ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Marrakesh, Morocco',
        description: '3,022 kilometers away',
        date: 'Nov 23-30',
        price: 1550,
        priceDetail: 'night',
        rating: 4.2,
        category: 'national parks',
        newAds: false
    },{
        id: 18,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1582417728413-b2347161b864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Ronda, Spain',
        description: '3,022 kilometers away',
        date: 'Nov 23-30',
        price: 1550,
        priceDetail: 'night',
        rating: 4.2,
        category: 'shared homes',
        newAds: false
    },{
        id: 19,
        imgs: [
            {id: 1, link: 'https://plus.unsplash.com/premium_photo-1661962375627-92fe879921df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1585264550248-1778be3b6368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'China, Greece',
        description: '3,022 kilometers away',
        date: 'Nov 23-30',
        price: 1550,
        priceDetail: 'night',
        rating: 4.2,
        category: 'treehouses',
        newAds: false
    },{
        id: 20,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1592247350271-c5efb34dd967?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Marrakesh, Morocco',
        description: '3,022 kilometers away',
        date: 'Nov 23-30',
        price: 1550,
        priceDetail: 'night',
        rating: 4.2,
        category: 'surfing',
        newAds: false
    },{
        id: 21,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1574620845949-61a08a005988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1585128792020-803d29415281?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1600210491305-7396500b5b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location:'Ronda, Spain',
        description: '3,022 kilometers away',
        date: 'Nov 23-30',
        price: 1550,
        priceDetail: 'night',
        rating: 4.7,
        category: 'domes',
        newAds: false
    },{
        id: 22,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1560026301-88340cf16be7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1632829882891-5047ccc421bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1532344214108-1b6d425db572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'China, Greece',
        description: '3,022 kilometers away',
        date: 'Dec 18-23',
        price: 1550,
        priceDetail: 'night',
        rating: 4.7,
        category:  'shared homes',
        newAds: false
    },{
        id: 23,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://plus.unsplash.com/premium_photo-1661937866889-54f51406b021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Ronda, Spain',
        description: '3,022 kilometers away',
        date: 'Dec 18-23',
        price: 1550,
        priceDetail: 'night',
        rating: 4.7,
        category: 'lakefront',
        newAds: false
    },{
        id: 24,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1503594384566-461fe158e797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1585821569331-f071db2abd8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Marrakesh, Morocco',
        description: '3,022 kilometers away',
        date: 'Dec 18-23',
        price: 1550,
        priceDetail: 'night',
        rating: 4.7,
        category: 'tiny homes',
        newAds: false
    },{
        id: 25,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1588471980726-8346cb477a33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location:'Ronda, Spain',
        description: '3,022 kilometers away',
        date: 'Dec 18-23',
        price: 1550,
        priceDetail: 'night',
        rating: 4.7,
        category: 'domes',
        newAds: false
    },{
        id: 26,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1586836930332-6a1e2cb08e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location:'Ronda, Spain',
        description: '3,022 kilometers away',
        date: 'Dec 18-23',
        price: 1550,
        priceDetail: 'night',
        rating: 4.7,
        category: 'national parks',
        newAds: false
    },{
        id: 27,
        imgs: [
            {id: 1, link: 'https://media.istockphoto.com/photos/residential-community-in-western-usa-with-modern-homes-at-sunrise-picture-id1337285643?b=1&k=20&m=1337285643&s=170667a&w=0&h=Cr6dyN6gg4UtnuW__-YW1wxITO5JNykJSNo3FlFtYCY='},
            {id: 2, link: 'https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://plus.unsplash.com/premium_photo-1661963119619-e0e4bab009f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Marrakesh, Morocco',
        description: '3,022 kilometers away',
        date: 'Dec 18-23',
        price: 74,
        priceDetail: 'night',
        rating: 4.2,
        category: 'cabines', 
        newAds: false
    },{
        id: 28,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Abuja, Nigeria',
        description: '3,022 kilometers away',
        date: 'Dec 18-23',
        price: 74,
        priceDetail: 'night',
        rating: 4.2,
        category: 'treehouses',
        newAds: false
    },{
        id: 29,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1583845112203-29329902332e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Nissi Beach, Cyprus',
        description: '3,022 kilometers away',
        date: 'Dec 18-23',
        price: 74,
        priceDetail: 'night',
        rating: 4.2,
        category: 'amazing pools',
        newAds: false
    },{
        id: 30,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Caparica, Portugal',
        description: '3,022 kilometers away',
        date: 'Dec 18-23',
        price: 74,
        priceDetail: 'night',
        rating: 3.8,
        category:  'caves',
        newAds: true
    },{
        id: 31,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://plus.unsplash.com/premium_photo-1661963119619-e0e4bab009f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Ronda, Spain',
        description: '3,022 kilometers away',
        date: 'Dec 18-23',
        price: 74,
        priceDetail: 'night',
        rating: 3.8,
        category:  'carbin',
        newAds: true
    },{
        id: 32,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1623920996377-9c5cd536143e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1583845112203-29329902332e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Mikonos, Greece',
        description: '3,022 kilometers away',
        date: 'Dec 18-23',
        price: 74,
        priceDetail: 'night',
        rating: 3.8,
        category:'golfing',
        newAds: true
    },{
        id: 33,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location:'Ronda, Spain',
        description: '3,022 kilometers away',
        date: 'Dec 18-23',
        price: 74,
        priceDetail: 'night',
        rating: 3.8,
        category: 'tiny homes', 
        newAds: true
    },{
        id: 34,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Mikonos, Greece',
        description: '3,022 kilometers away',
        date: 'Dec 18-23',
        price: 74,
        priceDetail: 'night',
        rating: 3.8,
        category: 'bed & brakefast',
        newAds: true
    },
    {
        id: 35,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://plus.unsplash.com/premium_photo-1661962449952-29741f7dbbc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://plus.unsplash.com/premium_photo-1664392142923-60d7785253a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Caparica, Portugal',
        description: '6,789 kilometers away',
        date: 'Dec 18-23',
        price: 74,
        priceDetail: 'night',
        rating: 3.8,
        category: 'arctic', 
        newAds: true
    },
    {
        id: 36,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://plus.unsplash.com/premium_photo-1664392142923-60d7785253a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Mikonos, Greece',
        description: '6,789 kilometers away',
        date: 'Nov 13-18',
        price: 50,
        priceDetail: 'night',
        rating: 3.8,
        category: 'domes',
        newAds: true
    },{
        id: 37,
        imgs: [
            {id: 1, link: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
            {id: 2, link: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
            {id: 3, link: 'https://plus.unsplash.com/premium_photo-1664392142923-60d7785253a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        ],
        location: 'Caparica, Portugal',
        description: '6,789 kilometers away',
        date: 'Nov 13-18',
        price: 150,
        priceDetail: 'night',
        rating: 3.8,
        category: 'camping',
        newAds: false
    },
];