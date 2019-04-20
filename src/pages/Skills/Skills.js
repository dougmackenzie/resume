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

      <Grid>
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

      {additionalSkills.map((additionalSkillsRow, rowIndex) => {
        const rowContent = (
          <Grid key={rowIndex}>
            {additionalSkillsRow.map((additionalSkill, index) => {
              const skillContent = (
                <Column key={`${rowIndex}-${index}`}>
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
              );

              return skillContent;
            })}
          </Grid>
        );

        delayAdditionalSkill += 0.2;
        return rowContent;
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

const StyledHeading = styled.h5`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #666;
  text-transform: uppercase;
  margin: 1rem 0;
  text-align: center;

  display: grid;
  grid-template-columns: 3rem max-content 0;
  grid-template-rows: 1rem 0;
  grid-gap: 0 1rem;
  align-items: center;

  :after,
  :before {
    content: " ";
    display: block;
    border-top: 1px solid #f6921e;
    border-bottom: 1px solid #f6921e;
    height: 1px;
  }
`;

export default Skills;
