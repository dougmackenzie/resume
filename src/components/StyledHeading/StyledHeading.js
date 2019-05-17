import styled from "styled-components";

const StyledHeading = styled.h5`
  font-family: ${props => props.theme.font.heading};
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: #666;
  text-transform: uppercase;
  margin: 1rem 0 1.5rem;

  text-align: center;
  display: -ms-grid;
  display: grid;
  grid-template-columns: 1rem max-content 0;
  grid-template-rows: 1rem 0;
  grid-gap: 0 1rem;
  align-items: center;

  :after,
  :before {
    content: " ";
    display: block;
    border-top: 3px solid ${props => props.theme.color.highdark};
  }
`;

export default StyledHeading;
