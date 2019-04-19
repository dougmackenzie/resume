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

import {
  mainSkills,
  additionalSkills,
  totalYearsExperience
} from "../../content";

const Skills = props => {
  let skillDelay = 0;

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

      <h5>Specialties</h5>

      <Grid>
        {mainSkills.map((mainSkill, index) => {
          const content = (
            <Column key={index}>
              <Card
                className="wow flipInY animated"
                data-wow-delay={`${skillDelay}s`}
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

          skillDelay += 0.2;
          return content;
        })}
      </Grid>

      <h5>Additional Skills</h5>

      {additionalSkills.map((additionalSkillsRow, rowIndex) => {
        const content = (
          <Grid key={rowIndex}>
            {additionalSkillsRow.map((additionalSkill, index) => (
              <Column key={`${rowIndex}-${index}`}>
                <Accordion
                  data-accordion
                  className="wow fadeIn animated"
                  data-wow-delay={`${skillDelay}s`}
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
                      <SkillBar
                        yearsExperience={additionalSkill.yearsExperience}
                      >
                        {additionalSkill.yearsExperience} year
                        {additionalSkill.yearsExperience > 1 ? "s" : ""} of
                        experience
                      </SkillBar>
                    </AccordionPanelInner>
                  </AccordionPanel>
                </Accordion>
              </Column>
            ))}
          </Grid>
        );

        skillDelay += 0.2;
        return content;
      })}
    </Section>
  );
};

const SkillBar = styled.div`
  font-size: 12px;
  width: 100%;
  text-align: center;
  padding: 0;
  color: #333;
  font-weight: 400;

  &:before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 18px;
    background-color: #ffcf9d;
    width: ${props =>
      Math.ceil((props.yearsExperience / totalYearsExperience) * 100)}%;
    opacity: 0.3;
  }
`;

export default Skills;
