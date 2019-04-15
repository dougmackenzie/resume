import styled from "styled-components";
import commonInput from "./commonInput";

const SubmitButton = styled.button.attrs({
  type: "submit"
})`
  ${commonInput};
  background: #fff;
  width: 100%;

  @media (min-width: 769px) {
    width: 200px;
  }
`;

export default SubmitButton;
