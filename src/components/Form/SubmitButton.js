import styled from "styled-components";
import { buttonStyles } from "../Button/Button";

const SubmitButton = styled.button.attrs({
  type: "submit"
})`
  ${buttonStyles}
  width: 100%;
  color: ${props => (props.success ? "#fff" : "#333")};
  transition: all 0.2s;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 0.9rem 0;
    width: 12rem;
  }

  // :not(:disabled):hover {
  //   background: ${props => props.theme.color.primary};
  //   color: #fff;
  // }

  ${props =>
    props.submitting &&
    `
    opacity: 0.8;
  `}
`;

export default SubmitButton;
