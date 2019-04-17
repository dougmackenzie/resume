import React from "react";
import styled from "styled-components";
import SmoothScroll from "smooth-scroll";
import Gumshoe from "gumshoejs";
import WOW from "wow.js";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../pages/Nav/Nav";
import Intro from "../pages/Intro/Intro";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Work from "../pages/Work/Work";
import History from "../pages/History/History";
import Contact from "../pages/Contact/Contact";

const Content = styled.main`
  width: 100%;
  transition: padding 0.2s;

  @media (min-width: 769px) {
    padding-left: 300px;
  }
`;

const IndexPage = () => {
  React.useEffect(() => {
    new SmoothScroll("a[data-smoothscroll]");
    new Gumshoe("a[data-scrollspy]");
    new WOW().init();

    // Listen for scrollspy callback and apply active class to <a> element
    document.addEventListener(
      "gumshoeActivate",
      event => event.target.querySelector("a").classList.add("active"),
      false
    );

    // Listen for scrollspy callback and remove active class from <a> element
    document.addEventListener(
      "gumshoeDeactivate",
      event => event.target.querySelector("a").classList.remove("active"),
      false
    );
  }, []);

  return (
    <Layout>
      <SEO keywords={[`web developer`, `portfolio`, "front-end", `react`]} />
      <Nav />
      <Content role="main">
        <Intro id="intro" />
        <About id="about" />
        <Skills id="skills" />
        <History id="history" />
        <Work id="work" />
        <Contact id="contact" />
      </Content>
    </Layout>
  );
};

export default IndexPage;
