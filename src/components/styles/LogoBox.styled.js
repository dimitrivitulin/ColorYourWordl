import styled from "styled-components"

export const LogoBox = styled.div`
width: ${props => props.small ? "25vw" : "15vw"};
margin: 0 auto;
padding-top: ${props => props.small ? "10vh" : "5vh"};
@media(max-width: 450px){
  width: 70vw;
  padding-bottom: 2vh;
}
`
export const LogoImg = styled.img`
width: 100%;
`