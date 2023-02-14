import styled from "styled-components"

export default function Validation({ children }) {
  return <ValidationStyled>{children}</ValidationStyled>
}

const ValidationStyled = styled.p`
  color: lightyellow;
  margin: 20px 15vw;
  text-align: center;
`
