import React from 'react'
import html from '../Images/html.png';
import css from '../Images/css.png';
import js from '../Images/javascript.png';
import tailwind from '../Images/tailwind.png';
import react from '../Images/react.png';
import java from '../Images/java.png';
import github from '../Images/github.png';


const Skills = () => {
    const s=[
                  {
                    id:1,
                    src:html,
                    title:"HTML",
                    style:"shadow-orange-500"
                  },

                  {
                    id:2,
                    src:css,
                    title:"CSS",
                    style:"shadow-blue-500"
                  },
                  {
                    id:3,
                    src:js,
                    title:"JavaScript",
                    style:"shadow-pink-500"
                  },
                  {
                    id:4,
                    src:react,
                    title:"React",
                    style:"shadow-blue-800"
                  },
                  {
                    id:5,
                    src:tailwind,
                    title:"Tailwind",
                    style:"shadow-yellow-500"
                  },
                  {
                    id:6,
                    src:java,
                    title:"Java",
                    style:"shadow-white-500"
                  },
                  {
                    id:7,
                    src:github,
                    title:"GitHub",
                    style:"shadow-gray-500"
                  },

                          ]
  return (
       <div name="skills" className='bg-gradient-to-b from-black to-gray-800 w-full pt-24'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white'>
            <div>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
            <p className='py-6'>These are the technologies I have known</p>
            <div  className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8
             px-12 sm:px-0'>
                {s.map(({id,src,title,style})=>{
                    return <div key={id} className={`shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-500 ${style}`}>
                    <img src={src} alt="my data" className="w-20 h-28 mx-auto" />
                    <p className="">{title}</p>
                    </div> 
                })}
            
            </div>
        </div>
       </div>
    </div>
  )
}

export default Skills