import styled from "styled-components";

const RainbowUnderline = styled.span`
  background-image: ${props => `linear-gradient(
    120deg,
    rgba(132, 250, 176, ${props.opacity}) 0%,
    rgba(143, 211, 244, ${props.opacity}) 100%
  )`};
  background-repeat: no-repeat;
  background-size: 0 0.2em;
  background-position: 0 92%;
  transition: background-size 0.25s ease-in;
`;

export default RainbowUnderline;
