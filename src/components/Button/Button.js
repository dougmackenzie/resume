// Animation credit: https://codemyui.com/button-border-and-text-color-fill-on-hover/

import styled, { css } from "styled-components";

const width = "2px";
const duration = "0.25s";

export const buttonStyles = css`
  position: relative;
  background: none;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 2px;
  
`;

const Button = styled.a`
  ${buttonStyles}

  box-shadow: inset 0 0 0 ${width} ${props => props.theme.color.info};
  color: ${props => props.theme.color.info};
  transition: color ${duration} ${duration} / 3;

  &::before,
  &::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: "";
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    right: 0;
  }

  &::before {
    border-bottom-width: ${width};
    border-left-width: ${width};
  }

  &::after {
    border-top-width: ${width};
    border-right-width: ${width};
  }

  &:hover {
    color: ${props => props.theme.color.highlight};

    &::before,
    &::after {
      border-color: ${props => props.theme.color.highlight};
      transition: border-color 0s, width ${duration}, height ${duration};
      width: 100%;
      height: 100%;
    }

    &::before {
      transition-delay: 0s, 0s, ${duration};
    }

    &::after {
      transition-delay: 0s, ${duration}, 0s;
    }
  }
`;

export default Button;
