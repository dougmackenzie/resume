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

const SectionHeader = styled.div`
  margin: 0 0 80px;
`;

const SectionTitle = styled.h3`
  font-weight: 400;
  font-size: 34px;
  color: rgb(28, 30, 38);
  margin: 0;
  letter-spacing: 1px;
`;

const SectionSubTitle = styled.h4`
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  margin: 0;
  font-weight: 400;
  color: #666;
  letter-spacing: 1px;
`;

export default Section;
export { SectionHeader, SectionTitle, SectionSubTitle };
