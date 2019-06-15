import * as React from "react";

// Font Awesome Icons
import {
  faLinkedin,
  faGithub,
  faMedium
} from "@fortawesome/fontawesome-free-brands";
import {
  faMapMarkerAlt,
  faHistory,
  faBicycle
} from "@fortawesome/pro-light-svg-icons";

// Resume PDF file
import resume from "../files/resume-doug-mackenzie.pdf";

//-------------------------------------------
// General
//-------------------------------------------
export const title = "Doug MacKenzie";
export const subtitle = "UI Developer. JavaScript Engineer.";
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
export const stats = [
  {
    label: "Location",
    value: "Melbourne, Australia",
    icon: faMapMarkerAlt
  },
  {
    label: "Years in Development",
    value: "10",
    icon: faHistory
  },
  {
    label: "Hobbies",
    value: <>Gymnastics &bull; Cycling &bull; Bass Guitar</>,
    icon: faBicycle
  }
];

//-------------------------------------------
// Skills
//-------------------------------------------
export const mainSkills = [
  {
    title: "HTML + CSS",
    icon: "cssIcon", // A little hacky- refers to the name of the query defined in index.js
    description:
      "Accessibility, CSS quirks, cross-browser compatibility and making things look good.",
    list: ["Accessibility", "Flexbox", "Grid", "Mobile first"]
  },
  {
    title: "JavaScript",
    icon: "jsIcon",
    description:
      "A jQuery veteran who has progressed to vanilla JS & scalable web apps with React or Vue.",
    list: ["Functional programming", "React", "TypeScript", "Testing"]
  },
  {
    title: "UI Design",
    icon: "uiIcon",
    description:
      "Brainstorming, wireframing & prototyping interfaces to solve user problems.",
    list: ["Brainstorming", "Wireframing", "Prototyping", "User testing"]
  }
];

//-------------------------------------------
// History
//-------------------------------------------

export const workHistory = [
  {
    company: "Schoolbox",
    position: "Web Developer",
    period: "2016—2019",
    logo: "schoolboxLogo" // A little hacky- refers to the name of the query defined in index.js
  },
  {
    company: "The King David School",
    position: "Web Developer",
    period: "2012—2016",
    logo: "kdsLogo"
  },
  {
    company: "ETAP School Management System",
    position: "Web Developer",
    period: "2010—2012",
    logo: "etapLogo"
  },
  {
    company: "The Web Company",
    position: "Web Developer (Freelance)",
    period: "2009—2010",
    logo: "webcoLogo"
  }
];

//-------------------------------------------
// Testimonal
//-------------------------------------------

export const testimonal = {
  person: {
    name: "Matt Day",
    company: "Schoolbox (formerly)",
    position: "Product Lead"
  },
  recommendation:
    "Doug's willingness to step up–whether to drive and self-teach the adoption of new technologies within projects, or take on Scrum Master duties–is testament to his work ethic and aptitude."
};
