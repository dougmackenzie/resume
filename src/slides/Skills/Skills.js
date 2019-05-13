import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Section, {
  SectionHeader,
  SectionContainer,
  SectionTitle,
  SectionSubTitle
} from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";
import Card, { CardContent, CardTitle } from "../../components/Card/Card";
import StyledHeading from "../../components/StyledHeading/StyledHeading";

import {
  mainSkills,
  additionalSkills,
  totalYearsExperience
} from "../../content/content";

const Skills = props => {
  let delayMainSkill = 0;
  let delayAdditionalSkill = 0;

  return (
    <Section id={props.id} backgroundColor="#f5f5f5">
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>{props.title}</SectionTitle>
          <SectionSubTitle>{props.subtitle}</SectionSubTitle>
        </SectionHeader>

        <StyledHeading>Specialties</StyledHeading>

        <Grid fours style={{ marginBottom: "3rem" }}>
          {mainSkills.map((mainSkill, index) => {
            const content = (
              <Column key={index}>
                <Card
                  className="wow flipInY animated"
                  data-wow-delay={`${delayMainSkill}s`}
                >
                  <CardContent>
                    <div
                      style={{ textAlign: "center", marginBottom: "1.25rem" }}
                    >
                      <FontAwesomeIcon
                        icon={mainSkill.icon}
                        size="3x"
                        fixedWidth
                        style={{ color: mainSkill.iconColor }}
                      />
                    </div>

                    <CardTitle
                      style={{
                        fontSize: "1.1rem",
                        textAlign: "center",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {mainSkill.title}
                    </CardTitle>
                    {mainSkill.description}
                  </CardContent>
                  <SkillBar yearsExperience={mainSkill.yearsExperience}>
                    {mainSkill.yearsExperience} year
                    {mainSkill.yearsExperience > 1 ? "s" : ""} of experience
                  </SkillBar>
                </Card>
              </Column>
            );

            delayMainSkill += 0.2;
            return content;
          })}
        </Grid>

        <StyledHeading>Additional Skills</StyledHeading>

        <Grid fours>
          {additionalSkills.map((additionalSkill, index) => {
            const skillContent = (
              <Column key={index}>
                <Card
                  className="wow fadeInUp animated"
                  data-wow-delay={`${delayAdditionalSkill}s`}
                  compact
                >
                  <CardContent
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <FontAwesomeIcon
                      icon={additionalSkill.icon}
                      size="2x"
                      fixedWidth
                      style={{
                        marginRight: "1rem",
                        color: additionalSkill.iconColor
                      }}
                    />
                    <CardTitle>{additionalSkill.title}</CardTitle>
                  </CardContent>
                </Card>
              </Column>
            );

            delayAdditionalSkill += 0.1;
            return skillContent;
          })}
        </Grid>
      </SectionContainer>
    </Section>
  );
};

const SkillBar = styled.div`
  width: 100%;
  font-size: 0.7rem;
  text-align: center;
  line-height: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.075rem;

  &:before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 1.5rem;
    background-color: ${props => props.theme.color.highlight};
    z-index: -100;
    width: ${props =>
      Math.ceil((props.yearsExperience / totalYearsExperience) * 100)}%;
  }

  :after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 1.5rem;
    width: 100%;
    z-index: -99;
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.4) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0.4) 75%,
      transparent 75%,
      transparent
    );
  }
`;

export default Skills;
