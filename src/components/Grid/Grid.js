import styled from "styled-components";

const Grid = styled.div`
  display: -ms-grid;
  display: grid;
  grid-gap: 1rem 1.5rem;

  ${props => props.alignItems && `align-items: ${props.alignItems}`};
  ${props => props.justifyItems && `justify-items: ${props.justifyItems}`};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    -ms-grid-columns: (1fr) [2];
    grid-template-columns: repeat(2, 1fr);
  }

  ${props =>
    props.threes &&
    `@media (min-width: ${props.theme.breakpoints.lg}) {
          -ms-grid-columns: (1fr)[3];
          grid-template-columns: repeat(3, 1fr);
        }
      `}

  ${props =>
    props.fours &&
    `@media (min-width: ${props.theme.breakpoints.xxl}) {
          -ms-grid-columns: (1fr)[4];
          grid-template-columns: repeat(4, 1fr);
        }
      `}
`;

export default Grid;
