import React from 'react'
import ProfileImg_1 from '../assets/ProfileImg_1.jpeg'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Sidebar = ({ isMobile }) => {
  return (
    <div
      className={`w-70 h-screen bg-slate-800 p-8 z-20 top-0
        ${isMobile ? '' : 'hidden md:block sticky top-0'}`}
    >
        <div className='flex flex-col items-center justify-center gap-6 mt-4 mb-7'>
            <img 
            src={ProfileImg_1} 
            alt="Profile"
            className='w-40 h-40 bg-slate-400 rounded-full' />
            <h2 className='text-2xl font-medium text-white text-center whitespace-nowrap'>Muneeb Ur Rehman</h2>
            <div className="flex flex-row gap-6 mt-0">
                <a href="https://www.linkedin.com/in/muneeb130779/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className="text-3xl text-blue-600 hover:text-blue-800" />
                </a>
                <a href="https://github.com/Muneeb077" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub className="text-3xl text-gray-300 hover:text-white" />
                </a>
            </div>
            <div>
                <p className='text-white text-center text-base whitespace-nowrap'> CS @ MUN | Software Developer</p>
                <p className='text-white text-center text-xs'>St John's, Canada</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar