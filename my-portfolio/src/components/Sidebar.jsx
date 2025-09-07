import React from 'react'
import ProfileImg_1 from '../assets/ProfileImg_1.jpeg'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Sidebar = ({ isMobile }) => {
  return (
    <div
      className={`w-70 h-screen bg-slate-800 border-r border-gray-200/50 p-5 z-20 top-0
        ${isMobile ? '' : 'hidden md:block sticky top-0'}`}
    >
        <div className='flex flex-col items-center justify-center gap-6 mt-10 mb-7'>
            <img 
            src={ProfileImg_1} 
            alt="Profile"
            className='w-35 h-35 bg-slate-400 rounded-full' />
            <div className="flex flex-row gap-6 mt-2">
                <a href="https://www.linkedin.com/in/muneeb130779/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className="text-3xl text-blue-600 hover:text-blue-800" />
                </a>
                <a href="https://github.com/Muneeb077" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub className="text-3xl text-gray-300 hover:text-white" />
                </a>
            </div>
            <div>
                <p className='text-white text-center'> Student of Memorial Universtiy of Newfoundland</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar