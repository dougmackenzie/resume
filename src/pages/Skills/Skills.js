import * as React from "react";

import BadgerAccordion from "badger-accordion";
import "badger-accordion/dist/badger-accordion.css";

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

const mainSkills = [
  {
    title: "JavaScript",
    description:
      "I've been working with JavaScript for my entire career, however like many developers in my era- I didn't take the time to learn the language properly. In the past year I have been focusing on understanding the core of the language."
  },
  {
    title: "React",
    description:
      "I was a bit late to the party with React, I only picked it up a year ago. However I've been working with it heavily since that point."
  },
  {
    title: "UI Design",
    description:
      "Creating intuitive interfaces for users has long been a passion of mine.I am often called upon when there is a creative solution required for a user need or problem."
  },
  {
    title: "CSS & Scoped Styling",
    description:
      "Dealing with CSS quirks has long been a speciality of mine. More recently I have been working with Styled Components for scoped styling."
  }
];

const additionalSkills = [
  [
    {
      title: "TypeScript",
      description:
        "I worked with TypeScript for 6 months while integrating React atSchoolbox."
    },
    {
      title: "Vue.js",
      description:
        "Vue was the first component based framework I learned. I created a couple of interfaces using Vue at Schoolbox."
    },
    {
      title: "PHP",
      description:
        "I have worked with PHP my entire career. Though I specialise in front-end development - I am capable of working with PHP to get things done when needed."
    },
    {
      title: "Laravel",
      description: "I have built a couple of side projects with Laravel. "
    }
  ],
  [
    {
      title: "Accessibility",
      description:
        "Accessibility is an important focus point when I create interfaces."
    },
    {
      title: "Scrum",
      description:
        "During my time at Schoolbox I spent the last year managing Scrum Master responsibilites on top of my developer responsibilities. I have been part of three PD courses around Scrum and Agile methodologies and was in charge of improving many processes."
    },
    {
      title: "Code Review",
      description:
        "Code review has been large part of my responsibilites over the last two and a half years. I pride myself in being able to find performance and practice improvements, whilst finding the balance in effort vs time."
    },

    {
      title: "UX Research",
      description:
        "I have been a part of designing and conducting surveys, interviews, testing."
    }
  ]
];

const Skills = props => {
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
        <SectionTitle>Skills</SectionTitle>
        <SectionSubTitle>What I can do</SectionSubTitle>
      </SectionHeader>

      <h5>Specialties</h5>

      <Grid>
        {mainSkills.map(mainSkill => (
          <Column>
            <Accordion data-accordion data-accordion-open>
              <AccordionHeader>
                <AccordionButton className="js-badger-accordion-header">
                  <AccordionTitle>{mainSkill.title}</AccordionTitle>
                  <AccordionIcon />
                </AccordionButton>
              </AccordionHeader>
              <AccordionPanel className="badger-accordion__panel js-badger-accordion-panel">
                <AccordionPanelInner className="js-badger-accordion-panel-inner">
                  {mainSkill.description}
                </AccordionPanelInner>
              </AccordionPanel>
            </Accordion>
          </Column>
        ))}
      </Grid>

      <h5>Additional Skills</h5>

      {additionalSkills.map(additionalSkillsRow => (
        <Grid>
          {additionalSkillsRow.map(additionalSkill => (
            <Column>
              <Accordion data-accordion>
                <AccordionHeader>
                  <AccordionButton className="js-badger-accordion-header">
                    <AccordionTitle>{additionalSkill.title}</AccordionTitle>
                    <AccordionIcon />
                  </AccordionButton>
                </AccordionHeader>
                <AccordionPanel className="badger-accordion__panel js-badger-accordion-panel">
                  <AccordionPanelInner className="js-badger-accordion-panel-inner">
                    {additionalSkill.description}
                  </AccordionPanelInner>
                </AccordionPanel>
              </Accordion>
            </Column>
          ))}
        </Grid>
      ))}
    </Section>
  );
};

export default Skills;
