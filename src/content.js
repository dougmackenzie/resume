import * as React from "react";

// Pages
import Intro from "./pages/Intro/Intro";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Work from "./pages/Work/Work";
import History from "./pages/History/History";
import Contact from "./pages/Contact/Contact";

// Icons for social links
import {
  faLinkedin,
  faGithub,
  faMedium
} from "@fortawesome/fontawesome-free-brands";

// Images for about slider
import butterflyImage from "./images/about/butterfly.jpg";
import vivianImage from "./images/about/vvn.jpg";

//-------------------------------------------
// General
//-------------------------------------------
export const title = "Doug MacKenzie";
export const subtitle = "Front End Engineer";

export const pages = [
  {
    id: "intro",
    page: Intro,
    title: title,
    subtitle: subtitle
  },
  {
    id: "about",
    page: About,
    title: "About",
    subtitle: "What I'm all about"
  },
  {
    id: "skills",
    page: Skills,
    title: "Skills",
    subtitle: "What I can do"
  },
  {
    id: "history",
    page: History,
    title: "History",
    subtitle: "My education and employment"
  },
  {
    id: "work",
    page: Work,
    title: "Portfolio",
    subtitle: "Examples of my work"
  },
  {
    id: "contact",
    page: Contact,
    title: "Contact",
    subtitle: "Get in touch"
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
