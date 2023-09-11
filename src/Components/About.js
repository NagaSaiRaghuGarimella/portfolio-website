import React from 'react'

const About = () => {
    return (
        <div name="about"
            className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className="text-xl mt-14 ml-4">
                Aspiring for the position of Web Developer where I can
                use my extensive knowledge of programming languages and 
                frameworks to develop efficient web applications. I have 
                good knowledge on technologies like HTML, CSS, Javascript,
                Tailwind CSS, Styled Components, React JS, Redux, Firebase,
                Java, JDBC, Spring Boot, RESTFUL Services, MS SQL.
                </p>

                <br />
            </div>
        </div>
    )
}

export default About