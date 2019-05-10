import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Gumshoe from "gumshoejs";
import WOW from "wow.js";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../slides/Nav/Nav";
import theme from "../theme";

// Pages
import Intro from "../slides/Intro/Intro";
import About from "../slides/About/About";
import Skills from "../slides/Skills/Skills";
import History from "../slides/History/History";
import Education from "../slides/Education/Education";
//import Work from "./Work/Work";
import Contact from "../slides/Contact/Contact";
import Endorsements from "../slides/Endorsements/Endorsements";

const pages = [
  {
    id: "intro",
    page: Intro,
    title: "Doug MacKenzie",
    subtitle: "Front End Engineer",
    navTitle: ""
  },
  {
    id: "about",
    page: About,
    title: "About",
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
    id: "experience",
    page: History,
    title: "Experience",
    subtitle: "My employment history",
    navTitle: "Experience"
  },
  {
    id: "education",
    page: Education,
    title: "Education",
    subtitle: "My qualifications",
    navTitle: "Education"
  },
  {
    id: "endorsements",
    page: Endorsements,
    title: "",
    subtitle: "",
    navTitle: "References"
  },
  // {
  //   id: "work",
  //   page: Work,
  //   title: "Portfolio",
  //   subtitle: "Examples of my work",
  //   navTitle: "Portfolio"
  // },
  {
    id: "contact",
    page: Contact,
    title: "Contact",
    subtitle: "Get in touch",
    navTitle: "Contact"
  }
];

const IndexPage = () => {
  React.useEffect(() => {
    new Gumshoe("a[data-scrollspy]");
    new WOW().init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO keywords={[`web developer`, `portfolio`, "front-end", `react`]} />
        <Nav pages={pages} />
        <Content role="main">
          {pages.map(page => {
            const PageComponent = page.page;
            return <PageComponent key={page.id} pages={pages} {...page} />;
          })}
        </Content>
      </Layout>
    </ThemeProvider>
  );
};

const Content = styled.main`
  width: 100%;
  transition: padding 0.2s;
  overflow: hidden;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding-left: 300px;
  }
`;

export default IndexPage;
