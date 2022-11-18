import styled from "styled-components";

export const ImgMapBox = styled.div`
width: ${props => props.small ? "15vw" : "10vw"};
margin: 0 auto;
margin-top: ${props => props.small ? "0" : "-15vh"};
@media(max-width: 450px){
  width: 50vw;
}
`