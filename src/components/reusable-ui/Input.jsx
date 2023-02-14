import styled from "styled-components"

export default function Input({ type, name, placeholder, reference, small }) {
  return (
    <InputStyled
      type={type}
      name={name}
      placeholder={placeholder}
      ref={reference}
      small={small}
    />
  )
}

const InputStyled = styled.input`
  outline: none;
  border: 2px solid #fff;
  border-radius: 999px;
  padding: 5px;
  width: ${(props) => (props.small ? "180px" : "250px")};
  font-size: ${(props) => (props.small ? "0.8rem" : "1.5rem")};
  text-align: center;
`
