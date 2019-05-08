import * as React from "react";
import styled from "styled-components";

// Icons
import {
  faLinkedin,
  faGithub,
  faMedium
} from "@fortawesome/fontawesome-free-brands";
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

import RainbowUnderline from "../components/RainbowUnderline/RainbowUnderline";

// Images for about slider
import butterflyImage from "../images/about/butterfly.jpg";
import vivianImage from "../images/about/vvn.jpg";

// Company logos for employment history
import schoolboxLogo from "../images/schoolbox-logo-square.png";
import kdsLogo from "../images/kds-logo.png";
import etapLogo from "../images/etap-logo.png";
import webCoLogo from "../images/webco-logo.png";

// Resume PDF file
import resume from "../files/resume-doug-mackenzie.pdf";

//-------------------------------------------
// General
//-------------------------------------------
export const title = "Doug MacKenzie";
export const subtitle = "Front End Developer";
export const email = "dougmacknz@gmail.com";
export const phone = "+61 413 620 431";

//-------------------------------------------
// Sidebar
//-------------------------------------------
export const brand = "dougmacknz";
export const resumePDF = resume;

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/dougmacknz",
    icon: faGithub,
    color: "#333"
  },
  {
    name: "Medium",
    href: "https://medium.com/@dougmacknz",
    icon: faMedium,
    color: "#00ab6c"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dougmacknz",
    icon: faLinkedin,
    color: "#0077b5"
  }
];

//-------------------------------------------
// About
//-------------------------------------------
const FeatureText = styled.p`
  font-size: 34px;
  font-weight: 300;
  color: #666;
  margin: 0 0 30px;
`;

const FeatureTextHighlight = styled(RainbowUnderline)`
  color: #333;
  background-size: 100% 0.2em;
`;

const SupportingText = styled.div`
  margin-bottom: 40px;
`;

export const aboutText = (
  <>
    <FeatureText>
      I like making software{" "}
      <FeatureTextHighlight opacity="0.7">
        less painful for people
      </FeatureTextHighlight>
      .
    </FeatureText>
    <SupportingText>
      <p>
        I'm passionate about creating and improving software on the web. Ten
        years ago I studied design &amp; web development &mdash; since then I
        have worked on numerous commerical and personal projects to improve user
        experience, internal processes, and coding standards.
      </p>
      <p>Some of my greatest achievements include:</p>
      <ul>
        <li>
          Leading front-end development on a product used by over 500,000 people
          &mdash; including the uphill task of introducing React &amp;
          TypeScript to the codebase and porting old code.
        </li>
        <li>
          Contributions to widely used open source projects such as Storybook
          &amp; React Styleguidist &mdash; including integrating E2E tests with
          Cypress.
        </li>
      </ul>
    </SupportingText>
  </>
);

export const slideshowImages = [
  {
    image: butterflyImage,
    alt: "",
    caption: "I live in Melbourne - the land of street art"
  },
  {
    image: vivianImage,
    alt: "",
    caption: "I have a partner in crime - Vivian"
  }
];

export const stats = [
  {
    label: "Location",
    value: "Melbourne, Australia"
  },
  {
    label: "Years in Development",
    value: "10"
  },
  {
    label: "Dev Environment",
    value: <>Ubuntu &bull; VSCode</>
  },
  {
    label: "Preferred Stack",
    value: <>React &bull; Styled Components</>
  },
  {
    label: "Favourite TV Show",
    value: "Arrested Development"
  },
  {
    label: "Hobbies",
    value: <>Bass Guitar &bull; Gymnastics &bull; Cycling</>
  }
];

export const funFacts = [
  {
    value: "10",
    label: "Years in Development"
  },
  {
    value: "10000",
    label: "Lines of code written"
  },
  {
    value: "1006",
    label: "Contributions on GitHub"
  }
];

//-------------------------------------------
// Skills
//-------------------------------------------
export const totalYearsExperience = 10; // Used to calculate widths on skill cards

export const mainSkills = [
  {
    title: "JavaScript",
    icon: faJs,
    iconColor: "#f7df1e",
    yearsExperience: 10,
    description:
      "I've been working with JavaScript for a while. In the past year I have been solidifying my core JS knowledge, moving away from jQuery and hacky JS."
  },
  {
    title: "React",
    icon: faReact,
    iconColor: "rgb(0, 216, 255)",
    yearsExperience: 1,
    description:
      "React has been my component based JS framework of choice. For the past year I have been working with it exclusively and I am looking to continue working and improving in creating scalable React applications."
  },
  {
    title: "UI Design",
    icon: faPenAlt,
    iconColor: "#f6921e",
    yearsExperience: 10,
    description:
      "Creating intuitive interfaces for users has long been a passion of mine. I am often called upon when there is an innovative solution required for a user need or problem."
  },
  {
    title: "CSS",
    icon: faCss3Alt,
    iconColor: "#4771b5",
    yearsExperience: 10,
    description:
      "Styling interfaces and dealing with CSS quirks has been a speciality of mine since starting in web development. More recently I have been working with Styled Components for maintainable and large scale CSS."
  }
];

export const additionalSkills = [
  {
    title: "TypeScript",
    icon: faMicrosoft,
    iconColor: "#4678c7",
    yearsExperience: 1,
    description:
      "Along with React, I have implemented TypeScript into a large scale product. This is a skill that I will continue to improve over the next few years."
  },
  {
    title: "Vue.js",
    icon: faVuejs,
    iconColor: "rgb(65, 184, 131)",
    yearsExperience: 1,
    description:
      "Vue was the first component based framework I learned before moving onto React. I have created a few interfaces with Vue."
  },
  {
    title: "PHP",
    icon: faPhp,
    iconColor: "#4f5b93",
    yearsExperience: 10,
    description:
      "I have worked with PHP my entire career. Though I specialise in front-end development - I am capable of working with some PHP when required."
  },
  {
    title: "Laravel",
    icon: faLaravel,
    iconColor: "#4771b5",
    yearsExperience: 1,
    description:
      "Some of my side projects have been built with Laravel. This was my introduction to MVC pattern which has proven helpful in other contexts."
  },
  {
    title: "Accessibility",
    icon: faUniversalAccess,
    iconColor: "#345292",
    yearsExperience: 3,
    description:
      "Accessibility is an important focus for me as a front end developer. I am continuously looking to improve my knowledge and meet accessibility standards in my work."
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
      "Code review has been large part of my responsibilites over the last two and a half years. I pride myself in being able to find improvements, whilst finding the balance in effort vs time."
  },
  {
    title: "UX Research",
    icon: faPortrait,
    iconColor: "#077bf6",
    yearsExperience: 1.5,
    description:
      "I have been part of a few UX research projects. I have helped with surveys, interviews, brainstorming, wireframing, prototyping & user testing."
  }
];

//-------------------------------------------
// History
//-------------------------------------------
export const workHistory = [
  {
    company: "Schoolbox",
    position: "Web Developer",
    period: "Sep 2016 — Feb 2019",
    logo: schoolboxLogo,
    summary: [
      "I was brought on to the Schoolbox development team to help out wherever I could. I quickly started contributing with bug fixes, UI & design improvements, and code reviews.",
      "After time I took on responsibilities in the front-end & Scrum areas. My produest work was initiating a project to introduce a new structured front-end code & UI standard with React & TypeScript, moving away from spaghetti jQuery and markup."
    ]
  },
  {
    company: "The King David School",
    position: "Web Developer",
    period: "Sep 2012 — Apr 2016",
    logo: kdsLogo,
    summary: [
      "I was brought on to build web solutions for many staff and parent processes such as attendance marking, assessment marking and reporting, excursion management.",
      "Many of the solutions I built were a success in the school and are still being used today."
    ]
  },
  {
    company: "ETAP School Management System",
    position: "Web Developer",
    period: "May 2010 — Jul 2012",
    logo: etapLogo,
    summary: [
      "My role revolved largely around building custom PDF reports for clients. I liaised with clients to gather requirements, quoted for the work, and created the reports with PHP.",
      "As I progressed I was put in charge of a new developer and managed his work. That allowed me to make improvements to the core product. Most notably I rebuilt the helpdesk system to improve support processes for both our staff and our clients."
    ]
  },
  {
    company: "The Web Company",
    position: "Web Developer (Freelance)",
    period: "Jun 2009 — Mar 2010",
    logo: webCoLogo,
    summary: [
      "My first commerical experience in web development was doing freelance work for a web agency. I built sites for small companies with e-commerce solutions. As I progressed I started to become a go to consultant for payment gateway integrations."
    ]
  }
];

//-------------------------------------------
// Education
//-------------------------------------------
export const educationHistory = [
  {
    school: "Yoobee School of Design",
    course: "Diploma of Web Development",
    period: "2008 — 2009"
  }
];
