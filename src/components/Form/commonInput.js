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

  /*  Remove validation box shadows for Firefox cause of a bug:
      https://bugzilla.mozilla.org/show_bug.cgi?id=1399046
  */
  :-moz-submit-invalid {
    box-shadow: none;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
`;

export default commonInput;
