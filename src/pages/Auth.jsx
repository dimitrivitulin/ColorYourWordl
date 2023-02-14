import styled from "styled-components"
import ImgMap from "../components/AuthComponents/ImgMap"
import Logo from "../components/AuthComponents/Logo"
import InputBox from "../components/reusable-ui/layouts/InputBox"
import LinkInput from "../components/reusable-ui/LinkInput"
// import { InputBox } from "../components/styles/InputBox.styled"

const Auth = () => {
  return (
    <AuthStyled>
      <Logo />
      <InputBox>
        <LinkInput LinkTo={"/login"} linkText="Se connecter" />
        <LinkInput LinkTo={"/register"} linkText="S'inscrire" />
      </InputBox>
      <ImgMap />
    </AuthStyled>
  )
}

export default Auth

const AuthStyled = styled.div`
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
