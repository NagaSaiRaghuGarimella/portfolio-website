import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 pt-24'>
        <div className="text-white">
        <p className='text-4xl font-bold inline border-gray-500 border-b-4'>Contact Details</p>
        <ul className='mx-32 my-10'>
            <li className='py-2 font-bold'>Mobile No: 9553962064</li>
            <li className="py-2 font-bold">Email: <span className='border-white border-b-2'>gnsraghu@gmail.com</span></li>
        </ul>

        </div>
    </div>
  )
}

export default Contact