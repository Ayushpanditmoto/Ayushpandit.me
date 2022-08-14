import React from 'react'
import Header from '../Components/Header'
import Homesection from '../Components/Homesection'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
      <div className='bg-black h-screen w-screen'>
        <Header />
        <Homesection />
        <Footer />
      </div>
    </>
  )
}

export default Home
