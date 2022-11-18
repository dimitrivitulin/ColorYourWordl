import styled from "styled-components";

export const InputWrap = styled.input`
  outline: none;
  border: 2px solid #fff;
  border-radius: 999px;
  padding: 5px;
  width:${props => props.small ? "180px" : "250px"};
  font-size: ${props => props.small ? "0.8rem" : "1.5rem"};
  text-align: center;
`