import React from 'react'
import Header from '../Components/Header'
import Homesection from '../Components/Homesection'
import Footer from '../Components/Footer'
import styled from 'styled-components'

function Home() {
  return (
    <>
      <HomeContainer>
        <Header />
        <Homesection />
        <Footer />
      </HomeContainer>
    </>
  )
}

export default Home

const HomeContainer = styled.div`
  background-color: #000000;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
`
