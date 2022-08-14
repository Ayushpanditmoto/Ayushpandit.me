import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-black h-15 py-5 flex justify-evenly items-center '>
      <div className='px-2'>
        <Link to='/'>
          <span className=' bg-gray-600 py-3 px-3 rounded-md shadow-lg hover:bg-blue-600 '>
            <span className='font-normal text-md text-white '>Home</span>
          </span>
        </Link>
      </div>
      <div className='flex'>
        <ul className='flex space-x-3'>
          <Link to='/projects'>
            <li className=' bg-gray-600 py-2 px-3 rounded-md shadow-lg hover:bg-blue-600 '>
              <span className='font-normal text-md text-white '>Projects</span>
            </li>
          </Link>
          <Link to='/blogs'>
            <li className='bg-gray-600 py-2 px-3 rounded-md shadow-lg hover:bg-blue-600'>
              <span className='font-normal text-md text-white'>About me</span>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header
