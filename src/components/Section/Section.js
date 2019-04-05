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
  font-weight: 600;
  font-size: 36px;
  color: #ffcf9d;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SectionSubTitle = styled.h4`
  font-size: 15px;
  margin: 0;
  font-weight: 300;
  color: #888;
  letter-spacing: 1px;
`;

export default Section;
export { SectionHeader, SectionTitle, SectionSubTitle };
