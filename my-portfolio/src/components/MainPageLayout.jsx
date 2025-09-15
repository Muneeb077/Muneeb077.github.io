import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MainPageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <p className='text-black text-3xl font-bold'> Projects</p>
          {children}
          </main>
      </div>
    </div>
  )
}

export default MainPageLayout
