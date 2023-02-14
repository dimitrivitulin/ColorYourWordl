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
  width: ${(props) => (props.small ? "25vw" : "15vw")};
  margin: 0 auto;
  padding-top: ${(props) => (props.small ? "10vh" : "5vh")};
  .logo-img {
    width: 100%;
  }

  @media (max-width: 450px) {
    width: 70vw;
    padding-bottom: 2vh;
  }
`
