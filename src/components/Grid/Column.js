import styled from "styled-components";

const Column = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    ${props => props.right && `order: 2;`}
    ${props => props.left && `order: 1;`}
  }
`;

export default Column;
