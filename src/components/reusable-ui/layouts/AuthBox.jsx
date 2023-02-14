import styled from "styled-components"
import ImgMap from "../../AuthComponents/ImgMap"
import Logo from "../../AuthComponents/Logo"

export default function AuthBox({ children }) {
  return (
    <AuthBoxStyled>
      <Logo />
      {children}
      <ImgMap />
    </AuthBoxStyled>
  )
}

const AuthBoxStyled = styled.div`
  background-color: #3977f6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100vh;
  gap: 20px;
  font-family: "Anton", sans-serif;
  input,
  button {
    font-family: "Anton", sans-serif;
  }
`
