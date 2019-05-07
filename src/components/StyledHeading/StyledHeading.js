import styled from "styled-components";

const StyledHeading = styled.h5`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #666;
  text-transform: uppercase;
  margin: 1rem 0 1.5rem;
  text-align: center;

  display: grid;
  grid-template-columns: 2rem max-content 0;
  grid-template-rows: 1rem 0;
  grid-gap: 0 1rem;
  align-items: center;

  :after,
  :before {
    content: " ";
    display: block;
    border-top: 1px solid #f6921e;
    border-bottom: 1px solid #f6921e;
    height: 1px;
  }
`;

export default StyledHeading;
