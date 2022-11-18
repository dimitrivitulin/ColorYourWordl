import React from 'react'
import styled from 'styled-components'
import { ImgMapBox } from '../styles/ImgMapBox.styled'

const Img = styled.img`
  width: 100%;
`

const ImgMap = () => {
  return (
    <ImgMapBox>
        <Img src='./src/assets/WOLD SPLASH.png'/>
    </ImgMapBox>
  )
}

export default ImgMap