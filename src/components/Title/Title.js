import styled from "styled-components";

const Title = styled.h3`
  font-size: 1.125rem;
  margin: 0 0 0.5rem;
  font-weight: 700;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

export default Title;
