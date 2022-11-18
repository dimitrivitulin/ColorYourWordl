import React from 'react'
import styled from 'styled-components'

const LogoHomeBox = styled.div`
  width: 7vw;
  margin:0 auto;
  @media (max-width:450px){
    width: 20vw;
  }
`
const ImgLogo = styled.img`
  width: 100%;
`

const LogoHome = () => {
  return (
    <LogoHomeBox>
      <ImgLogo src='./src/assets/LOGO BLANC CTW.png' />
    </LogoHomeBox>
  )
}

export default LogoHome