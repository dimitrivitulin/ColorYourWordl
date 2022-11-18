import styled from "styled-components";

export const Button = styled.button`
  background-color: #53A0F6;
  color:whitesmoke;
  border: none;
  outline:none;
  box-shadow: 2px 2px 30px #ffffff45;
  border-radius: 999px;
  padding: 10px;
  margin-top: 20px;
  width:${props => props.small ? "180px" : "260px"};
  font-size: ${props => props.small ? "0.8rem" : "1.2rem"};
  text-align: center;
  cursor: pointer;
`