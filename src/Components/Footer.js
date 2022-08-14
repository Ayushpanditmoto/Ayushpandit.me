import React from 'react'
import { FavoriteOutlined } from '@mui/icons-material'

function Footer() {
  return (
    <div className='flex justify-center items-center bg-black text-white py-10'>
      Made With{' '}
      <FavoriteOutlined className='icons flex justify-center items-center text-red-600' />{' '}
    </div>
  )
}

export default Footer
