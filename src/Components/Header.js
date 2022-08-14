import React from 'react'
// import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-black h-15 py-5 flex justify-evenly items-center '>
      <div className='px-2'>
        <a href='/'>
          <h1 className='text-white text-3xl font-semibold hover:cursor-pointer'>
            Esarkari
          </h1>
        </a>
      </div>
      <div className='flex'>
        <ul className='flex space-x-3'>
          <a href='/projects'>
            <li className=' bg-gray-600 py-2 px-3 rounded-md shadow-lg hover:bg-blue-600 '>
              <span className='font-normal text-md text-white '>Projects</span>
            </li>
          </a>
          <a href='/blogs'>
            <li className='bg-gray-600 py-2 px-3 rounded-md shadow-lg hover:bg-blue-600'>
              <span className='font-normal text-md text-white'>About me</span>
            </li>
          </a>
        </ul>
      </div>
    </header>
  )
}

export default Header
