import React from 'react'
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Shop as ShopIcon,
  AssignmentIndRounded as AssignmentIcon,
} from '@mui/icons-material'

function Homesection() {
  return (
    <section>
      <div className='bg-black py-28 flex flex-col items-center justify-center'>
        <span className='text-4xl px-5 font-semibold text-white flex justify-start'>
          Hi! I&apos;m Ayush Pandit
        </span>
        <span className='text-white text-lg py-10 px-4'>
          I&apos;m a self-taught developer from India. I love building cool
          stuff for web and mobile using:
          <span className='font-semibold'> ReactJS, NodeJS, Flutter.</span>
        </span>
        <div className='flex flex-col justify-center items-center'>
          <span className='text-white text-lg py-3 bg-emerald-600 px-10 rounded-[10px] my-[4px]'>
            #Flutter
          </span>
          <span className='text-white text-lg py-3 bg-emerald-600 px-10 rounded-[10px] my-[4px]'>
            #ReactJS
          </span>
          <span className='text-white text-lg py-3 bg-emerald-600 px-10 rounded-[10px] my-[4px]'>
            #NodeJS
          </span>
        </div>

        <div className='space-x-10 py-5'>
          <a href='https://github.com/Ayushpanditmoto'>
            <GitHubIcon className='text-blue-600 hover:cursor-pointer ' />
          </a>
          <a href='https://www.linkedin.com/in/ayushpanditmoto/'>
            <LinkedInIcon className='text-blue-600 hover:cursor-pointer ' />
          </a>
          <a href='https://play.google.com/store/apps/developer?id=Ayush+Pandit'>
            <ShopIcon className='text-blue-600 hover:cursor-pointer ' />
          </a>
          <a href='/blogs'>
            <AssignmentIcon className='text-blue-600 hover:cursor-pointer ' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Homesection
