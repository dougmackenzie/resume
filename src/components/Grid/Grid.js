import styled from "styled-components";

const Grid = styled.div`
  display: grid;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${props =>
    props.fours &&
    `@media (min-width: ${props.theme.breakpoints.xl}) {
        grid-template-columns: repeat(4, 1fr);
      }
    `}
`;

export default Grid;
