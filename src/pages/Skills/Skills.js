import * as React from "react";
import styled from "styled-components";
import BadgerAccordion from "badger-accordion";
import "badger-accordion/dist/badger-accordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Section, {
  SectionHeader,
  SectionTitle,
  SectionSubTitle
} from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";
import Accordion, {
  AccordionHeader,
  AccordionButton,
  AccordionIcon,
  AccordionTitle,
  AccordionPanel,
  AccordionPanelInner
} from "../../components/Accordion/Accordion";
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

  React.useEffect(() => {
    const accordions = document.querySelectorAll("[data-accordion]");

    Array.from(accordions).forEach(accordion => {
      let accordionOptions = {};

      if (accordion.hasAttribute("data-accordion-open")) {
        accordionOptions.openHeadersOnLoad = [0];
      }

      new BadgerAccordion(accordion, accordionOptions);
    });
  }, []);

  return (
    <Section id={props.id} style={{ backgroundColor: "#f5f5f5" }}>
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
                  <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <FontAwesomeIcon
                      icon={mainSkill.icon}
                      size="3x"
                      fixedWidth
                      style={{ color: mainSkill.iconColor }}
                    />
                  </div>

                  <CardTitle
                    style={{ textAlign: "center", marginBottom: "10px" }}
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
              <Accordion
                data-accordion
                className="wow fadeInUp animated"
                data-wow-delay={`${delayAdditionalSkill}s`}
              >
                <AccordionHeader>
                  <AccordionButton className="js-badger-accordion-header">
                    <FontAwesomeIcon
                      icon={additionalSkill.icon}
                      size="2x"
                      fixedWidth
                      style={{
                        marginRight: "10px",
                        color: additionalSkill.iconColor
                      }}
                    />
                    <AccordionTitle>{additionalSkill.title}</AccordionTitle>
                    <AccordionIcon />
                  </AccordionButton>
                </AccordionHeader>
                <AccordionPanel className="badger-accordion__panel js-badger-accordion-panel">
                  <AccordionPanelInner className="js-badger-accordion-panel-inner">
                    <div style={{ padding: "1rem 1.5rem" }}>
                      {additionalSkill.description}
                    </div>
                    <SkillBar yearsExperience={additionalSkill.yearsExperience}>
                      {additionalSkill.yearsExperience} year
                      {additionalSkill.yearsExperience > 1 ? "s" : ""} of
                      experience
                    </SkillBar>
                  </AccordionPanelInner>
                </AccordionPanel>
              </Accordion>
            </Column>
          );

          return skillContent;
          delayAdditionalSkill += 0.2;
        })}
      </Grid>
    </Section>
  );
};

const SkillBar = styled.div`
  width: 100%;
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.5rem;

  &:before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 1.5rem;
    background-color: ${props => props.theme.color.highlight};
    //opacity: 0.6;
    z-index: -100;
    width: ${props =>
      Math.ceil((props.yearsExperience / totalYearsExperience) * 100)}%;
  }

  :after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 22px;
    width: 100%;
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }
`;

export default Skills;
