import React from 'react'
import { FavoriteOutlined } from '@mui/icons-material'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer>
      <span>
        Made With
        <FavoriteOutlined />
      </span>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  height: 100px;
  span {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .MuiSvgIcon-root {
    color: #ff0000;
    font-size: 1.6rem;
    margin: 0 5px;
  }
`
