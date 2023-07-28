import React from 'react'

const About = () => {
    return (
        <div name="about"
            className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className="text-xl mt-14">
                    I have 1 year 4 months of real time experience in Java Backend technologies like Spring, Spring Boot, JDBC, Hibernate, ORM, Spring MVC, RESTFUL Services, MS SQL Server. Currently, I am learning React Js and building some projects on HTML, CSS, JavaScript, Tailwind CSS, React JS.
                </p>

                <br />

                {/* <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid cupiditate odit nemo error adipisci suscipit similique dignissimos tempora? Illum fugit ratione temporibus molestias! Omnis, aliquid tenetur? In natus, dignissimos, perspiciatis sequi eius officia ipsa cum tempore cumque nostrum nulla possimus? Quos sapiente unde dolorum harum reiciendis et voluptas necessitatibus!
                </p> */}
            </div>
        </div>
    )
}

export default About