import styled from "styled-components";

const Section = styled.section`
  padding: 50px 20px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 80px 50px;
  }

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    padding: 100px;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 50px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 80px;
  }
`;

const SectionTitle = styled.h3`
  font-family: ${props => props.theme.font.heading};
  font-weight: 400;
  font-size: 2.25rem;
  color: rgb(28, 30, 38);
  margin: 0;
  letter-spacing: 1px;
`;

const SectionSubTitle = styled.h4`
  font-family: ${props => props.theme.font.heading};
  font-size: 1rem;
  margin: 0;
  font-weight: 400;
  color: #999;
  letter-spacing: 0.1rem;
`;

export default Section;
export { SectionHeader, SectionTitle, SectionSubTitle };
