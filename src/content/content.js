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

// Company logos for employment history
import schoolboxLogo from "../images/logos/schoolbox.png";
import kdsLogo from "../images/logos/kds.png";
import etapLogo from "../images/logos/etap.png";
import webCoLogo from "../images/logos/webco.png";

// Testimonal avatar
import matt from "../images/references/matt.jpg";

// Skill icons
import iconJavaScript from "../images/icons/javascript.png";
import iconCSS from "../images/icons/css.png";
import iconUiDesign from "../images/icons/ui-design.png";

// Resume PDF file
import resume from "../files/resume-doug-mackenzie.pdf";

//-------------------------------------------
// General
//-------------------------------------------
export const title = "Doug MacKenzie";
export const subtitle = "UI Designer. Front End Developer.";
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
    icon: iconCSS,
    description:
      "Accessibility, CSS quirks, cross-browser compatibility and making things look good.",
    list: ["Accessibility", "Mobile first", "Flexbox", "Grid"]
  },
  {
    title: "JavaScript",
    icon: iconJavaScript,
    description:
      "A jQuery veteran who has progressed to vanilla JS & scalable web apps with React or Vue.",
    list: ["Vanilla", "React", "Vue.js", "TypeScript"]
  },
  {
    title: "UI Design",
    icon: iconUiDesign,
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
    logo: schoolboxLogo
  },
  {
    company: "The King David School",
    position: "Web Developer",
    period: "2012—2016",
    logo: kdsLogo
  },
  {
    company: "ETAP School Management System",
    position: "Web Developer",
    period: "2010—2012",
    logo: etapLogo
  },
  {
    company: "The Web Company",
    position: "Web Developer (Freelance)",
    period: "2009—2010",
    logo: webCoLogo
  }
];

//-------------------------------------------
// Testimonal
//-------------------------------------------

export const testimonal = {
  person: {
    name: "Matt Day",
    company: "Schoolbox (formerly)",
    position: "Product Lead",
    photo: matt
  },
  recommendation:
    "Doug's willingness to step up–whether to drive and self-teach the adoption of new technologies within projects, or take on Scrum Master duties–is testament to his work ethic and aptitude."
};
