import React from 'react'
import Header from '../Components/Header'
import styled from 'styled-components'
import photo from '../photo.png'

function Aboutme() {
  return (
    <>
      <Header />
      <AboutmeContainer>
        <AboutmePhoto>
          <img src={photo} alt='aboutme' />
        </AboutmePhoto>
        <AboutmeText>
          <h1>ABOUT ME</h1>
          <p>
            I am <span>Ayush Kumar Pandit</span> .Currently, I am
          </p>
          <p> pursuing my Bachelor of Engineering in </p>
          <p>
            <span>Metallurgy and Material Engineering</span> from
          </p>
          <p>
            <span>Jadavpur University</span>, Kolkata. Currently,
          </p>
          <p> I am a full Stack Web And Flutter Developer </p>
        </AboutmeText>
        <Contactme>
          <h1>CONTACT ME</h1>
          <p>
            <a href='mailto:ayushpanditmoto@gmail.com'>
              <span>Email:</span> ayushpanditmoto@gmail.com
            </a>
          </p>
          <p>
            <a href='https://www.linkedin.com/in/Ayushpanditmoto/'>
              <span>LinkedIn:</span> @Ayushpanditmoto
            </a>
          </p>
        </Contactme>
      </AboutmeContainer>
    </>
  )
}

export default Aboutme

const AboutmeContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #000000;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  p {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5;
  }
  p span {
    color: #ffffff;
    background-color: #ff0000;
    padding: 0 5px;
    border-radius: 5px;
  }
`

const AboutmePhoto = styled.div`
  margin: 20px;
  img {
    width: 200px;
    object-fit: cover;
    border-radius: 10%;
  }
`

const AboutmeText = styled.div`
  margin: 20px;
  h1 {
    color: #fff;
    font-size: 2rem;
  }
  p {
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.5;
  }
`

const Contactme = styled.div`
  margin: 20px;
  h1 {
    color: #fff;
    font-size: 2rem;
  }
  p {
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.5;
  }
  p span {
    color: #ffffff;
    background-color: #ff0000;
    padding: 0 5px;
    border-radius: 5px;
  }
`
