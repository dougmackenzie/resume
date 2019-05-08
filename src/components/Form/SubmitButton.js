import styled from "styled-components";
import commonInput from "./commonInput";

const SubmitButton = styled.button.attrs({
  type: "submit"
})`
  ${commonInput};
  background: #fff;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 200px;
  }
`;

export default SubmitButton;
