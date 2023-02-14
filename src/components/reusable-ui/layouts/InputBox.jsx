import styled from "styled-components"

export default function InputBox({ children }) {
  return <InputBoxStyled>{children}</InputBoxStyled>
}

const InputBoxStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`
