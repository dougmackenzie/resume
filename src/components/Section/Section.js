import styled from "styled-components";

const Section = styled.section`
  padding: 50px 20px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  position: relative;

  @media (min-width: 769px) {
    padding: 100px;
  }
`;

const SectionHeader = styled.h3`
  font-weight: 400;
  font-size: 18px;
  color: #c6a869;
  margin: 0 0 20px;
`;

export default Section;
export { SectionHeader };
