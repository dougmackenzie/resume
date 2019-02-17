import * as React from "react";
import styled from "styled-components";

import Section, { SectionHeader } from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";

const FeatureText = styled.p`
  font-size: 30px;
  color: #a0a0a0;
  margin-bottom: 70px;
`;

const FeatureTextHighlight = styled.strong`
  color: #0f0e10;
  font-weight: 300;
  font-size: inherit;
`;

const AboutSection = styled(Column)`
  font-size: 15px;
  margin: 0;
  font-weight: 300;

  @media (min-width: 769px) {
    margin: 0 0 10px;
  }
`;

const AboutSubHeading = styled.h4`
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  color: #a0a0a0;
  margin: 0 0 2px;
`;

const About = () => {
  return (
    <Section>
      <SectionHeader>About me</SectionHeader>
      <FeatureText>
        I like problem solving and making software experiences{" "}
        <FeatureTextHighlight>less painful for people</FeatureTextHighlight>.
      </FeatureText>
      <Grid>
        <AboutSection>
          <AboutSubHeading>Location</AboutSubHeading>
          Melbourne, AU
        </AboutSection>
        <AboutSection>
          <AboutSubHeading>Years in Development</AboutSubHeading>9
        </AboutSection>
        <AboutSection>
          <AboutSubHeading>Current Role</AboutSubHeading>
          Product Developer @{" "}
          <a
            href="https://www.alaress.com.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alaress
          </a>
        </AboutSection>
      </Grid>
      <Grid>
        <AboutSection>
          <AboutSubHeading>Preferred Stack</AboutSubHeading>
          React &bull; TypeScript &bull; Styled Components
        </AboutSection>
        <AboutSection>
          <AboutSubHeading>Favourite TV Show</AboutSubHeading>
          Arrested Development
        </AboutSection>
        <AboutSection>
          <AboutSubHeading>Hobbies</AboutSubHeading>
          Bass Guitar &bull; Gymnastics &bull; Cycling
        </AboutSection>
      </Grid>
    </Section>
  );
};

export default About;
