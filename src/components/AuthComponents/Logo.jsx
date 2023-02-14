import styled from "styled-components"

const Logo = () => {
  return (
    <LogoStyled className="logo-box">
      <img className="logo-img" src="./src/assets/LOGO BLANC CTW.png" />
    </LogoStyled>
  )
}

export default Logo

const LogoStyled = styled.div`
  width: 25vw;
  margin: 0 auto;
  padding-top: 10vh;
  .logo-img {
    width: 100%;
  }

  @media (max-width: 450px) {
    width: 70vw;
    padding-bottom: 2vh;
  }
`
