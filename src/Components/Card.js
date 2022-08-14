import React from 'react'

function Card({ title, description, image, link, tags }) {
  return (
    <div className='max-w-[500px] m-4 rounded overflow-hidden shadow-lg bg-zinc-800'>
      <img
        height={281}
        width={500}
        className='w-full'
        src={image}
        alt='Sunset in the mountains'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-white text-xl mb-2'>
          <a href={link}>{title}</a>
        </div>
        <p className='text-white text-base  font-semibold'>{description}</p>
      </div>
      <div className='px-6 pt-4 pb-2 '>
        {tags.map((tag) => (
          <span
            key={tag}
            className='inline-block bg-[#2D3748] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Card
