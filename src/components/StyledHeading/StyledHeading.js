import styled from "styled-components";

const StyledHeading = styled.h5`
  font-family: ${props => props.theme.font.heading};
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${props => props.color || "#eee"};
  text-transform: uppercase;
  margin: 1rem 0 1.5rem;
`;

export default StyledHeading;
