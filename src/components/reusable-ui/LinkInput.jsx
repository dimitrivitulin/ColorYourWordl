import { Link } from "react-router-dom"
import styled from "styled-components"

export default function LinkInput({ LinkTo, linkText }) {
  return (
    <LinkInputStyled>
      <Link to={LinkTo}>{linkText}</Link>
    </LinkInputStyled>
  )
}

const LinkInputStyled = styled.div`
  border: 2px solid #fff;
  border-radius: 999px;
  padding: 5px;
  width: 250px;
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;
    display: inline-block;
    width: 100%;
    text-align: center;
  }
`
