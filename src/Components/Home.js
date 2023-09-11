import React from 'react';
import rag from '../Images/RaghuImg.JPG'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-scroll';

const Home = () => {   
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24'>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-2xl sm:text-5xl font-bold text-white'>I am a Full Stack Developer</h2>
          <p className='text-gray-500 py-4'>
          Aspiring for the position of Web Developer where I can
          use my extensive knowledge of programming languages and 
          frameworks to develop efficient web applications. I have 
          good knowledge on technologies like HTML, CSS, Javascript,
          Tailwind CSS, Styled Components, React JS, Redux, Firebase,
          Java, JDBC, Spring Boot, RESTFUL Services, MS SQL.
          </p>
          <div>
            <Link to="portfolio" className='group text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 ml-1 duration-300'>
                <AiOutlineArrowRight size={20}></AiOutlineArrowRight>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={rag} className='rounded-2xl mx-auto w-2/5' alt="my profile" />
        </div>
      </div>
    </div>
  )
}

export default Home