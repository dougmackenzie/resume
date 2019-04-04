import styled from "styled-components";

const Button = styled.a`
  padding: 10px;
  border: 2px solid #f6921e;
  color: #ccc;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.1s;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.1em;

  :hover {
    background: #f6921e;
    color: black;
  }
`;

export default Button;
