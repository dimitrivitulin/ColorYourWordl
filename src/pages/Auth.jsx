import React from 'react'
import { Link } from 'react-router-dom'
import ImgMap from '../components/AuthComponents/ImgMap'
import Logo from '../components/AuthComponents/Logo'
import { AuthBox } from '../components/styles/AuthBox.styled'
import { InputBox } from '../components/styles/InputBox.styled'
import { LinkWrap } from '../components/styles/LinkWrap.styled'


const Auth = () => {
  return (
    <AuthBox>
      <Logo/>
      <InputBox>
        <LinkWrap>
          <Link to="/login">Se connecter</Link>
        </LinkWrap>
        <LinkWrap>
          <Link to="/register">S'inscrire</Link>
        </LinkWrap>
      </InputBox>
      <ImgMap />
    </AuthBox>
  )
}

export default Auth