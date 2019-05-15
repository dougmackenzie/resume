// Icons
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

//-------------------------------------------
// General
//-------------------------------------------
export const title = "Doug MacKenzie";
export const subtitle = "Front End Developer";
export const location = "Melbourne, Australia";
export const email = "dougmacknz@gmail.com";
export const phone = "+61 413 620 431";
export const website = "dougmack.nz";

export const summary =
  "I'm passionate about front-end code, problem solving, and UI design. Ten years ago I studied web design & development—since then I have worked on numerous commercial and hobby projects to improve user experience, internal processes, and coding standards.";

//-------------------------------------------
// History
//-------------------------------------------
export const workHistory = [
  {
    company: "Schoolbox",
    position: "Web Developer",
    period: "Sep 2016 — Feb 2019",
    summary: [
      "I joined the Schoolbox product team and quickly started contributing with bug fixes, UI & design improvements, and code reviews.",
      "After time I took on responsibilities in the front-end & Scrum areas. My produest work was initiating and spearheading a project to introduce a new front-end code standard with React & TypeScript—moving away from spaghetti jQuery and markup."
    ]
  },
  {
    company: "The King David School",
    position: "Web Developer",
    period: "Sep 2012 — Apr 2016",
    summary: [
      "I was brought on to build web-based software for many staff and parent processes such as attendance marking, assessment marking, and excursion management.",
      "Many of the solutions that I designed and built for the School were a success in automating manual processes—receiving high praise and achieving the goals set out by the School."
    ]
  },
  {
    company: "ETAP School Management System",
    position: "Web Developer",
    period: "May 2010 — Jul 2012",
    summary: [
      "My role revolved largely around building custom PDF reports for clients. I liaised with clients to gather requirements, provide quotes, and create the reports with PHP.",
      "As I progressed I was put in charge of a new developer and managed his work. That allowed me to make improvements to the core product—most notably rebuilding the custom helpdesk system to improve support processes for both our staff and our clients."
    ]
  },
  {
    company: "The Web Company",
    position: "Web Developer (Freelance)",
    period: "Jun 2009 — Mar 2010",

    summary: [
      "My first commerical experience in web development was doing freelance work for a web agency. I built sites for small companies with e-commerce solutions. As I progressed I started to become a go-to consultant for payment gateway integrations."
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

//-------------------------------------------
// Skills
//-------------------------------------------
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
