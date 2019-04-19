import * as React from "react";
import styled from "styled-components";
import BadgerAccordion from "badger-accordion";
import "badger-accordion/dist/badger-accordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faCss3Alt,
  faVuejs,
  faPhp,
  faLaravel,
  faMicrosoft
} from "@fortawesome/fontawesome-free-brands";
import {
  faPenAlt,
  faUsers,
  faCode,
  faUniversalAccess,
  faPortrait
} from "@fortawesome/pro-light-svg-icons";

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

const totalYearsExperience = 9;

const mainSkills = [
  {
    title: "JavaScript",
    icon: faJs,
    iconColor: "#f7df1e",
    yearsExperience: 9,
    description:
      "I've been working with JavaScript for my entire career, however like many developers in my era- I didn't take the time to learn the language properly. In the past year I have been focusing on understanding the core of the language."
  },
  {
    title: "React",
    icon: faReact,
    iconColor: "rgb(0, 216, 255)",
    yearsExperience: 1,
    description:
      "I was a bit late to the party with React, I only picked it up a year ago. However I've been working with it heavily since that point."
  },
  {
    title: "UI Design",
    icon: faPenAlt,
    iconColor: "#f6921e",
    yearsExperience: 9,
    description:
      "Creating intuitive interfaces for users has long been a passion of mine.I am often called upon when there is a creative solution required for a user need or problem."
  },
  {
    title: "CSS & Scoped Styling",
    icon: faCss3Alt,
    iconColor: "#4771b5",
    yearsExperience: 9,
    description:
      "Dealing with CSS quirks has long been a speciality of mine. More recently I have been working with Styled Components for scoped styling."
  }
];

const additionalSkills = [
  [
    {
      title: "TypeScript",
      icon: faMicrosoft,
      iconColor: "#4678c7",
      yearsExperience: 1,
      description:
        "I worked with TypeScript for 6 months while integrating React at Schoolbox."
    },
    {
      title: "Vue.js",
      icon: faVuejs,
      iconColor: "rgb(65, 184, 131)",
      yearsExperience: 1,
      description:
        "Vue was the first component based framework I learned. I created a couple of interfaces using Vue at Schoolbox."
    },
    {
      title: "PHP",
      icon: faPhp,
      iconColor: "#4f5b93",
      yearsExperience: 9,
      description:
        "I have worked with PHP my entire career. Though I specialise in front-end development - I am capable of working with PHP to get things done when needed."
    },
    {
      title: "Laravel",
      icon: faLaravel,
      iconColor: "#4771b5",
      yearsExperience: 1,
      description: "I have built a couple of side projects with Laravel. "
    }
  ],
  [
    {
      title: "Accessibility",
      icon: faUniversalAccess,
      iconColor: "#345292",
      yearsExperience: 3,
      description:
        "Accessibility is an important focus point when I create interfaces."
    },
    {
      title: "Scrum",
      icon: faUsers,
      iconColor: "#4a586e",
      yearsExperience: 2.5,
      description:
        "During my time at Schoolbox I spent the last year managing Scrum Master responsibilites on top of my developer responsibilities. I have been part of three PD courses around Scrum and Agile methodologies and was in charge of improving many processes."
    },
    {
      title: "Code Review",
      icon: faCode,
      yearsExperience: 2.5,
      description:
        "Code review has been large part of my responsibilites over the last two and a half years. I pride myself in being able to find performance and practice improvements, whilst finding the balance in effort vs time."
    },

    {
      title: "UX Research",
      icon: faPortrait,
      iconColor: "#077bf6",
      yearsExperience: 1.5,
      description:
        "I have been a part of designing and conducting surveys, interviews, testing."
    }
  ]
];

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
