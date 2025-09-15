import React, {useState} from 'react'
import {HiOutlineMenu, HiOutlineX} from "react-icons/hi";
import Sidebar from './Sidebar';

const Navbar = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div className='flex gap-5 bg-slate-800 py-6 px-10 z-30'>
        
      <button 
        className='block lg:hidden text-white'
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}>

        {openSideMenu ? (
          <HiOutlineX className='text-2xl' />
          ) : (
          <HiOutlineMenu className='text-2xl' />
        )}
        </button>
        
        {openSideMenu && (
          <div className='fixed top-[60px] left-0 z-40 bg-white'>
            <Sidebar isMobile={true}/>
          </div>
        )}
    </div>
  )
}

export default Navbar