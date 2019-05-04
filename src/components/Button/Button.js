// Animation credit: https://codemyui.com/button-border-and-text-color-fill-on-hover/

import styled from "styled-components";

const color = "#58afd1";
const hover = "#ffe593";
const width = "2px";
const duration = "0.25s";

const Button = styled.a`
  position: relative;
  background: none;
  padding: 0.75rem 1.25rem;
  border: none;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  box-shadow: inset 0 0 0 ${width} ${color};
  color: ${color};
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
    color: ${hover};

    &::before,
    &::after {
      border-color: ${hover};
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
