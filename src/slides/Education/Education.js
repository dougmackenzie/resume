import * as React from "react";
import styled, { withTheme } from "styled-components";

import Section, { SectionContainer } from "../../components/Section/Section";

import StyledHeading from "../../components/StyledHeading/StyledHeading";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";

import { education, certifications } from "../../content/content";

const Education = props => {
  return (
    <Section id={props.id} backgroundColor="#f5f5f5">
      <SectionContainer>
        <Grid>
          <Column>
            <StyledHeading>Education</StyledHeading>
            {education.map((educationItem, index) => (
              <EducationItem className="wow animated fadeIn" key={index}>
                <EducationLogo>
                  <img src={educationItem.logo} alt="" />
                </EducationLogo>
                <EducationDetails>
                  <EducationCourse>{educationItem.course}</EducationCourse>
                  <EducationSchool>{educationItem.school}</EducationSchool>
                  <EducationPeriod>{educationItem.period}</EducationPeriod>
                </EducationDetails>
              </EducationItem>
            ))}
          </Column>
          <Column>
            <StyledHeading>Certifications</StyledHeading>
            {certifications.map((certification, index) => (
              <EducationItem className="wow animated fadeIn" key={index}>
                <EducationLogo>
                  <img src={certification.logo} alt="" />
                </EducationLogo>
                <EducationDetails>
                  <EducationCourse>{certification.name}</EducationCourse>
                  <EducationSchool>{certification.issuer}</EducationSchool>
                  <EducationPeriod>{certification.issueDate}</EducationPeriod>
                </EducationDetails>
              </EducationItem>
            ))}
          </Column>
        </Grid>
      </SectionContainer>
    </Section>
  );
};

const EducationItem = styled.div`
  display: flex;
  margin-top: 1.25rem;
`;

const EducationLogo = styled.div`
  max-width: 60px;

  > img {
    border-radius: 60px;
    width: 100%;
    //border: 2px solid #eee;
  }
`;

const EducationDetails = styled.div`
  padding-left: 1rem;
`;

const EducationSchool = styled.div`
  font-size: 0.875rem;
`;

const EducationCourse = styled.div`
  font-weight: 700;
`;

const EducationPeriod = styled.div`
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  font-size: 0.875rem;
`;

export default withTheme(Education);
