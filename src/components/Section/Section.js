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
  font-family: "Oswald", Arial, serif;
  font-weight: 400;
  font-size: 2.25rem;
  color: rgb(28, 30, 38);
  margin: 0;
  letter-spacing: 1px;
`;

const SectionSubTitle = styled.h4`
  font-size: 1rem;
  margin: 0;
  font-weight: 400;
  color: #999;
  letter-spacing: 0.1rem;
`;

export default Section;
export { SectionHeader, SectionTitle, SectionSubTitle };
