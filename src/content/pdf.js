import * as path from "path";
import fs from "fs";

const schoolboxLogo = fs.readFileSync(
  path.join(__dirname, "../../src/images/logos/schoolbox.png")
);

const kdsLogo = fs.readFileSync(
  path.join(__dirname, "../../src/images/logos/kds.png")
);

const etapLogo = fs.readFileSync(
  path.join(__dirname, "../../src/images/logos/etap.png")
);

const webcoLogo = fs.readFileSync(
  path.join(__dirname, "../../src/images/logos/webco.png")
);

const yoobeeLogo = fs.readFileSync(
  path.join(__dirname, "../../src/images/logos/yoobee.png")
);

const scrumLogo = fs.readFileSync(
  path.join(__dirname, "../../src/images/logos/scrum.png")
);

//-------------------------------------------
// General
//-------------------------------------------
export const title = "Doug MacKenzie";
export const subtitle = "UI Designer. Front End Developer.";
export const location = "Melbourne, Australia";
export const email = "dougmacknz@gmail.com";
export const phone = "+61 413 620 431";
export const website = "dougmack.nz";

export const summary =
  "I'm passionate about designing and building user interfaces and experiences that make people's lives better. I get excited about efficient code, team work, sleek design, fast page loads and usability.";

//-------------------------------------------
// History
//-------------------------------------------
export const workHistory = [
  {
    company: "Schoolbox",
    position: "Web Developer",
    dateStart: "Sep 2016",
    dateEnd: "Feb 2019",
    logo: schoolboxLogo,
    summary: [
      "Working in a product team of ten—I worked my way up to leading the team in front-end development, greatly improving the coding standard with a move from jQuery to React, TypeScript and Jest."
    ]
  },
  {
    company: "The King David School",
    position: "Web Developer",
    dateStart: "Sep 2012",
    dateEnd: "Apr 2016",
    logo: kdsLogo,
    summary: [
      "Building a suite of applications to optimise and automate school processes—I launched and maintained many successful solutions for assessment marking & reporting, parent permission forms and more."
    ]
  },
  {
    company: "ETAP School Management System",
    position: "Web Developer",
    dateStart: "May 2010",
    dateEnd: "Jul 2012",
    logo: etapLogo,
    summary: [
      "Largely revolving around building custom PDF reports with PHP—I made improvements to speed up development time; eventually managing another developer and rebuilding UIs for the core product."
    ]
  },
  {
    company: "The Web Company",
    position: "Web Developer (Freelance)",
    dateStart: "Jun 2009",
    dateEnd: "Mar 2010",
    logo: webcoLogo,
    summary: [
      "Taking on projects to build complete e-commerce websites for small companies—I became a go-to consultant for payment gateway integrations."
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
    logo: yoobeeLogo,
    period: "2008 — 2009"
  },
  {
    school: "Scrum.org",
    course: "Professional Scrum Master I",
    logo: scrumLogo,
    period: "Aug 2018"
  }
];

//-------------------------------------------
// Skills
//-------------------------------------------
export const skills = [
  {
    title: "HTML + CSS",
    width: "85%",
    list: ["Accessibility", "Mobile first", "Flexbox", "Grid"]
  },
  {
    title: "JavaScript",
    width: "75%",
    list: ["Vanilla", "React", "Vue.js", "TypeScript"]
  },
  {
    title: "UI Design",
    width: "75%",
    list: ["Brainstorming", "Wireframing", "Prototyping", "User testing"]
  }
];
