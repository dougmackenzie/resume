import { css } from "styled-components";

const commonInput = css`
  background: #fff;
  color: #333;
  border-radius: 2px;
  border: 1px solid #ccc;
  padding: 1rem 0.75rem;
  font-size: 1rem;
  width: 100%;

  :disabled {
    color: #999;
  }
`;

export default commonInput;
