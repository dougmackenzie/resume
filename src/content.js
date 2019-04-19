import * as React from "react";

// Pages
import Intro from "./pages/Intro/Intro";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Work from "./pages/Work/Work";
import History from "./pages/History/History";
import Contact from "./pages/Contact/Contact";

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

// Images for about slider
import butterflyImage from "./images/about/butterfly.jpg";
import vivianImage from "./images/about/vvn.jpg";

//-------------------------------------------
// General
//-------------------------------------------
export const title = "Doug MacKenzie";
export const subtitle = "Front End Engineer";
export const email = "dougmacknz@gmail.com";
export const phone = "+61 413 620 431";

export const pages = [
  {
    id: "intro",
    page: Intro,
    title: title,
    subtitle: subtitle,
    navTitle: ""
  },
  {
    id: "about",
    page: About,
    title: "About Me",
    subtitle: "What I'm all about",
    navTitle: "About"
  },
  {
    id: "skills",
    page: Skills,
    title: "Skills",
    subtitle: "What I can do",
    navTitle: "Skills"
  },
  {
    id: "history",
    page: History,
    title: "History",
    subtitle: "My education and employment",
    navTitle: "History"
  },
  {
    id: "work",
    page: Work,
    title: "Portfolio",
    subtitle: "Examples of my work",
    navTitle: "Portfolio"
  },
  {
    id: "contact",
    page: Contact,
    title: "Contact",
    subtitle: "Get in touch",
    navTitle: "Contact"
  }
];

//-------------------------------------------
// Sidebar
//-------------------------------------------
export const brand = "dougmacknz";
export const resumeLink = "doug-mackenzie-resume.pdf";

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/dougmacknz",
    icon: faGithub
  },
  {
    name: "Medium",
    href: "https://medium.com/@dougmacknz",
    icon: faMedium
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dougmacknz",
    icon: faLinkedin
  }
];

//-------------------------------------------
// About
//-------------------------------------------
export const featureText =
  "I like problem solving and making software less painful for people.";
export const supportingText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta massa non felis rhoncus placerat. Morbi leo arcu, sollicitudin eget sapien ac, elementum ornare magna. Aliquam eu blandit nunc, at blandit risus. Aliquam vel sem diam. Phasellus id condimentum tellus. Cras eu augue est. Phasellus a purus nulla.";

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
  [
    {
      label: "Location",
      value: "Melbourne, Australia"
    },
    {
      label: "Years in Development",
      value: "10"
    }
  ],
  [
    {
      label: "Preferred Dev Environment",
      value: <>Ubuntu &bull; VSCode</>
    },
    {
      label: "Preferred Stack",
      value: <>React &bull; Styled Components</>
    }
  ],
  [
    {
      label: "Favourite TV Show",
      value: "Arrested Development"
    },
    {
      label: "Hobbies",
      value: <>Bass Guitar &bull; Gymnastics &bull; Cycling</>
    }
  ]
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
export const totalYearsExperience = 9; // Used to calculate widths on skill cards

export const mainSkills = [
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

export const additionalSkills = [
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
