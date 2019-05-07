import styled from "styled-components";

const StyledHeading = styled.h5`
  font-family: "Oswald", Arial, serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: #666;
  text-transform: uppercase;
  margin: 1rem 0 1.5rem;
  text-align: center;

  display: grid;
  grid-template-columns: 1rem max-content 0;
  grid-template-rows: 1rem 0;
  grid-gap: 0 1rem;
  align-items: center;

  :after,
  :before {
    content: " ";
    display: block;
    border-top: 3px solid #f6921e;
  }
`;

export default StyledHeading;
