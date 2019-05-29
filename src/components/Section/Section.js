import styled from "styled-components";

const Section = styled.section`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  position: relative;
`;

const verticalPadding = {
  default: {
    default: 3.125,
    md: 5,
    xxl: 6.25
  },
  condensed: {
    default: 2,
    md: 4,
    xxl: 5
  }
};

const SectionContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: ${props =>
    `${
      verticalPadding[props.condensed ? "condensed" : "default"]["default"]
    }rem 1.5rem`};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props =>
      `${
        verticalPadding[props.condensed ? "condensed" : "default"]["md"]
      }rem 3.125rem`};
  }

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    padding: ${props =>
      `${
        verticalPadding[props.condensed ? "condensed" : "default"]["md"]
      }rem 6.25rem`};
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
export { SectionHeader, SectionContainer, SectionTitle, SectionSubTitle };
