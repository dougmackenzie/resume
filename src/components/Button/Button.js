// Animation credit: https://codemyui.com/button-border-and-text-color-fill-on-hover/

import styled, { css } from "styled-components";

export const buttonStyles = css`
  display: inline-block;
  position: relative;
  background: ${props => props.theme.color.highlight};
  color: #333;
  text-decoration: none;
  font-size: ${props => (props.small ? "0.875rem" : "1rem")};
  font-weight: 700;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 3px;
`;

const Button = styled.a`
  ${buttonStyles}
`;

export default Button;
