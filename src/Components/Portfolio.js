import React from 'react';
import facebook from '../Images/facebook.png';
import tourism from '../Images/tourism.png';
import acmaintenance from '../Images/ac-maintnance.png';
import electricity from '../Images/electricity-bill.png';
import buffet from '../Images/buffet.png';
import instagram from '../Images/instagram.png';
import brochill from '../Images/brochill.png';
import login from '../Images/login.png';
import boat from '../Images/boat.png'



const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: facebook,
            link:'https://github.com/NagaSaiRaghuGarimella/FacebookWithTailwind',
            href:'https://splendid-marshmallow-38aba5.netlify.app/'
        },
        {
            id: 2,
            src: instagram,
            link:'https://github.com/NagaSaiRaghuGarimella/Instagram',
            href:'https://master--bucolic-kulfi-91a735.netlify.app/'
        },
        {
            id: 3,
            src: brochill,
            link:'https://github.com/NagaSaiRaghuGarimella/Brochill',
            href:'https://magnificent-churros-19e10e.netlify.app/'
        },
        {
            id: 4,
            src: login,
            link:'https://github.com/NagaSaiRaghuGarimella/LoginControlForm',
            href:'https://cute-starburst-7f4183.netlify.app/'
        },
        {
            id: 5,
            src: boat,
            link:'https://github.com/NagaSaiRaghuGarimella/Boat-app',
            href:'https://raghu-html.netlify.app/'
        },
        {
            id: 6,
            src: electricity,
            link:'https://github.com/NagaSaiRaghuGarimella/ElectricityBill',
            href:'https://clever-croissant-89f3a8.netlify.app/'
        },
        {
            id: 7,
            src: tourism,
            link:'https://github.com/NagaSaiRaghuGarimella/SingaporeTourism',
            href:'https://playful-crumble-c72f75.netlify.app/'
        },
        {
            id: 8,
            src: buffet,
            link:'https://github.com/NagaSaiRaghuGarimella/Buffet',
            href:'https://aesthetic-cobbler-00da61.netlify.app/'
        },
        {
            id: 9,
            src: acmaintenance,
            link:'https://github.com/NagaSaiRaghuGarimella/Acmaintanance',
            href:'https://lustrous-phoenix-479e52.netlify.app/'
        },

    ]
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white pt-24'>
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full w-full">
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-12 sm:px-0'>
                    {portfolios.map(({ id, src, link, href}) => {

                      return  <div key ={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt="" className=' w-80 h-52 rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center '>
                                <button className='px-6 py-3 m-4 duration-200 hover:scale-105'><a href={href}>Deploy</a></button>
                                <button className='px-6 py-3 m-4 duration-200 hover:scale-105'><a href={link}>github</a></button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Portfolio