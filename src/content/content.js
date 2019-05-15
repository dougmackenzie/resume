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
  faPencilRuler,
  faUsers,
  faCode,
  faUniversalAccess,
  faPortrait
} from "@fortawesome/pro-light-svg-icons";

import RainbowUnderline from "../components/RainbowUnderline/RainbowUnderline";

// Images for about section
import butterflyImage from "../images/about/butterfly.jpg";
//import vivianImage from "../images/about/vvn.jpg";

// Company logos for employment & education history
import schoolboxLogo from "../images/logos/schoolbox.png";
import kdsLogo from "../images/logos/kds.png";
import etapLogo from "../images/logos/etap.png";
import webCoLogo from "../images/logos/webco.png";
import yoobeeLogo from "../images/logos/yoobee.png";
import scrumLogo from "../images/logos/scrum.png";

// Recommendations avatars
import matt from "../images/references/matt.jpg";
import megan from "../images/references/megan.jpg";
import michelle from "../images/references/mich.jpg";
import tom from "../images/references/tom.jpg";

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
  font-size: 2rem;
  font-weight: 300;
  color: #666;
  margin: 0 0 1rem;
`;

const FeatureTextHighlight = styled(RainbowUnderline)`
  background-size: 100% 0.3rem;
`;

const SupportingText = styled.div`
  margin-bottom: 2rem;
`;

export const aboutText = (
  <>
    <FeatureText>I like making software less painful for people.</FeatureText>
    <SupportingText>
      <p>
        I'm passionate about front-end code, problem solving, and UI design. Ten
        years ago I studied web design &amp; development&mdash;since then I have
        worked on numerous commercial and hobby projects to improve user
        experience, internal processes, and coding standards.
      </p>
      <p>A couple of my proudest achievements are:</p>
      <ul>
        <li>
          Leading front-end development on a product used by over 500,000
          people&mdash;including spearheading an initiative to move from jQuery
          to React &amp; TypeScript.
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

// Specify one image only to disable the slider
export const aboutImages = [
  {
    image: butterflyImage,
    alt: "",
    caption: "I live in Melbourne - the land of street art"
  }
  // {
  //   image: vivianImage,
  //   alt: "",
  //   caption: "I have a partner in crime - Vivian"
  // }
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
    value: <>Gymnastics &bull; Cycling &bull; Bass Guitar</>
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
      "React has been my component based JS framework of choice. For the past year I have been working with it exclusively and I am continuing to improve my ability to create scalable applications with it."
  },
  {
    title: "UI Design",
    icon: faPencilRuler,
    iconColor: "#342b56",
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
      "I joined the Schoolbox product team and quickly started contributing with bug fixes, UI & design improvements, and code reviews.",
      "After time I took on responsibilities in the front-end & Scrum areas. My produest work was initiating and spearheading a project to introduce a new front-end code standard with React & TypeScript—moving away from spaghetti jQuery and markup."
    ]
  },
  {
    company: "The King David School",
    position: "Web Developer",
    period: "Sep 2012 — Apr 2016",
    logo: kdsLogo,
    summary: [
      "I was brought on to build web-based software for many staff and parent processes such as attendance marking, assessment marking, and excursion management.",
      "Many of the solutions that I designed and built for the School were a success in automating manual processes—receiving high praise and achieving the goals set out by the School."
    ]
  },
  {
    company: "ETAP School Management System",
    position: "Web Developer",
    period: "May 2010 — Jul 2012",
    logo: etapLogo,
    summary: [
      "My role revolved largely around building custom PDF reports for clients. I liaised with clients to gather requirements, provide quotes, and create the reports with PHP.",
      "As I progressed I was put in charge of a new developer and managed his work. That allowed me to make improvements to the core product—most notably rebuilding the custom helpdesk system to improve support processes for both our staff and our clients."
    ]
  },
  {
    company: "The Web Company",
    position: "Web Developer (Freelance)",
    period: "Jun 2009 — Mar 2010",
    logo: webCoLogo,
    summary: [
      "My first commerical experience in web development was doing freelance work for a web agency. I built sites for small companies with e-commerce solutions. As I progressed I started to become a go-to consultant for payment gateway integrations."
    ]
  }
];

//-------------------------------------------
// Education & Certifications
//-------------------------------------------
export const education = [
  {
    school: "Yoobee School of Design",
    course: "Diploma of Web Development",
    period: "2008 — 2009",
    logo: yoobeeLogo
  }
];

export const certifications = [
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    issueDate: "Aug 2018",
    logo: scrumLogo
  }
];

//-------------------------------------------
// Recommendations
//-------------------------------------------

export const recommendations = [
  {
    person: {
      name: "Matt Day",
      company: "Schoolbox (formerly)",
      position: "Product Lead",
      photo: matt
    },
    recommendation:
      "Doug took initiative where he could see things to be improved, and was always willing to assist others. His willingness to step up–whether to drive and self-teach the adoption of new technologies within projects, or take on Scrum Master duties–is testament to his work ethic and aptitude."
  },
  {
    person: {
      name: "Megan Conley",
      company: "Schoolbox (formerly)",
      position: "Online Learning and Education Consultant",
      photo: megan
    },
    recommendation:
      "Doug is a strong communicator who is able to translate complex web development concepts into simple language for lay-people. Doug was a great bridge between teams and was always open to feedback or seeking input on concepts and solutions."
  },
  {
    person: {
      name: "Michelle Lazarow",
      company: "The King David School",
      position: "Director of Learning Technologies and Innovation",
      photo: michelle
    },
    recommendation:
      "Doug was a critical team member at The King David School. He was extremely capable of managing various stakeholders priorities and developing any project the School wanted."
  },
  {
    person: {
      name: "Tom Sargent",
      company: "The King David School",
      position: "ICT Manager",
      photo: tom
    },
    recommendation:
      "Doug translated the School's vision and ideas into well designed and functional solutions. Doug has great attention to detail and an eye for clean, practical interfaces."
  }
];
