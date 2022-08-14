import React from 'react'
import Header from '../Components/Header'

function Aboutme() {
  return (
    <>
      <Header />
      <div className='flex relative justify-center items-center h-[300px] bg-slate-500 w-screen'>
        <div className='z-20 h-48 w-48 bg-blue-600'></div>
        <div className='z-0 absolute bottom-100 left-1/2 h-48 w-48 bg-green-400'></div>
      </div>
      <div className=' h-[600px] bg-slate-500 w-screen'>
        <div className='z-0 h-48 w-48 bg-blue-600'></div>
        <div className='z-20 absolute left-1/2 h-48 w-48 bg-green-400'></div>
        <ul>
          <li>hey</li>
          <li>there</li>
        </ul>
        <ul>
          <li>world</li>
        </ul>
      </div>
    </>
  )
}

export default Aboutme
