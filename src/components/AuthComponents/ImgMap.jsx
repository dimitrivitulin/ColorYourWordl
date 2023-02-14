import React from "react"
import styled from "styled-components"

const ImgMap = () => {
  return (
    <ImgMapStyled>
      <img src="./src/assets/WOLD SPLASH.png" />
    </ImgMapStyled>
  )
}

export default ImgMap

const ImgMapStyled = styled.div`
  width: 15vw;
  margin: 0 auto;
  img {
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 50vw;
  }
`
