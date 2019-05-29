import { css } from "styled-components";

const commonInput = css`
  background: transparent;
  color: inherit;
  border-radius: 2px;
  border: none;
  border-bottom: 1px solid #555;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  font-weight: 400;
  width: 100%;
  color: #eee;
  transition: all 0.2s;

  :disabled {
    color: #999;
  }

  :focus {
    border-bottom-color: #ccc;
    outline: none;
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
