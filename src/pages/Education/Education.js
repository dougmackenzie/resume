import * as React from "react";
import styled from "styled-components";

import Section from "../../components/Section/Section";

import StyledHeading from "../../components/StyledHeading/StyledHeading";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";

//import { educationHistory } from "../../content/content";

import yoobeeLogo from "../../images/yoobee-logo.png";
import scrumLogo from "../../images/scrum-logo.png";

const Education = props => {
  return (
    <Section
      id={props.id}
      style={{ backgroundColor: "#071737cc", color: "#ccc" }}
    >
      <Grid>
        <Column>
          <StyledHeading style={{ color: "#fff" }}>Education</StyledHeading>
          <EducationItem className="wow animated fadeInUp">
            <EducationLogo>
              <img src={yoobeeLogo} />
            </EducationLogo>
            <EducationDetails>
              <EducationCourse>Diploma of Web Development</EducationCourse>
              <div>Yoobee School of Design</div>
              <EducationPeriod>2008 &mdash; 2009</EducationPeriod>
            </EducationDetails>
          </EducationItem>
          {/* <p>
            Modules: - Client side development - XHTML, CSS & JavaScript -
            Server side development - PHP / MySQL development, e-commerce
            development, object oriented programming. - Multimedia web scripting
            - Flash animation with ActionScript - Introduction to Wordpress &
            Joomla - Industry project & portfolio
          </p> */}
        </Column>
        <Column>
          <StyledHeading style={{ color: "#fff" }}>
            Certifications
          </StyledHeading>
          <EducationItem className="wow animated fadeInUp">
            <EducationLogo>
              <img src={scrumLogo} />
            </EducationLogo>
            <EducationDetails>
              <EducationCourse>Professional Scrum Master I</EducationCourse>
              <div>Scrum.org</div>
              <EducationPeriod>Aug 2018</EducationPeriod>
            </EducationDetails>
          </EducationItem>
        </Column>
      </Grid>
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
  }
`;

const EducationDetails = styled.div`
  padding-left: 1rem;
`;

const EducationCourse = styled.div`
  font-size: 1.25rem;
  color: #ddd;
  font-weight: 400;
`;

const EducationPeriod = styled.div`
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  font-size: 0.85rem;
`;

export default Education;
